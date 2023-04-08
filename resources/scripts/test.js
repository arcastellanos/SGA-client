var songs = JSON.parse(localStorage.getItem("mysongs")) ? JSON.parse(localStorage.getItem("mysongs")) : []; 
// songs = localStorage.setItem("mysongs", songs) ? JSON.parse();

//songs = JSON.parse(localStorage.getItem("mysongs")) ? JSON.parse(localStorage.getItem("mysongs"));

function handleOnLoad()
{
    // console.log("made it")
    createTable()
    // createForm()
}

// const songs = [
//     {
//         songID: "id1",
//         songTitle: "song title",
//         songArtist: "song artist",
//         dateAdded: new Date().now,
//         favorited: false,
//         deleted: false,

//     }
// ]

// const songs = [];

let app = document.getElementById("app");
//let songCount = 0
// let songs = JSON.parse(localStorage.getItem('mySongs') ? JSON.parse(localStorage.getItem('mySongs')) )

function createTable()
{   
    
    
    var products = JSON.parse(localStorage.getItem("mysongs")) ? JSON.parse(localStorage.getItem("mysongs")) : []; 
    
    document.getElementById("app").innerHTML = "";
    let table = document.createElement('TABLE')
    table.border = '1'
    table.id = 'productTable'
    let tableBody = document.createElement('TABLEBODY')
    tableBody.id = 'productsTableBody'
    table.appendChild(tableBody)

    let tr = document.createElement('TR')
    tableBody.appendChild(tr)

    let th1 = document.createElement('TH')
    th1.width = 500
    th1.appendChild(document.createTextNode('Product Name'))
    tr.appendChild(th1);

    let th2 = document.createElement('TH')
    th2.width = 500
    th2.appendChild(document.createTextNode('Price'))
    tr.appendChild(th2);

    let th3 = document.createElement('TH')
    th3.width = 200
    th3.appendChild(document.createTextNode('Category'))
    tr.appendChild(th3);

    let thf = document.createElement('TH')
    thf.width = 200
    thf.appendChild(document.createTextNode('Image url'))
    tr.appendChild(thf);

    // let th4 = document.createElement('TH')
    // th4.appendChild(document.createTextNode('Favorite Song'))
    // tr.appendChild(th4);

    // let th5 = document.createElement('TH')
    // th5.appendChild(document.createTextNode('Delete Song'))
    // tr.appendChild(th5);

    Products.forEach((products)=>
    {
        if (!products.deleted) {
            let tr1 = document.createElement('TR')
            tableBody.appendChild(tr1)

            let td1 = document.createElement('TD')
            td1.width = 500
            td1.textContent = products.songTitle
            console.log(products.songTitle)
            tr1.appendChild(td1)

            let td11 = document.createElement('TD')
            td11.width = 500
            td11.textContent = song.songArtist
            tr1.appendChild(td11)

            let td2 = document.createElement('TD')
            td2.width = 500
            td2.textContent = song.dateAdded
            tr1.appendChild(td2)

            let td3 = document.createElement('TD')
            td3.width = 500
            td3.textContent = song.favorited
            tr1.appendChild(td3)
            
            let tdFavButton = document.createElement('TD')
            let fvButton = document.createElement('button');
            fvButton.textContent = "Favorite"
            fvButton.onclick = function(){
                song.favorited = !products.favorited
                localStorage.setItem('mysongs', JSON.stringify(songs))
                createTable()
            }
            tdFavButton.appendChild(fvButton)
            tr1.appendChild(tdFavButton)

            let tddelButton = document.createElement('TD')
            let delButton = document.createElement('button');
            delButton.textContent = "Delete"
            delButton.onclick = function(){
                song.deleted = !song.deleted
                localStorage.setItem('mysongs', JSON.stringify(songs))
                createTable()
            }
            tddelButton.appendChild(delButton)
            tr1.appendChild(tddelButton)

        }
    })
    document.getElementById("app").appendChild(table)
    createForm();
}


function createForm()
{
    let form = document.createElement('form')
    let userInput = document.createElement('input')
    userInput.type = 'text'
    userInput.placeholder = 'Enter a Song Title'
    userInput.id = 'newSong'
    form.appendChild(userInput)

    // let form2 = document.createElement('form')
    let userInput2 = document.createElement('input')
    userInput2.type = 'text'
    userInput2.placeholder = 'Enter the Song Artist'
    userInput2.id = 'newArtist'
    form.appendChild(userInput2)

    let submitButton = document.createElement('button')
    submitButton.textContent = "Confirm Submit"
    submitButton.onclick=function(){
        var songs = JSON.parse(localStorage.getItem("mysongs")) ? JSON.parse(localStorage.getItem("mysongs")) : []; 
        let currentDate = new Date().toJSON().slice(0,10)
            let song =
            {
                songTitle: document.getElementById("newSong").value,
                songArtist: document.getElementById("newArtist").value,
                dateAdded: currentDate,
                songID: newGuid(),
                favorited: false,
                deleted: false
            }
            console.log(songs);
            
            songs.unshift(song)
            localStorage.setItem('mysongs', JSON.stringify(songs))

            createTable();
            // addRow(song)
        }
    form.appendChild(submitButton)
    document.getElementById("app").appendChild(form)


    
    // e.target.elements.newSong.value = ''
    // e.target.elements.newArtist.value = ''

}

function newGuid()
{
    function guid2()
    {
        return (((1+Math.random())*0x10000) | 0).toString(16).substring(1);
    }
    return (guid2() + guid2() + "-" + guid2() + "-4" + guid2().substr(0,3) + "-" + guid2() + guid2()).toLowerCase();
}
//var guid = createGuid();

// songs.forEach(function(song)
// {
//     const p = document.createElement('p')
//     p.textContent = '$(song.text)'
//     document.querySelector('#songs').appendChild(p)
// })


// let storedSongs = JSON.stringify(songs)
// localStorage.setItem('', storedSongs)

// console.log(songs)
// console.log(storedSongs)

// let mySongs = localStorage.getItem('mySongs')
// console.log(mySongs)


// document.querySelector('#addsongs').addEventListener('submit', function(e)
// {
//     e.preventDefault();
//     songs.push({
//         songTitle: e.target.elements.songTitle.value, 
//         completed: false
//     })
//     console.log(e.target.elements.text.value)           
//     renderSongs(songs)
// })

// function addRow(song)
// {
//     console.log(song)
//     console.log(song.songTitle)
//     let songtitle = song.songTitle
//     let songartist = song.songArtist
//     let date = song.dateAdded

//     songs.unshift({
//         songID: newGuid(),
//         songTitle: songtitle,
//         songArtist: songartist,
//         dateAdded: new Date().now,
//         Favorite: false,
//         Deleted: false,
//     })

//     let tableBody = document.getElementById('songsTableBody')
//     let tr = document.createElement('TR')
//     tableBody.appendChild(tr)

//     let td1 = document.createElement('TD')
//     td1.width = 500
//     td1.appendChild(document.createTextNode(songtitle))
//     tr.appendChild(td1)
    
//     let td11 = document.createElement('TD')
//     td11.width = 500
//     td11.appendChild(document.createTextNode(songartist))
//     tr.appendChild(td11)    
    
//     let td2 = document.createElement('TD')
//     td2.width = 500
//     td2.appendChild(document.createTextNode(date))
//     tr.appendChild(td2)

// }

const renderSongs = function(songs, filters)
{
    const filteredSongs = songs.filter(function(song)
    {
        const searchtext = song.text.toLowerCase().includes(filters.searchtext.toLowerCase())
    })
    document.querySelector('#notes').innerHTML = ''
    const summary = document.createElement('h2')
    summary.textContent = 'You have ${songs.length} notes left to complete'
    document.querySelector('#notes').appendChild(summary)

}
