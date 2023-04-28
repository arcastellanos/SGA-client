const url = "https://localhost:7082/api/products";
const checkoutUrl = "https://localhost:7082/api/CardInformation"
const deliveryUrl = "https://localhost:7082/api/Delivery"

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

document.querySelector('#checkout').addEventListener('submit', function(e){
    e.preventDefault()
    let newCardNum = document.getElementById("cardnumber").value
    let newSecurityCode = document.getElementById("ccv").value
    let newExpDate = document.getElementById("expdate").value
    let newCHName = document.getElementById("CHName").value
            let cardInfo = {
                cardNumber : newCardNum,
                securityCode : newSecurityCode,
                expDate : newExpDate,
                cHName : newCHName
            }
            console.log(cardInfo)
            fetch(checkoutUrl, {
                method: "POST",
                headers: {
                  accept: "*/*",
                  "content-type": "application/json",
                },
                body: JSON.stringify(cardInfo),
              });console.log(cardInfo)
    //location.reload()
})
document.querySelector('#checkout').addEventListener('submit', function(e){
    e.preventDefault()
    let street = document.getElementById("streetname").value
    let city = document.getElementById("city").value
    let state = document.getElementById("state").value
    let zip = document.getElementById("zip").value
            let address = {
                city : city,
                zipCode : zip,
                street : street,
                state : state,
                orderID : 30
            }
            fetch(deliveryUrl, {
                method: "POST",
                headers: {
                  accept: "*/*",
                  "content-type": "application/json",
                },
                body: JSON.stringify(address),
              });console.log(address)
    location.reload()
})

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