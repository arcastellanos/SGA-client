function GetProduct(productID)
{

    const ProductApiUrl = "https://localhost:7193/api/products/"+ productID;
    fetch(ProductApiUrl).then(function(response)
    {
        console.log(response);
        return response.json();
    }).then(function(json)
    {
        let ht
        json.forEach(product => 
        {
            
        });

    }).catch(function(error)
    {
        console.log(error);
    });
}

function postProducts()
{
    const postProductApiUrl = "https://localhost:7193/api/products";
    const productName = document.getElementById("productName").value;
    const productPrice= document.getElementById("productPrice").value;
    const productType = document.getElementById("productType").value;
    const qty = document.getElementById("qty").value;
    const inInventory = true;
    const productURL = document.getElementById("productURL").value;
    fetch(postProductApiUrl,
    {
        method: "POST",
        headers: {
            "Accept": 'application/json',
            "Content-Type": 'application/json'
        },
        body: JSON.stringify({
            productName: productName,
            productPrice: productPrice,
            productType: productType,
            qty: qty,
            inInventory: inInventory,
            productURL: productURL
        })
    }).then((response)=>
    {
        console.log(response);
        GetProductDisplay();
    });
}

function GetProductDisplay()
{
    const allProductsApiUrl = "https://localhost:7193/api/products";

    fetch(allProductsApiUrl).then(function(response)
    {
        console.log(response);
        return response.json();
    }).then(function(json)
    { 
        let html = `<table class = "table" id = "productdisplaytable">
                    <thead>
                    <th>Image</th>
                    <th>ID</th>
                    <th>Product Name</th>
                    <th>Price</th>
                    <th>Quantity</th>
                    </thead>
                    <tbody>`
        json.forEach(product =>
        {
            html+= `<tr>`
            html += `<td><img src="${product.productURL}" alt="productphoto" style="width: 100px; height: 100px;"></td>`
            html += `<td>${product.productID}</td>`
            html += `<td>${product.productName}</td>`
            html += `<td>${product.productPrice}</td>`
            html += `<td>${product.qty}</td>`
            html+= `<td><button type="button" class="btn btn-success" >Add to Cart</button></td>`
            html += `</tr>`
        });
        html += `</tbody></table>`
        document.getElementById("productdisplaytable").innerHTML = html;
    }).catch(function(error)
    {
        console.log(error);
    });
}