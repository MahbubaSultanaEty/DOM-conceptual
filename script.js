let listItem = document.querySelectorAll(".list-item");
console.log(listItem);
const mainDiv = document.querySelector("#main-div");
// console.log(mainDiv);
// console.log(mainDiv.children[0])

const img = document.querySelector('img');

// console.log("img");
img.setAttribute("alt", "changed.jpg");
// img.setAttribute('src', "new img link");

 listItem = document.querySelectorAll(".list-item");

listItem[0].classList.add("bg-aqua");

listItem.forEach(item => {
    console.log(item);
    item.style.color = "red";
});
// another example
listItem.forEach(item => {
    console.log(item);
    item.style.backgroundColor = "lightblue";
    item.style.margin = "5px";
    item.style.padding = "5px";
});


const btn = document.getElementById("click-me-btn");
const countText = document.getElementById("count");
console.log(countText);


//  let currentCount = 0  [note: ekhane currentCount 0 theke shuru korte chaile simply function er baire ba loop er baire current count 0 set korlei hobe kintu currentCount er man nirdishto vabe #count p tag a jei shongkha ache shekhan theke count start korte chaile function er vetore parseInt(countText.innerText) formula follow korte hobe. Tobe ekhtreo parseInt bebohar mandatory noy]


btn.addEventListener('click', function () {
    let currentCount = parseInt(countText.innerText);
    currentCount++;
    countText.innerText = currentCount
})

const wishlistBtns = document.querySelectorAll(".wishlist-btn");
console.log(wishlistBtns);
const wishlistcount = document.getElementById("wishlist-count");

wishlistBtns.forEach(btn => {
    // console.log(btn);
    btn.addEventListener('click', function () {
        alert("wishlsit button pressed")
        let currentCount = parseInt(wishlistcount.innerText); //parseInt converts decimal to integer, also converts a string that has numbers at first [ex: parseInt("50 years") output 50] but [parseInt("age 20")    output NaN]
        currentCount++;
        wishlistcount.innerText = currentCount;
    })
})

const buttons = document.querySelectorAll(".add-to-cart-btn");
// console.log(buttons)

 let cart=[]
buttons.forEach(button => {
    button.addEventListener('click', function(e){
        const card = e.target.closest('.product-cart');
        console.log(card);
        e.target.closest('.product-cart')// closest(selector) DOM method। এটা current element থেকে উপরের দিকে traverse করে সবচেয়ে কাছের matching parent খুঁজে বের করে। .product-cart হলো ধরো, product card div-এর class। অর্থাৎ, তুমি button-এর click থেকে সেই button যে card-এর ভিতরে আছে তা খুঁজছো।

        const productName = card.querySelector(".product-name").textContent;
        const productprice = parseInt(card.querySelector(".product-price").textContent);
        const productCatagory = card.querySelector('.catagory-name').textContent;

        // console.log(ProductName)
        // console.log(productprice)
        const product = {
           name: productName,
            price: productprice,
            catagory: productCatagory,
            quantity : 1
        }

        addToCart(product);
    })
})

function addToCart(product) {
    const existingItem = cart.find(item => item.name == product.name);
    if (existingItem) {
        existingItem.quantity++;
    } else {
        cart.push(product);
    }
    console.log(cart);
}

const cartItemDiv= document.getElementById("cart-div")
function updateCart() {
    cartItemDiv.innerHTML = "";
    let totalItem = 0;
    let totalPrice = 0;
    cart.forEach(item => {

    })
}