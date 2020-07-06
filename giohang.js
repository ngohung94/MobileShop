const getListProductMobile = JSON.parse(localStorage.getItem('dataMobile'));
const getListProductLaptop = JSON.parse(localStorage.getItem('dataLaptop'));
const gioHang = JSON.parse(localStorage.getItem('gioHang'));
const allProducts = getListProductMobile.concat(getListProductLaptop);
const gioHangStorage = [...JSON.parse(localStorage.getItem('gioHang'))];
function setCart(data) {
    if (data) {
        document.getElementById('listGio').innerHTML = data.length;
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
    let result;
    const listProductIncart = allProducts.filter(data => gioHang.find(id => data.id === id));
    const listProducts = document.getElementById('list-product');
      if (Array.isArray(listProductIncart)) {
          if (listProductIncart.length > 0) {
            for ( let i = 0; i < listProductIncart.length ; i++){
              if(i !== 0){
              result += 
                   `<div class="item-gio-hang">
                      <div class="img">
                        <img
                          src="${listProductIncart[i].img}"
                          alt="${listProductIncart[i].name}">
                      </div>
                      <p class="name">${listProductIncart[i].name}</p>
                      <div class="price" data-price="${listProductIncart[i].price}">
                        ${listProductIncart[i].price.toLocaleString('it-IT', {style : 'currency', currency : 'VND'})}
                      </div>
                      <input type="number" class="quantity" value="1">
                      <div class="del" onclick="deleteData()">
                        <i class="fa fa-trash" aria-hidden="true"></i>
                      </div>
                  </div>`
              }
            }
              console.log(result)
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

function deleteData(name){
  let result = confirm("Want to delete?");
    if (result) {
      let gioHang = JSON.parse(localStorage.getItem("gioHang"))
      let foundIndex = gioHang.findIndex(function(item){
          return item.name == name;
        });
      if(foundIndex !== -1){
        gioHang.splice(foundIndex,1)
      }else {
          console.log("not found");
      }
      localStorage.setItem("gioHang",JSON.stringify(gioHang));
     
    }~
    showProductListCard()
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
  event.preventDefault();
  let customerForm = [];
  let customer = {
      name: document.getElementById("name").value,
      phone: document.getElementById("phone").value,
      address: document.getElementById("address").value,
      request: document.getElementById("request").value,
  };
  customerForm.push(customer);
  localStorage.setItem("customerForm", JSON.stringify(customerForm));
  showData();
}

function showData() {
  let jsonData = localStorage.getItem("customerForm");
  let customerForm = JSON.parse(jsonData);
  let html = `<ul>`;
  for (let form of customerForm) {
      html += `
              <li>
                  Name : <b>${form.name}</b></br>
                  Số điện thoại : <b>${form.phone}</b></br>
                  Địa chỉ  : <b>${form.address}</b></br>
                  Yêu cầu khác : <b>${form.request}</b></br>
              </li>
                  `;
  }
  html += `</ul>`;
  document.getElementById("app").innerHTML = html;
}

