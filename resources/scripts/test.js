// var songs = JSON.parse(localStorage.getItem("mysongs")) ? JSON.parse(localStorage.getItem("mysongs")) : []; 
// // songs = localStorage.setItem("mysongs", songs) ? JSON.parse();

// //songs = JSON.parse(localStorage.getItem("mysongs")) ? JSON.parse(localStorage.getItem("mysongs"));

// function handleOnLoad()
// {
//     // console.log("made it")
//     createTable()
//     // createForm()
// }

// // const songs = [
// //     {
// //         songID: "id1",
// //         songTitle: "song title",
// //         songArtist: "song artist",
// //         dateAdded: new Date().now,
// //         favorited: false,
// //         deleted: false,

// //     }
// // ]

// // const songs = [];

// let app = document.getElementById("app");
// //let songCount = 0
// // let songs = JSON.parse(localStorage.getItem('mySongs') ? JSON.parse(localStorage.getItem('mySongs')) )

// function createTable()
// {   
    
    
//     var products = JSON.parse(localStorage.getItem("myproducts")) ? JSON.parse(localStorage.getItem("myproducts")) : []; 
    
//     document.getElementById("app").innerHTML = "";
//     let table = document.createElement('TABLE')
//     table.border = '1'
//     table.id = 'productTable'
//     let tableBody = document.createElement('TABLEBODY')
//     tableBody.id = 'productsTableBody'
//     table.appendChild(tableBody)

//     let tr = document.createElement('TR')
//     tableBody.appendChild(tr)

//     let th1 = document.createElement('TH')
//     th1.width = 500
//     th1.appendChild(document.createTextNode('Product Name'))
//     tr.appendChild(th1);

//     let th2 = document.createElement('TH')
//     th2.width = 500
//     th2.appendChild(document.createTextNode('Price'))
//     tr.appendChild(th2);

//     let th3 = document.createElement('TH')
//     th3.width = 200
//     th3.appendChild(document.createTextNode('Category'))
//     tr.appendChild(th3);

//     let thf = document.createElement('TH')
//     thf.width = 200
//     thf.appendChild(document.createTextNode('Image url'))
//     tr.appendChild(thf);

//     // let th4 = document.createElement('TH')
//     // th4.appendChild(document.createTextNode('Favorite Song'))
//     // tr.appendChild(th4);

//     // let th5 = document.createElement('TH')
//     // th5.appendChild(document.createTextNode('Delete Song'))
//     // tr.appendChild(th5);

//     Products.forEach((products)=>
//     {
//         if (!products.deleted) {
//             let tr1 = document.createElement('TR')
//             tableBody.appendChild(tr1)

//             let td1 = document.createElement('TD')
//             td1.width = 500
//             td1.textContent = products.songTitle
//             console.log(products.songTitle)
//             tr1.appendChild(td1)

//             let td11 = document.createElement('TD')
//             td11.width = 500
//             td11.textContent = song.songArtist
//             tr1.appendChild(td11)

//             let td2 = document.createElement('TD')
//             td2.width = 500
//             td2.textContent = song.dateAdded
//             tr1.appendChild(td2)

//             let td3 = document.createElement('TD')
//             td3.width = 500
//             td3.textContent = song.favorited
//             tr1.appendChild(td3)
            
//             let tdFavButton = document.createElement('TD')
//             let fvButton = document.createElement('button');
//             fvButton.textContent = "Favorite"
//             fvButton.onclick = function(){
//                 song.favorited = !products.favorited
//                 localStorage.setItem('mysongs', JSON.stringify(songs))
//                 createTable()
//             }
//             tdFavButton.appendChild(fvButton)
//             tr1.appendChild(tdFavButton)

//             let tddelButton = document.createElement('TD')
//             let delButton = document.createElement('button');
//             delButton.textContent = "Delete"
//             delButton.onclick = function(){
//                 song.deleted = !song.deleted
//                 localStorage.setItem('mysongs', JSON.stringify(songs))
//                 createTable()
//             }
//             tddelButton.appendChild(delButton)
//             tr1.appendChild(tddelButton)

//         }
//     })
//     document.getElementById("app").appendChild(table)
//     createForm();
// }


// function createForm()
// {
//     let form = document.createElement('form')
//     let userInput = document.createElement('input')
//     userInput.type = 'text'
//     userInput.placeholder = 'Enter a Song Title'
//     userInput.id = 'newSong'
//     form.appendChild(userInput)

//     // let form2 = document.createElement('form')
//     let userInput2 = document.createElement('input')
//     userInput2.type = 'text'
//     userInput2.placeholder = 'Enter the Song Artist'
//     userInput2.id = 'newArtist'
//     form.appendChild(userInput2)

//     let submitButton = document.createElement('button')
//     submitButton.textContent = "Confirm Submit"
//     submitButton.onclick=function(){
//         var songs = JSON.parse(localStorage.getItem("mysongs")) ? JSON.parse(localStorage.getItem("mysongs")) : []; 
//         let currentDate = new Date().toJSON().slice(0,10)
//             let song =
//             {
//                 songTitle: document.getElementById("newSong").value,
//                 songArtist: document.getElementById("newArtist").value,
//                 dateAdded: currentDate,
//                 songID: newGuid(),
//                 favorited: false,
//                 deleted: false
//             }
//             console.log(songs);
            
//             songs.unshift(song)
//             localStorage.setItem('mysongs', JSON.stringify(songs))

//             createTable();
//             // addRow(song)
//         }
//     form.appendChild(submitButton)
//     document.getElementById("app").appendChild(form)


    
//     // e.target.elements.newSong.value = ''
//     // e.target.elements.newArtist.value = ''

// }

// function newGuid()
// {
//     function guid2()
//     {
//         return (((1+Math.random())*0x10000) | 0).toString(16).substring(1);
//     }
//     return (guid2() + guid2() + "-" + guid2() + "-4" + guid2().substr(0,3) + "-" + guid2() + guid2()).toLowerCase();
// }
// //var guid = createGuid();

// // songs.forEach(function(song)
// // {
// //     const p = document.createElement('p')
// //     p.textContent = '$(song.text)'
// //     document.querySelector('#songs').appendChild(p)
// // })


// // let storedSongs = JSON.stringify(songs)
// // localStorage.setItem('', storedSongs)

// // console.log(songs)
// // console.log(storedSongs)

// // let mySongs = localStorage.getItem('mySongs')
// // console.log(mySongs)


// // document.querySelector('#addsongs').addEventListener('submit', function(e)
// // {
// //     e.preventDefault();
// //     songs.push({
// //         songTitle: e.target.elements.songTitle.value, 
// //         completed: false
// //     })
// //     console.log(e.target.elements.text.value)           
// //     renderSongs(songs)
// // })

// // function addRow(song)
// // {
// //     console.log(song)
// //     console.log(song.songTitle)
// //     let songtitle = song.songTitle
// //     let songartist = song.songArtist
// //     let date = song.dateAdded

// //     songs.unshift({
// //         songID: newGuid(),
// //         songTitle: songtitle,
// //         songArtist: songartist,
// //         dateAdded: new Date().now,
// //         Favorite: false,
// //         Deleted: false,
// //     })

// //     let tableBody = document.getElementById('songsTableBody')
// //     let tr = document.createElement('TR')
// //     tableBody.appendChild(tr)

// //     let td1 = document.createElement('TD')
// //     td1.width = 500
// //     td1.appendChild(document.createTextNode(songtitle))
// //     tr.appendChild(td1)
    
// //     let td11 = document.createElement('TD')
// //     td11.width = 500
// //     td11.appendChild(document.createTextNode(songartist))
// //     tr.appendChild(td11)    
    
// //     let td2 = document.createElement('TD')
// //     td2.width = 500
// //     td2.appendChild(document.createTextNode(date))
// //     tr.appendChild(td2)

// // }

// const renderSongs = function(songs, filters)
// {
//     const filteredSongs = songs.filter(function(song)
//     {
//         const searchtext = song.text.toLowerCase().includes(filters.searchtext.toLowerCase())
//     })
//     document.querySelector('#notes').innerHTML = ''
//     const summary = document.createElement('h2')
//     summary.textContent = 'You have ${songs.length} notes left to complete'
//     document.querySelector('#notes').appendChild(summary)

// }


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



function addRow(product)
{
    let tableBody = document.getElementById('songTableBody')
    let tr = document.createElement('TR')
    tableBody.appendChild(tr)
    
    let td1 = document.createElement('TD')
    td1.width = 200
    td1.appendChild(document.createTextNode(`${song.title}`))
    tr.appendChild(td1)
    
    let td2 = document.createElement('TD')
    td2.width = 100
    td2.appendChild(document.createTextNode(`${song.artist}`))
    tr.appendChild(td2)
    
    let td3 = document.createElement('TD')
    td3.width = 100
    td3.appendChild(document.createTextNode(`${song.favorited}`))
    tr.appendChild(td3)
    
    let td4 = document.createElement('TD')
    td4.width = 100
    td4.appendChild(document.createTextNode(`${song.deleted}`))
    tr.appendChild(td4)
    
    let td5 = document.createElement('TD')
    td5.width = 100
    td5.appendChild(document.createTextNode(`${song.dateAdded}`))
    tr.appendChild(td5)
    
    Songs.unshift(song)
    localStorage.setItem('mySongs', JSON.stringify(Songs))
    let table = document.getElementById('songTable')
    table.parentNode.removeChild(table)
    createTable()
    
}

function createTable()
{
    
    let table = document.createElement('TABLE')
    table.border = '1'
    table.id = 'songTable'
    let tableBody = document.createElement('TBODY')
    tableBody.id = 'songTableBody'
    table.appendChild(tableBody)
    
    
    let tr = document.createElement('TR')
    tableBody.appendChild(tr)
    
    let th1 = document.createElement('TH')
    th1.width = 200
    th1.appendChild(document.createTextNode('Title'))
    tr.appendChild(th1)
    
    let th2 = document.createElement('TH')
    th2.width = 200
    th2.appendChild(document.createTextNode('Artist'))
    tr.appendChild(th2)
    
    let th3 = document.createElement('TH')
    th3.width = 200
    th3.appendChild(document.createTextNode('Favorited'))
    tr.appendChild(th3)

    
    let th4 = document.createElement('TH')
    th4.width = 200
    th4.appendChild(document.createTextNode('Date'))
    tr.appendChild(th4)

    let th5 = document.createElement('TH')
    th5.width = 400
    th5.appendChild(document.createTextNode(''))
    tr.appendChild(th5)
    
    Songs.forEach((song)=>{
        if(song.deleted == true){return;}
        let tr = document.createElement('TR')
        tableBody.appendChild(tr)
        
        let td1 = document.createElement('TD')
        td1.width = 300
        td1.appendChild(document.createTextNode(`${song.title}`))
        tr.appendChild(td1)
        
        let td2 = document.createElement('TD')
        td2.width = 100
        td2.appendChild(document.createTextNode(`${song.artist}`))
        tr.appendChild(td2)
        
        let td3 = document.createElement('TD')
        td3.width = 100
        td3.appendChild(document.createTextNode(`${song.favorited}`))
        tr.appendChild(td3)
        
        
        let td4 = document.createElement('TD')
        td4.width = 100
        td4.appendChild(document.createTextNode(`${song.dateAdded}`))
        
        tr.appendChild(td4)
        


        let newBut = document.createElement('button')
        newBut.setAttribute("onclick", `EditSong('${song.id}')`)
        newBut.style = 'margin: 15px; padding: 10px; height: 40px'
        newBut.textContent = "Edit"
        
        tr.appendChild(newBut)

        let newBut1 = document.createElement('button')
        newBut1.setAttribute("onclick", `FavoriteSong('${song.id}')`)
        newBut1.style = 'margin: 10px; padding: 10px; height: 40px'
        newBut1.textContent = "Favorite"
        
        tr.appendChild(newBut1)
        let newBut2 = document.createElement('button')
        newBut2.setAttribute("onclick", `DeleteSong('${song.id}')`)
        newBut2.style = 'margin: 20px; padding: 10px; height: 40px'
        newBut2.textContent = "Delete"

        
        tr.appendChild(newBut2)
        

    })
    
    app.appendChild(table)
}

async function EditSong(id){
    let newSong = 2
    let date = new Date()
    date = date.toLocaleDateString('en-us')
    let localArtist = document.getElementById("editArtist").value
    let localTitle = document.getElementById("editTitle").value
    for(let i = 0; i < Songs.length; i++){
        if(Songs[i].id == id){
            console.log(Songs[i].title)
            newSong = {
                id : Songs[i].id,
                artist : localArtist,
                title : localTitle,
                dateAdded : Songs[i].dateAdded,
                deleted : Songs[i].deleted,
                favorited : Songs[i].favorited
            }
        }
    }
    console.log(newSong.artist)

    await fetch(`${url}/${id}`, {
        method: "PUT",
        headers: {
          accept: "*/*",
          "content-type": "application/json",
        },
        body: JSON.stringify(newSong),
    });
    location.reload();
    handleOnLoad()
}



async function DeleteSong(id){
    let newSong = 2
    let date = new Date()
    date = date.toLocaleDateString('en-us')

    for(let i = 0; i < Songs.length; i++){
        if(Songs[i].id == id){
            newSong = {
            id : Songs[i].id,
            title : Songs[i].title,
            artist : Songs[i].artist,
            dateAdded : Songs[i].dateAdded,
            deleted : true,
            favorited : Songs[i].favorited
            }
            
        }
    }
    console.log(newSong.title)
    await fetch(`${url}/${id}`, {
        method: "PUT",
        headers: {
          accept: "*/*",
          "content-type": "application/json",
        },
        body: JSON.stringify(newSong),
    });
    location.reload();
    handleOnLoad()
}

async function FavoriteSong(id){
    let newSong = 2
    let date = new Date()
    date = date.toLocaleDateString('en-us')

    for(let i = 0; i < Songs.length; i++){
        if(Songs[i].id == id){
            newSong = {
                id : Songs[i].id,
                title : Songs[i].title,
                artist : Songs[i].artist,
                dateAdded : Songs[i].dateAdded,
                deleted : Songs[i].deleted,
                favorited : !Songs[i].favorited
            }

        }
    }
    
    await fetch(`${url}/${id}`, {
        method: "PUT",
        headers: {
          accept: "*/*",
          "content-type": "application/json",
        },
        body: JSON.stringify(newSong),
      });    
      location.reload();
      handleOnLoad()
}

document.querySelector('#Song').addEventListener('submit', function(e){
    e.preventDefault()
    let date = new Date()
    date = date.toLocaleDateString('en-us')
    let song ={
        Title: e.target.elements.Title.value, 
        Artist: e.target.elements.Artist.value, 
        Favorited: false, 
        Deleted: false, 
        DateAdded: date
    }
    fetch(url, {
        method: "POST",
        headers: {
          accept: "*/*",
          "content-type": "application/json",
        },
        body: JSON.stringify(song),
      });
    location.reload()
    handleOnLoad()
    //addRow(song)
    e.target.elements.Title.value = ''
    e.target.elements.Artist.value = ''
})

