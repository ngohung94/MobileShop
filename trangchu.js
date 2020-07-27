

function myFunction() {
    let input, filter, ul, li, a, i, txtValue;
    input = document.getElementById("myInput");
    filter = input.value.toUpperCase();
    ul = document.getElementById("myUL");
    li = ul.getElementsByTagName("li");
    for (i = 0; i < li.length; i++) {
        a = li[i].getElementsByTagName("a")[0];
        txtValue = a.textContent || a.innerText;
        if (filter != '' && filter != ' ' && txtValue.toUpperCase().indexOf(filter) > -1) {
            li[i].style.display = "";
            document.getElementById("up").style.display = "block";
        } else {
            li[i].style.display = "none";
        }
    }
}
window.addEventListener('click', function(e){	
	if (!document.getElementById('search-box').contains(e.target)){
    let input, filter, ul, li, a, i, txtValue;
            input = document.getElementById("myInput");
            filter = input.value.toUpperCase();
            ul = document.getElementById("myUL");
            li = ul.getElementsByTagName("li");
            for (i = 0; i < li.length; i++) {
                a = li[i].getElementsByTagName("a")[0];
                txtValue = a.textContent || a.innerText;
                if (filter != '' && txtValue.toUpperCase().indexOf(filter) > -1) {
                    li[i].style.display = "";
                    document.getElementById("up").style.display = "none";
                } else {
                    li[i].style.display = "none";
                }
            }
    }
})


let dataMobile = [
    {
        a: "./ip11.html",
        img: "https://images.fpt.shop/unsafe/fit-in/192x192/filters:quality(90):fill(white)/cdn.fptshop.com.vn/Uploads/Originals/2019/9/11/637037687757921048_11-pro-max-chung.png",
        name: "Iphone 11 Pro",
        price: 28000000,
        priceSale: 30490000,
        id: "moible-1"
    },
    {
        a: "./ip11.html",
        img: "https://images.fpt.shop/unsafe/fit-in/192x192/filters:quality(90):fill(white)/cdn.fptshop.com.vn/Uploads/Originals/2019/8/1/637002351614380313_636749593270587915_iphoneXS-1o.png",
        name: "Iphone XS",
        price: 25990000,
        priceSale: 30990000,
        id: "moible-2"
    },
    {
        a: "./ip11.html",
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTxbffX3s3tgGVaUGQBv7Jlz1BGMLRlAmbH-I1o4PkflXS84d8AXApvOcfwrhE&usqp=CAc",
        name: "Iphone 8 Plus",
        price: 13990000,
        priceSale: 15490000,
        id: "moible-3"
    },
    {
        a: "./ip11.html",
        img: "data:image/png;base64,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",
        name: "Iphone 7",
        price: 7490000,
        priceSale: 8490000,
        id: "moible-4"
    },
    {
        a: "./ip11.html",
        img: "https://images.fpt.shop/unsafe/fit-in/192x192/filters:quality(90):fill(white)/cdn.fptshop.com.vn/Uploads/Originals/2018/1/27/636526515750427366_1o-6splus-32.png",
        name: "Iphone 6",
        price: 6490000,
        priceSale: 7490000,
        id: "moible-5"
    },
    {
        a: "./ip11.html",
        img: "https://images.fpt.shop/unsafe/fit-in/192x192/filters:quality(90):fill(white)/cdn.fptshop.com.vn/Uploads/Originals/2020/2/12/637170944168255808_ss-s20-plus-xanh-dd.png",
        name: "Samsung S20+",
        price: 25590000,
        priceSale: 28490000,
        id: "moible-6"
    },
    {
        a: "./ip11.html",
        img: "https://images.fpt.shop/unsafe/fit-in/192x192/filters:quality(90):fill(white)/cdn.fptshop.com.vn/Uploads/Originals/2019/8/9/637009484555889036_SS-note-10-dd-1.png",
        name: "Samsung Note 10",
        price: 21490000,
        priceSale: 22990000,
        id: "moible-7"
    },
    {
        a: "./ip11.html",
        img: "https://images.fpt.shop/unsafe/fit-in/192x192/filters:quality(90):fill(white)/cdn.fptshop.com.vn/Uploads/Originals/2019/2/21/636863616938548520_ss-galaxy-s10-plus-daidien.png",
        name: "Samsung S10+",
        price: 13990000,
        priceSale: 18990000,
        id: "moible-8"
    },
    {
        a: "./ip11.html",
        img: "https://images.fpt.shop/unsafe/fit-in/192x192/filters:quality(90):fill(white)/cdn.fptshop.com.vn/Uploads/Originals/2020/3/12/637196199369044830_ss-a71-hong-dd.png",
        name: "Samsung A71",
        price: 9290000,
        priceSale: 10490000,
        id: "moible-9"
    },
    {
        a: "./ip11.html",
        img: "https://images.fpt.shop/unsafe/fit-in/465x465/filters:quality(90):fill(white)/cdn.fptshop.com.vn/Uploads/Originals/2020/6/2/637267175905809175_SaS-A21s-den-1.png",
        name: "Samsung A21s",
        price: 4390000,
        priceSale: 4690000,
        id: "moible-10"
    },
    {
        a: "./ip11.html",
        img: "https://cdn.tgdd.vn/Products/Images/42/198150/oppo-find-x2-blue-600x600-600x600.jpg",
        name: "OPPO Find X2",
        price: 19990000,
        priceSale: 23990000,
        id: "mobile-11"
    },
    {
        a: "./ip11.html",
        img: "https://cdn.tgdd.vn/Products/Images/42/216172/oppo-reno3-pro-den-600x600-200x200.jpg",
        name: "OPPO Reno3 Pro",
        price: 11490000,
        priceSale: 14990000,
        id: "mobile-12"
    },
    {
        a: "./ip11.html",
        img: "https://cdn.tgdd.vn/Products/Images/42/209800/TimerThumb/oppo-reno2-f-(23).jpg",
        name: "OPPO Reno2 F",
        price: 6990000,
        priceSale: 8990000,
        id: "mobile-13"
    },
    {
        a: "./ip11.html",
        img: "https://cdn.tgdd.vn/Products/Images/42/220654/TimerThumb/oppo-a92-(11).jpg",
        name: "OPPO A92",
        price: 6499000,
        priceSale: 6990000,
        id: "mobile-14"
    },
    {
        a: "./ip11.html",
        img: "https://cdn.tgdd.vn/Products/Images/42/202028/oppo-a9-600x600-trang-600x600.jpg",
        name: "OPPO A9",
        price: 5490000,
        priceSale: 6990000,
        id: "mobile-15"
    }
    
];
let dataLaptop = [
    {
        a: "./mb.html",
        img: "https://images.fpt.shop/unsafe/fit-in/240x215/filters:quality(90):fill(white)/cdn.fptshop.com.vn/Uploads/Originals/2019/11/18/637096956683492064_MBP-16-touch-dd.png",
        name: "MacBook Pro 16",
        price: 69990000,
        priceSale: 71990000,
        id: "laptop-1"
    },
    {
        a: "./mb.html",
        img: "https://images.fpt.shop/unsafe/fit-in/240x215/filters:quality(90):fill(white)/cdn.fptshop.com.vn/Uploads/Originals/2020/6/5/637269501975415139_mb-pro-13-2020-xam-dd.png",
        name: "Macbook Pro 15",
        price: 50590000,
        priceSale: 52490000,
        id: "laptop-2"
    },
    {
        a: "./mb.html",
        img: "https://images.fpt.shop/unsafe/fit-in/240x215/filters:quality(90):fill(white)/cdn.fptshop.com.vn/Uploads/Originals/2019/5/31/636948957624237933_macbook-pro--touch-bar-2019-dd.png",
        name: "Macbook Pro 13",
        price: 31490000,
        priceSale: 34490000,
        id: "laptop-3"
    },
    {
        a: "./mb.html",
        img: "https://images.fpt.shop/unsafe/fit-in/240x215/filters:quality(90):fill(white)/cdn.fptshop.com.vn/Uploads/Originals/2018/8/2/636688207026520043_mabookair-1o.png",
        name: "Macbook Air 13",
        price: 18990000,
        priceSale: 21990000,
        id: "laptop-4"
    },
    {
        a: "./mb.html",
        img: "https://images.fpt.shop/unsafe/fit-in/240x215/filters:quality(90):fill(white)/cdn.fptshop.com.vn/Uploads/Originals/2020/4/11/637221970108314570_macbook-air-13-2019-gold-dd.png",
        name: "Macbook Air 11",
        price: 21499000,
        priceSale: 24490000,
        priceSale: 28490000,
        id: "laptop-5"
    },
    {
        a: "./mb.html",
        img: "https://images.fpt.shop/unsafe/fit-in/240x215/filters:quality(90):fill(white)/cdn.fptshop.com.vn/Uploads/Originals/2019/8/12/637012257235983478_dell-inspiron-n7591-bac-dd.png",
        name: "Dell Inspiron N5391",
        price: 25990000,
        priceSale: 26490000,
        id: "laptop-6"
    },
    {
        a: "./mb.html",
        img: "https://images.fpt.shop/unsafe/fit-in/240x215/filters:quality(90):fill(white)/cdn.fptshop.com.vn/Uploads/Originals/2019/10/30/637080249231935669_dell-vostro-v3590-den-dd.png",
        name: "Dell Inspiron V3590",
        price: 16990000,
        priceSale: 17490000,
        id: "laptop-7"
    },
    {
        a: "./mb.html",
        img: "https://images.fpt.shop/unsafe/fit-in/240x215/filters:quality(90):fill(white)/cdn.fptshop.com.vn/Uploads/Originals/2019/10/30/637080260545554055_dell-n5593-bac-dd.png",
        name: "Dell Inspiron N3493",
        price: 15090000,
        priceSale: 15590000,
        id: "laptop-8"
    },
    {
        a: "./mb.html",
        img: "https://images.fpt.shop/unsafe/fit-in/240x215/filters:quality(90):fill(white)/cdn.fptshop.com.vn/Uploads/Originals/2019/6/17/636963880700113211_dell-inspiron-n3480-bac-dd.png",
        name: "Dell Inspiron N3481",
        price: 11790000,
        priceSale: 12290000,
        id: "laptop-9"
    },
    {
        a: "./mb.html",
        img: "https://images.fpt.shop/unsafe/fit-in/240x215/filters:quality(90):fill(white)/cdn.fptshop.com.vn/Uploads/Originals/2020/3/4/637189395685735237_dell-inspiron-n3493-den-dd.png",
        name: "Dell Inspiron N3477",
        price: 10590000,
        priceSale: 10990000,
        id: "laptop-10"
    },
]

localStorage.setItem("dataMobile", JSON.stringify(dataMobile));
localStorage.setItem("dataLaptop", JSON.stringify(dataLaptop));

let newData = JSON.parse(localStorage.getItem("dataMobile"));
let newData1 = JSON.parse(localStorage.getItem("dataLaptop"));

function dataList(dataBase, idElement) {
    let html = ''
    if(dataBase){
        for (let data of dataBase) {
            html += ` <div class="mb-form">
        <a href="${data.a}">
            <img
            src="${data.img}"></br></br>
            <p>${data.name} </p>
            <p class="price">
            <strong>${data.price.toLocaleString('it-IT', {style : 'currency', currency : 'VND'})}</strong></br>
            <s>${data.priceSale.toLocaleString('it-IT', {style : 'currency', currency : 'VND'})}</s>
            </p>
        </a>
        <p class="add">
            <button onclick="addCart('${data.id}')" data-arg1="${data.id} " id="${data.id}">
            <strong>Thêm vào giỏ </strong>
            </button>
        </p>
        </div>`
        }
        document.getElementById(`${idElement}`).innerHTML = html
    }
}
dataList(newData,"mobile")
dataList(newData1,"laptop")


const addCart = (idd)=> {
    const checkCart = localStorage.getItem('gioHang');
    if (checkCart) {
        const gioHangStorage = [...JSON.parse(localStorage.getItem('gioHang'))];
        gioHangStorage.push(idd)
        localStorage.setItem('gioHang', JSON.stringify(gioHangStorage));
        document.getElementById('listGio').innerHTML = gioHangStorage.length;
        if(gioHangStorage.length === 0){
            document.getElementById('listGio').style.display = "none"
        }else{
            document.getElementById('listGio').style.display = "inline-block"
        }
        alert("Đã thêm vào giỏ hàng")
    }
    else {
        localStorage.setItem('gioHang', JSON.stringify([]))
    }
}

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
