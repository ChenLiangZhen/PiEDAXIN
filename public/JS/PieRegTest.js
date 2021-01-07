// function registerOnServer(){
//     var mysql = require('mysql');
//     var con = mysql.createConnection({
//         host: "45.130.228.109",
//         user: "u753616498_Piedaxin",
//         password: "u753616498_Piedaxin"
//     })
//
//     con.connect(function(err){
//         if(err) throw err;
//         console.log("connected!")
//     });
// }

document.getElementById('POPUP').addEventListener('click',function(){
    document.querySelector('#BGMODAL').style.display = 'flex';
    console.log("LOG!!!!!")
});

document.getElementById('PRegClosePanel').addEventListener('click',function(){
    document.querySelector('#BGMODAL').style.display = 'none';
    console.log("LOG!!!!!")
    registerOnServer();
});

function onSignIn(googleUser) {
    // Useful data for your client-side scripts:
    var profile = googleUser.getBasicProfile();
    console.log("ID: " + profile.getId()); // Don't send this directly to your server!
    console.log('Full Name: ' + profile.getName());
    console.log('Given Name: ' + profile.getGivenName());
    console.log('Family Name: ' + profile.getFamilyName());
    console.log("Image URL: " + profile.getImageUrl());
    console.log("Email: " + profile.getEmail());

    // The ID token you need to pass to your backend:
    var id_token = googleUser.getAuthResponse().id_token;
    console.log("ID Token: " + id_token);
}