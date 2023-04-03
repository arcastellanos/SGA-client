let products = [
    {
        img: "./resources/image/download.png",
        title: "product",
        description: "Some quick example text to build on the card title and make up the bulk of the card's content.",
        price:"",
        url: "ww.github.com"
    },
    {
        img: "./resources/image/download.png",
        title: "product",
        description: "Some quick example text to build on the card title and make up the bulk of the card's content.",
        price:"",
        url: "ww.github.com"
    },
    {
        img: "./resources/image/download.png",
        title: "product",
        description: "Some quick example text to build on the card title and make up the bulk of the card's content.",
        price:"",
        url: "ww.github.com"
    },
    {
        img: "./resources/image/download.png",
        title: "product",
        description: "Some quick example text to build on the card title and make up the bulk of the card's content.",
        price:"",
        url: "ww.github.com"
    },
    {
        img: "./resources/image/download.png",
        title: "product",
        description: "Some quick example text to build on the card title and make up the bulk of the card's content.",
        price:"",
        url: "ww.github.com"
    },

]

let loadProjects = function(){
    let html = `<div class="row">`
    projects.forEach(function(project){
        html += `
        <div class="card m-4" style="width: 18rem;">
            <img src="${project.img}" class="card-img-top" alt="...">
            <div class="card-body">
                <h5 class="card-title">${project.title}</h5>
                <p class="card-text">${project.description}</p>
                <a href="${project.url}" class="btn btn-primary">Go somewhere</a>
              </div>
            </div>
            `
    })
    html += "</div"
    document.getElementById("cards").innerHTML = html
   
          
}

function handleOnLoad(){
    loadProjects()
}