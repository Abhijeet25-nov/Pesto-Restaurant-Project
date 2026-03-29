let menu = document.querySelector(".menu-icon");
let navbar= document.querySelector(".navbar");
let cartIcon=document.querySelector('.cart-icon');
let cartModel=document.querySelector('.cart-model');
let cartClose=document.querySelector('.close-btn');

let cartItems=JSON.parse(sessionStorage.getItem('cartItems')) || [];
let total=0;
let itemCount=0;

const animate =ScrollReveal({
    origin:'top',
    distance:'80px',
    duration:'1700',
    delay:'110',
});

animate.reveal('.home-text',{origin:"left"});
animate.reveal('.home-img',{origin:"bottom"});
animate.reveal('.heading,.newsletter h2',{origin:"top"})
animate.reveal('header,.feature-box,.feature-menu-box,.item-box,.m-item-box,.t-box,.newsletter',{interval:50});

///Add to ccart
function addToCart(productCard){
    const name=productCard.querySelector('.product-name').textContent;
    const priceText=productCard.querySelector('.product-price').textContent;
    const price =parseFloat(priceText.replace('Rs',''))
    const imgSrc=productCard.querySelector('.product-image').src;

    const existingItem =cartItems.find((item)=> item.name=== name);
    if (existingItem) {
        existingItem.quantity +=1;
    }else{
        cartItems.push({
        name,
        price,
        quantity :1,
        image: imgSrc, 
        });
    }
    updateLocalStorage();
    updateCartDisplay();
}

//Remove from cart
function removeItem(name){
    cartItems = cartItems.filter((item) => item.name !== name);
    updateLocalStorage();
    updateCartDisplay();
}

//Show Cart item in cart
function updateCartDisplay(){
    const cartList=document.getElementById('cart-items');
    const totalElement=document.getElementById('total-price');
    const countElement=document.getElementById('cart-count');

    cartList.innerHTML='';
    total=cartItems.reduce((sum,item)=>sum + item.price*item.quantity, 0);
    itemCount=cartItems.reduce((count,item) => count + item.quantity, 0);

    cartItems.forEach((item) => {
        const li=document.createElement('li');
        li.classList = 'cart-item';
        li.innerHTML=`
        <img src="${item.image}" alt="${item.name}" class="cart-item-image">
        <div class="cart-item-details">
            <div class="cart-item-name">${item.name}</div>
            <div class="cart-item-price">Rs.${item.price} x ${item.quantity}</div>  
        </div>
        <div class="quantity-controls">
            <button onclick="changeQuantity('${item.name}',-1)">-</button>
            <button onclick="changeQuantity('${item.name}',1)">+</button>
        </div>
        <button class="remove" onclick="removeItem('${item.name}')">x</button>`;
        
        cartList.appendChild(li);
    });
    totalElement.textContent = total.toFixed(2);
    countElement.textContent=itemCount;
}

//Quantity change
function changeQuantity(name,delta){
    const item= cartItems.find((item)=> item.name===name);
    if (item) {
        item.quantity += delta;
        if(item.quantity <= 0){
            removeItem(name);
        }else{
            updateLocalStorage();
            updateCartDisplay();
        }
    }
}
//Store Cart in local storage to remain on page refresh
function updateLocalStorage() {
    sessionStorage.setItem('cartItems',JSON.stringify(cartItems));
}

//load card on PAge Refresh
window.onload= function(){
    updateCartDisplay();
}


menu.onclick=()=>{
    menu.classList.toggle("move");
    navbar.classList.toggle("open-menu");
};

//Cart Open Close


cartIcon.onclick=() => {
    cartModel.classList.add("open-cart");
};

cartClose.onclick=() => {
    cartModel.classList.remove("open-cart");
};

document.getElementById("checkout-form").addEventListener("submit", function () {
    document.getElementById("cart-input").value = JSON.stringify(cartItems);
});