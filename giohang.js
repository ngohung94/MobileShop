const getListProductMobile = JSON.parse(localStorage.getItem('dataMobile'));
const getListProductLaptop = JSON.parse(localStorage.getItem('dataLaptop'));
const gioHang = JSON.parse(localStorage.getItem('gioHang'));
const allProducts = getListProductMobile.concat(getListProductLaptop);
const gioHangStorage = [...JSON.parse(localStorage.getItem('gioHang'))];
function setCart(data) {
    if (data) {
        document.getElementById('listGio').innerHTML = data.length;
        if(data.length === 0){
          document.getElementById('listGio').style.display = "none"
        }else{
          document.getElementById('listGio').style.display = "inline-block"
        }
    }

}
setCart(gioHangStorage);


function showProductListCard() {
  const getListProductMobile = JSON.parse(localStorage.getItem('dataMobile'));
  const getListProductLaptop = JSON.parse(localStorage.getItem('dataLaptop'));
  const gioHang = JSON.parse(localStorage.getItem('gioHang'));
  const allProducts = getListProductMobile.concat(getListProductLaptop);
  const gioHangStorage = [...JSON.parse(localStorage.getItem('gioHang'))];
  setCart(gioHangStorage);
    let result ="";
   
    const listProductIncart = allProducts.filter(data => gioHang.find(id => data.id === id));
    const listProducts = document.getElementById('list-product');
      if (Array.isArray(listProductIncart)) {
          if (listProductIncart.length > 0) {
            for ( let data of listProductIncart){           
              result +=
                `<div class="item-gio-hang">
                      <div class="img">
                        <img
                          src="${data.img}"
                          alt="${data.name}">
                      </div>
                      <p class="name">${data.name}</p>
                      <div class="price" data-price="${data.price}">
                        ${data.price.toLocaleString('it-IT', {style : 'currency', currency : 'VND'})}
                      </div>
                      <input type="number" class="quantity" value="1">
                      <div class="del" onclick="deleteData('${data.id}')">
                        <i class="fa fa-trash" aria-hidden="true"></i>
                      </div>
                </div>`
              }
          }
      }
    return listProducts.innerHTML = result;
}

showProductListCard()

function updateCart() {
  let allCart = document.getElementById('list-product')[0];
  let itemCart = document.getElementsByClassName("item-gio-hang");
  let total = 0;
  for (let i = 0; i < itemCart.length; i++) {
    let itCart = itemCart[i]
    let price_item = itCart.getElementsByClassName("price")[0]
    let quantity_item = itCart.getElementsByClassName("quantity")[0]
    let quantity = quantity_item.value
    total += (price_item.dataset.price*quantity)
  }
  document.getElementsByClassName("cart-total-price")[0].innerText = total.toLocaleString('it-IT', {style : 'currency', currency : 'VND'})
}
updateCart()

function deleteData(id){
  let result = confirm("Want to delete?");
    if (result) {
      let gioHang = JSON.parse(localStorage.getItem("gioHang"))
        console.log(gioHang)
      let foundIndex = gioHang.filter(i=> i !== id);
      localStorage.setItem("gioHang",JSON.stringify(foundIndex));
    }
    showProductListCard()
    updateCart()
}

let quantity = document.getElementsByClassName("quantity");
  for (let i = 0; i < quantity.length; i++) {
    let input = quantity[i];
    input.addEventListener("change", function (event) {
      let input = event.target
      if (isNaN(input.value) || input.value <= 0) {
        input.value = 1;
      }
      updateCart()
    })
  }


 // Giỏ hàng : gửi thông tin khách hàng
function onSubmitForm(event) {
  let error = false  ;
  event.preventDefault();
  let cartDetail = event.target.parentNode
  const getCustomForm = JSON.parse(localStorage.getItem('customerForm'));
  let orderDetail = {
    name: cartDetail.querySelector("#guest-name").value,
    phone: cartDetail.querySelector("#guest-phone-number").value,
    address: cartDetail.querySelector("#guest-address").value,
    request: cartDetail.querySelector("#request").value,
    order: gioHang
    };
  if(!cartDetail.querySelector("#guest-name").value){
    error = true ;
    document.getElementById('guest-name-error').innerText = "Vui lòng nhập tên"
  }else {
    document.getElementById('guest-name-error').innerText = ""
  }
  if(!cartDetail.querySelector("#guest-phone-number").value){
    error = true ;
    document.getElementById('guest-phone-number-error').innerText = "Vui lòng nhập số điện thoại"
  }else {
    document.getElementById('guest-phone-number-error').innerText = ""
  }
  if(!cartDetail.querySelector("#guest-address").value){
    error = true ;
    document.getElementById('guest-address-error').innerText = "Vui lòng nhập địa chỉ"
  }else {
    document.getElementById('guest-address-error').innerText = ""
  }

  if(!error){
    if(!getCustomForm){
      let customerForm=[]
        customerForm.push(orderDetail);
        localStorage.setItem("customerForm", JSON.stringify(customerForm));
    }
    else{
      let newCustomForm = [...getCustomForm];
      newCustomForm.push(orderDetail)
      localStorage.setItem("customerForm", JSON.stringify(newCustomForm)); 
    }
    alert("Đặt hàng thành công")
  }

}

