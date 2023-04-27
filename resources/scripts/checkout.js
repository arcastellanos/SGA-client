const url = "https://localhost:7082/api/products";
let cart = []
let Products = []

function RemoveFromCart(productToRemove) { 
let cart = JSON.parse(localStorage.getItem("cart")); let indexToRemove = -1; 
// find the index of the item to remove 
for (let i = 0; i < cart.length; i++) { if (cart[i].productID === productToRemove) { indexToRemove = i; break; } } 
// remove the item from the cart array 
if (indexToRemove !== -1) { cart.splice(indexToRemove, 1); console.log(cart) } 
// store the updated cart array back to localStorage 
localStorage.setItem("cart", JSON.stringify(cart)); 
renderItems();}


function handleOnLoad(){
    
    fetch(url)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
    //console.log("test")
      Products = data;
      console.log(Products)
      Products.reverse();
    renderItems()
      

    });
}
let renderItems = function(){ 
    let html = `<div class = row>` 
    let cart = JSON.parse(localStorage.getItem("cart")) || []; // get the cart array from localStorage or create an empty array if it doesn't exist 
    console.log(cart)
    cart.forEach(function (item){ 
    let product = Products.find(p => p.productID === item.productID); // find the corresponding product for the item in the cart 
    if (product) { 
        html += ` 
            <div class="card m-4" style="width: 18rem;"> 
                <div class="card-body"> 
                    <img src="${product.productUrl}" class="card-img" alt="${product.productName}" style="width: 150px; height: 100px; object-fit: cover;"> 
                    <br> 
                    <h5 class="card-title">${product.productName}</h5>
                    <br> 
                    <p class="card-text">Price: ${product.productPrice}</p> 
                    <p onclick=RemoveFromCart(${product.productID}) class="btn btn-outline-danger">Remove from cart</p> 
                    </div> 
                    </div> 
                    `; 
                } 
            }); 
            html += "</div>"
            document.getElementById("cards").innerHTML = html; 
}

// function AddToCart(productIDtoadd) {
//   localStorage.setItem("cart", JSON.stringify(cart));
//   if (JSON.parse(localStorage.getItem("cart")) != null) {
//     cart = JSON.parse(localStorage.getItem("cart"));
//     itemtoadd = { productID: productIDtoadd };
//     cart.unshift(itemtoadd);
//     localStorage.setItem("cart", JSON.stringify(cart));
//     console.log(JSON.parse(localStorage.getItem("cart")));
//   } else {
//     alert("Error adding to cart");
//   }
// }