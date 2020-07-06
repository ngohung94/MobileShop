const getListProductMobile = JSON.parse(localStorage.getItem('dataMobile'));
const getListProductLaptop = JSON.parse(localStorage.getItem('dataLaptop'));
const gioHang = JSON.parse(localStorage.getItem('gioHang'));
const allProducts = getListProductMobile.concat(getListProductLaptop);
function setCart() {
    const gioHangStorage = [...JSON.parse(localStorage.getItem('gioHang'))];
    if (gioHangStorage) {
        document.getElementById('listGio').innerHTML = gioHangStorage.length;
    }

}
setCart();


function showProductListCard() {
    let result;
    const listProductIncart = allProducts.filter(data => gioHang.find(id => data.id === id));
    const listProducts = document.getElementById('list-product');
      if (Array.isArray(listProductIncart)) {
          if (listProductIncart.length > 0) {
              result = listProductIncart.map(data => {
                  return `<div class="item-gio-hang">
                  <div class="img">
                    <img
                      src="${data.img}"
                      alt="${data.name}">
                  </div>
                  <p class="name">${data.name}</p>
                  <div class="price">
                    ${data.price}
                  </div>
                  <input type="number" class="quantity" value="1">
                  <div class="del" onclick="deleteData()">
                    <i class="fa fa-trash" aria-hidden="true"></i>
                  </div>
                </div>`
                
              })
          }
      }
    return listProducts.innerHTML = result;
}

showProductListCard()

function deleteData(name){
  let result = confirm("Want to delete?");
    if (result) {
      let gioHang = JSON.parse(localStorage.getItem("gioHang"))
      let foundIndex = gioHang.findIndex(function(item){
          return item.name == name;
        });
      if(foundIndex >= 0){
        gioHang.splice(foundIndex,1)
      }else {
          console.log("not found");
      }
      localStorage.setItem("gioHang",JSON.stringify(gioHang));
      updateCart()
    }
}

function updateCart() {
    let allCart = document.getElementById('list-product')[0];
    let itemCart = allCart.getElementsByClassName("item-gio-hang");
    let total = 0;
    for (let i = 0; i < itemCart.length; i++) {
      let itCart = itemCart[i]
      let price_item = itCart.getElementsByClassName("price")[0]
      let quantity_item = itCart.getElementsByClassName("quantity")[0]
      let price = parseFloat(price_item.innerText)
      let quantity = quantity_item.value
      total = total + (price*quantity)
    }
    document.getElementsByClassName("cart-total-price")[0].innerText = total + 'VNĐ'
    console.log("ádas")
}
updateCart()
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