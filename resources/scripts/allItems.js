const url = "https://localhost:7082/api/products";
let cart = []
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
    Products.forEach(function (Product){
        html += `
                    <div class="card m-4" style="width: 18rem;">
                            <div class="card-body">
                                <img src="${Product.productUrl}" class="card-img" alt="${Product.productName}" style="width: 150px; height: 100px; object-fit: cover;""
                                <br>
                                <h5 class="card-title">${Product.productName}</h5>
                                <br>
                                <p class="card-text">Price: ${Product.productPrice}</p>
                                <p onclick=AddToCart(${Product.productID}) class="btn btn-outline-success">Add to cart</p>
                            </div>
                        </div>
                    `;
          
      
    })
    html += "</div>"
    document.getElementById("cards").innerHTML = html;
}
function AddToCart(productIDtoadd){//NOT WORKING
    cart = "0"
    localStorage.setItem("cart", cart)
    if(JSON.parse(localStorage.getItem("cart")) != null){
        cart = JSON.parse(localStorage.getItem("cart"))
        itemtoadd = {productID : productIDtoadd}
        cart.unshift(itemtoadd)

        localStorage.setItem("cart", cart) 
        console.log(JSON.parse(localStorage.getItem("cart")))
    }else{
        alert("Error adding to cart")
    }
}