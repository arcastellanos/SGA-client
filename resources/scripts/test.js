const url = "https://localhost:7082/api/products";

let app = document.getElementById("app")
let Products = []

function handleOnLoad(){
    
    fetch(url)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
    //console.log("test")
      Products = data;
      Products.reverse();
      createTable();
    });
}


//this is to see if the input of the user is correct 

function addRow(product)
{
    let tableBody = document.getElementById('productTableBody')
    let tr = document.createElement('TR')
    tableBody.appendChild(tr)
    
    let td1 = document.createElement('TD')
    td1.width = 200
    td1.appendChild(document.createTextNode(`${product.productID}`))
    tr.appendChild(td1)
    
    let td2 = document.createElement('TD')
    td2.width = 100
    td2.appendChild(document.createTextNode(`${product.productName}`))
    tr.appendChild(td2)
    
    let td3 = document.createElement('TD')
    td3.width = 100
    td3.appendChild(document.createTextNode(`${product.productCategory}`))
    tr.appendChild(td3)
    
    let td4 = document.createElement('TD')
    td4.width = 100
    td4.appendChild(document.createTextNode(`${product.productPrice}`))
    tr.appendChild(td4)
    
    let td5 = document.createElement('TD')
    td5.width = 100
    td5.appendChild(document.createTextNode(`${product.productUrl}`))
    tr.appendChild(td5)

    
    Products.unshift(product)
    localStorage.setItem('myProducts', JSON.stringify(Products))
    let table = document.getElementById('productTable')
    table.parentNode.removeChild(table)
    createTable()
    
}

function createTable()
{
    
    let table = document.createElement('TABLE')
    table.border = '1'
    table.id = 'productTable'
    let tableBody = document.createElement('TBODY')
    tableBody.id = 'productTableBody'
    table.appendChild(tableBody)
    
    
    let tr = document.createElement('TR')
    tableBody.appendChild(tr)
    
    let th1 = document.createElement('TH')
    th1.width = 200
    th1.appendChild(document.createTextNode('Product ID'))
    tr.appendChild(th1)
    
    let th2 = document.createElement('TH')
    th2.width = 200
    th2.appendChild(document.createTextNode('Product Name'))
    tr.appendChild(th2)
    
    let th3 = document.createElement('TH')
    th3.width = 200
    th3.appendChild(document.createTextNode('Product Category'))
    tr.appendChild(th3)

    
    let th4 = document.createElement('TH')
    th4.width = 200
    th4.appendChild(document.createTextNode('Product Price'))
    tr.appendChild(th4)

    let th5 = document.createElement('TH')
    th5.width = 400
    th5.appendChild(document.createTextNode('Product Image Url'))
    tr.appendChild(th5)
    
    Products.forEach((product)=>{
        if(product.deleted == true)
        {

        }
        else{
        let tr = document.createElement('TR')
        tableBody.appendChild(tr)
        
        let td1 = document.createElement('TD')
        td1.width = 300
        td1.appendChild(document.createTextNode(`${product.productID}`))
        tr.appendChild(td1)
        
        let td2 = document.createElement('TD')
        td2.width = 100
        td2.appendChild(document.createTextNode(`${product.productName}`))
        tr.appendChild(td2)
        
        let td3 = document.createElement('TD')
        td3.width = 100
        td3.appendChild(document.createTextNode(`${product.productCategory}`))
        tr.appendChild(td3)
        
        
        let td4 = document.createElement('TD')
        td4.width = 100
        td4.appendChild(document.createTextNode(`${product.productPrice}`))
        
        tr.appendChild(td4)
        
        
        let td5 = document.createElement('img')
        td5.width = 100
        src = product.productUrl
        td5.src = src
        //td5.appendChild(document.createTextNode(`${product.productUrl}`))
        tr.appendChild(td5)


        let newBut = document.createElement('button')
        newBut.setAttribute("onclick", `EditProduct('${product.productID}')`)
        newBut.style = 'margin: 15px; padding: 10px; height: 40px'
        newBut.textContent = "Edit"
        tr.appendChild(newBut)

        
        let newBut2 = document.createElement('button')
        newBut2.setAttribute("onclick", 'DeleteProduct(\'' + product.productID + '\')')
        newBut2.style = 'margin: 20px; padding: 10px; height: 40px'
        newBut2.textContent = "Delete"
        tr.appendChild(newBut2)
        

    }})
    
    app.appendChild(table)
}

async function EditProduct(productID){
    let newProduct = 2
    let localProductPrice = document.getElementById("editPrice").value
    for(let i = 0; i < Products.length; i++){
        if(Products[i].productID == productID){
            newProduct = {
                productID : Products[i].productID,
                productName : Products[i].productName,
                productCategory : Products[i].productCategory,
                productPrice : localProductPrice,
                productUrl : Products[i].productUrl,
                deleted : false,
                managerID : 1
            }
        }
    }
    await fetch(`${url}/${productID}`, {
        method: "PUT",
        headers: {
          accept: "*/*",
          "content-type": "application/json",
        },
        body: JSON.stringify(newProduct),

    });console.log(newProduct)
    location.reload()
    handleOnLoad()
}
async function DeleteProduct(productID){
    let newProduct = 2
    for(let i = 0; i < Products.length; i++){
        if(Products[i].productID == productID){
            newProduct = {
                productID : Products[i].productID,
                productName : Products[i].productName,
                productCategory : Products[i].productCategory,
                productPrice : Products[i].productPrice,
                productUrl : Products[i].productUrl,
                deleted : true,
                managerID : 1
            }
        }
    }
    await fetch(`${url}/${productID}`, {
        method: "PUT",
        headers: {
          accept: "*/*",
          "content-type": "application/json",
        },
        body: JSON.stringify(newProduct),

    });console.log(newProduct)
    location.reload()
    handleOnLoad()
}

document.querySelector('#Product').addEventListener('submit', function(e){
    e.preventDefault()
    let product ={

        ProductName: e.target.elements.ProductName.value, 
        ProductCategory: e.target.elements.ProductCategory.value,
        ProductPrice:e.target.elements.ProductPrice.value,
        ProductUrl: e.target.elements.URL.value,
        ManagerID: 1,
        Deleted: false
        
    }
    fetch(url, {
        method: "POST",
        headers: {
          accept: "*/*",
          "content-type": "application/json",
        },
        body: JSON.stringify(product),
      });
    location.reload()
    handleOnLoad()
    e.target.elements.ProductName.value = ''
    e.target.elements.ProductCategory.value = ''
    e.target.elements.ProductPrice.value = ''
    e.target.elements.ProductUrl.value = ''

    
})


