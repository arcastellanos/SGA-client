const ManagerUrl = "https://localhost:7082/api/Manager";
let Managers = []



function handleManagers(){
    fetch(ManagerUrl)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {

      Managers = data;
      console.log(Managers)
    });
}



function managerLogin(){
    let managerUserName = document.getElementById("mngusername").value
    let managerPassword = document.getElementById("password").value
    let Manager = {

        mUserName : managerUserName,
        mPassword : managerPassword
    }
    console.log(managerUserName)
    console.log(managerPassword)
    if ((managerUserName = "AldenBarron") && (managerPassword == "1234")) {
      //element.innerHTML = "location.href='managerHome.html'";
      
      window.location.href = "file:///Users/aldenbarron/MIS321/SGA/client/SGA-client/resources/managerHome.html";
    }
    else {
      //element.innerHTML = "location.href='managerlogin.html'";
      window.location.href = "file:///Users/aldenbarron/MIS321/SGA/client/SGA-client/resources/managerlogin.html";
    }
    //console.log(Manager)

    if(Manager.mUserName == e.target.elements.mngusername.value && Manager.mPassword == e.target.elements.mPassword.value)
    {

    }
}