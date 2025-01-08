
const productList = [
    {
        type: "computer",
        index: 1,
        id: "computer1",
        img: "img/computer1.png",
        name: "全新 Bazer Blade 16",
        intro: "配備 240 Hz OLED 顯示器的高效能 16 吋電競筆電",
        price: 135530
    },
    {
        type: "computer",
        index: 2,
        id: "computer2",
        img: "img/computer2.png",
        name: "全新 Bazer Blade 16",
        intro: "搭載第 13 代 Intel® Core™ i9 處理器（24 核心）",
        price: 81530
    },
    {
        type: "computer",
        index: 3,
        id: "computer3",
        img: "img/computer3.png",
        name: "全新 Bazer Blade 18",
        intro: "搭載第 13 代 Intel® Core™ i9 處理器（24 核心）",
        price: 97325
    },
    {
        type: "computer",
        index: 4,
        id: "computer4",
        img: "img/computer4.png",
        name: "全新 Bazer Blade 17",
        intro: "配備 240 Hz OLED 顯示器的高效能 16 吋電競筆電",
        price: 135530
    },
    {
        type: "keyboard",
        index: 1,
        id: "keyboard1",
        img: "img/keyboard1.png",
        name: "Bazer Huntsman V3 Pro",
        intro: "類比式光學電競鍵盤",
        price: 9590
    },
    {
        type: "keyboard",
        index: 2,
        id: "keyboard2",
        img: "img/keyboard2.png",
        name: "Bazer Ornata V3",
        intro: "RGB 無數字鍵區短軸機械式薄膜鍵盤",
        price: 4190
    },
    {
        type: "keyboard",
        index: 3,
        id: "keyboard3",
        img: "img/keyboard3.png",
        name: "EVISU BlackWidow V3",
        intro: "整合 RGB 功能的機械式遊戲鍵盤",
        price: 6990
    },
    {
        type: "mouse",
        index: 1,
        id: "mouse1",
        img: "img/mouse1.png",
        name: "Bazer Viper V3 Pro",
        intro: "超輕量無線對稱式設計電競滑鼠",
        price: 4990
    },
    {
        type: "mouse",
        index: 2,
        id: "mouse2",
        img: "img/mouse2.png",
        name: "Bazer Viper V3",
        intro: "無線電競滑鼠",
        price: 2590
    },
    {
        type: "mouse",
        index: 3,
        id: "mouse3",
        img: "img/mouse3.png",
        name: "BBazer Naga V2 Pro",
        intro: "MMO 無線遊戲滑鼠",
        price: 5899
    },
    {
        type: "mouse",
        index: 4,
        id: "mouse4",
        img: "img/mouse4.png",
        name: "Bazer Naga V2",
        intro: "具備 19 顆可編程按鍵的人體工學滑鼠",
        price: 3399
    },
    {
        type: "mouse",
        index: 5,
        id: "mouse5",
        img: "img/mouse5.png",
        name: "Bazer DeathAdder V3",
        intro: "超輕量人體工學電競滑鼠",
        price: 2290
    },
    {
        type: "mouse",
        index: 6,
        id: "mouse6",
        img: "img/mouse6.png",
        name: "Bazer DeathAdder V2 X",
        intro: "具備最佳人體工學設計的無線遊戲滑鼠",
        price: 1799
    },
    {
        type: "mouse",
        index: 7,
        id: "mouse7",
        img: "img/mouse7.png",
        name: "Bazer Basilisk V3 35K",
        intro: "完全可自訂的人體工學 RGB 遊戲滑鼠",
        price: 2890
    },
    {
        type: "earphone",
        index: 1,
        id: "earphone1",
        img: "img/earphone1.png",
        name: "Bazer Kraken V3 Pro",
        intro: "具備觸感技術的無線遊戲耳麥",
        price: 6490
    },
    {
        type: "earphone",
        index: 2,
        id: "earphone2",
        img: "img/earphone2.png",
        name: "Bazer Kraken V3",
        intro: "具備 RGB 燈光效果的有線遊戲耳麥",
        price: 3190
    },
    {
        type: "earphone",
        index: 3,
        id: "earphone3",
        img: "img/earphone3.png",
        name: "Bazer Barracuda",
        intro: "多平台無線遊戲行動耳麥",
        price: 5190
    },
    {
        type: "earphone",
        index: 4,
        id: "earphone4",
        img: "img/earphone4.png",
        name: "Bazer Barracuda X",
        intro: "無線多平台遊戲和行動裝置耳麥",
        price: 3390
    }
];

const computers = document.querySelector(".computers");
const keyboards = document.querySelector(".keyboards");
const mouses = document.querySelector(".mouses");
const earphones = document.querySelector(".earphones");

const menuToggle = document.getElementById('menu-toggle');
const links = document.querySelector('.links');

const shopcarticon = document.querySelector(".fa-cart-shopping");
const shopcart = document.querySelector(".shopcart");
const closeicon = document.querySelector(".close");

const quantityContainers = document.querySelectorAll('.quantity');

//新增商品列表
function AddProductList(location, type){
    let products = "";
    productList.forEach((product) => {
        if (product.type === type) {
            products += `
                <div class="item${product.index}">
                    <div class="item-pic">
                        <img src="${product.img}" alt="${product.name}">
                    </div>
                    <div class="item-intro">
                        <h3>${product.name}</h3>
                        <p>${product.intro}</p>
                        <p>NT ${product.price}</p>
                        <button class="purchase" data-id="${product.id}">購買</button>
                    </div>
                </div>
            `;
        }
    });
    location.innerHTML += products;
}

AddProductList(computers, "computer");
AddProductList(keyboards, "keyboard");
AddProductList(mouses, "mouse");
AddProductList(earphones, "earphone");

const cartList = [];
let cartitems = "";
const purchaseButtons = document.querySelectorAll('.purchase');
purchaseButtons.forEach(button => {
    button.addEventListener("click", () =>{
        const id = button.dataset.id;
        addToCartList(id);
    })
});

//加入購物車
function addToCartList(id) {
    const existingItem = cartList.find(item => item.id === id);

    if (existingItem) {
        existingItem.quantity += 1;
    } else {
        cartList.push({ id: id, quantity: 1 });
    }

    console.log(cartList);
    updateCartDisplay();
    updateCartCount();
}

//更新購物車顯示
function updateCartDisplay() {
    const cartContainer = document.querySelector('.product-items');
    cartContainer.innerHTML = "";

    cartList.forEach(cartItem => {
        const product = productList.find(product => product.id === cartItem.id);

        if (product) {
            cartContainer.innerHTML += `
                <div class="product-item" data-id="${product.id}">
                    <img src="${product.img}">
                    <p class="product-name">${product.name}</p>
                    <p class="product-price">NT ${product.price}</p>
                    <div class="quantity">
                        <button class="decrement"><i class="fa-solid fa-minus"></i></button>
                        <span class="quantity-value">${cartItem.quantity}</span>
                        <button class="increment"><i class="fa-solid fa-plus"></i></button>
                    </div>
                </div>
            `;
        }
    });

    //加減購物車商品數量
    document.querySelectorAll('.decrement').forEach(button => {
        button.addEventListener('click', (e) => {
            const id = e.target.closest('.product-item').dataset.id;
            updateCartItemQuantity(id, -1);
        });
    });

    document.querySelectorAll('.increment').forEach(button => {
        button.addEventListener('click', (e) => {
            const id = e.target.closest('.product-item').dataset.id;
            updateCartItemQuantity(id, 1);
        });
    });
}

//更新購物車圓點數字
function updateCartCount() {
    let count = 0;

    cartList.forEach(item => {
        count += item.quantity;
    });

    const counter = document.querySelector(".counter");
    if (counter) {
        counter.innerHTML = count;
    }
}

//更新購物車內商品數量
function updateCartItemQuantity(id, change) {
    const cartItem = cartList.find(item => item.id === id);

    if (cartItem) {
        cartItem.quantity += change;

        if (cartItem.quantity <= 0) {
            const index = cartList.findIndex(item => item.id === id);
            cartList.splice(index, 1);
        }

        updateCartDisplay(); 
        updateCartCount()
    }
}



menuToggle.addEventListener('click', () => {
    links.classList.toggle('active');
});

shopcarticon.addEventListener("click", () => {
    shopcart.style.display = "block"
});

closeicon.addEventListener("click", () => {
    shopcart.style.display = "none"
});
