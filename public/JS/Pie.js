var UserToRegister = {
    Name: null,
    Email: null,
    Password: null,
    AvatarURL: null,
}

var CurrentUser={
    Name: null,
    Email: null,
    Password: null,
    AvatarURL: null,
    Buy : null
}

var heartToAlter={
    Name :"PDX",
    Amount: 100
}

var heartCanFill={
    PDX: true ,
    JTP: true,
    CBL: true
}

var fetchHeart={
    PDX: null,
    JTP: null,
    CBL:null
}

var logined = false;

// 1: login - 2: register
var RLStatus =1;
var hamToggle =1;
var toLogin= false;
var isUsingGoogle = false;
var personalData = null;

var testRes;


document.getElementById('HBtnLogIn').addEventListener('click',function(){

    // fetchHearts();

    UserToRegister.Name= null;
    UserToRegister.Email= null;
    UserToRegister.Password= null;
    UserToRegister.AvatarURL= null;

    RLStatus =1;
    document.querySelector('#BGMODAL').style.display = 'flex';
    document.querySelector('.PieBrandImg').src = "IMG/ploginimgC.svg"
    document.querySelector('#PRegButton').textContent = "LOGIN"
    document.querySelector('#RLControlText').textContent = "Register"
    document.querySelector('#PRegNameField').style.display = 'none';
    document.querySelector('body').style.overflow = 'hidden';
    console.log("LOG!!!!!")

    document.querySelector('#hamburger').style.display = 'none';
    hamToggle = 1;
    toLogin = true;
});

document.getElementById('RLControlText').addEventListener('click',function(){

    if(RLStatus == 1){
        document.querySelector('#GoogleOAuthIDBtn').style.bottom = '60px';

        document.querySelector('.PieBrandImg').src = "IMG/pregimgC.svg"
        document.querySelector('#PRegButton').textContent = "REGISTER"
        document.querySelector('#RLControlText').textContent = "Login"
        document.querySelector('#PRegNameField').style.display = 'block';
        document.querySelector('#PRegNameField').style.margin = 'auto';
        document.querySelector('#RLControlText').style.left = '290';
        console.log("LOG!!!!!")
        RLStatus = 2;
        toLogin = false;

    }else{
        document.querySelector('#GoogleOAuthIDBtn').style.bottom = '92px';

        document.querySelector('.PieBrandImg').src = "IMG/ploginimgC.svg"
        document.querySelector('#PRegButton').textContent = "LOGIN"
        document.querySelector('#RLControlText').textContent = "Register"
        document.querySelector('#RLControlText').style.left = '280';
        document.querySelector('#PRegNameField').style.display = 'none';
        console.log("LOG!!!!!")
        RLStatus=1;
        toLogin = true;
    }
});

document.getElementById('PRegClosePanel').addEventListener('click',function(){
    document.querySelector('#BGMODAL').style.display = 'none';
    document.querySelector('body').style.overflow = '';
    console.log("LOG!!!!!")
});

document.getElementById('PRegButton').addEventListener('click',function(){

    if(toLogin){
        UserToRegister.Email = document.getElementById('PRegEmailField').value;
        UserToRegister.Password = document.getElementById('PRegPasswordField').value;
        login();
    }
    else{
        UserToRegister.Name = document.getElementById('PRegNameField').value;
        UserToRegister.Email = document.getElementById('PRegEmailField').value;
        UserToRegister.Password = document.getElementById('PRegPasswordField').value;
        register();
    }
});

document.getElementById('hamIcon').addEventListener('click',function(){

    fetchHearts();

    $("#hamburger").fadeIn(200);
    if(hamToggle == 1){
        document.querySelector('#hamburger').style.display = 'flex';
        hamToggle=2;
    }else {
        document.querySelector('#hamburger').style.display = 'none';
        hamToggle = 1;
    }
});

document.getElementById('LikeBtnPDX').addEventListener('click',function(){
    if(heartCanFill.PDX){
        document.querySelector('#LikeBtnPDX').src = "IMG/heartfill.svg";
        heartCanFill.PDX = false;
        heartToAlter.Amount = 1;
        heartToAlter.Name = "PDX"
        alter();
    }else{
        document.querySelector('#LikeBtnPDX').src = "IMG/heartblank.svg";
        heartCanFill.PDX = true;
        heartToAlter.Amount = -1;
        heartToAlter.Name = "PDX"
        alter();
    }
});

document.getElementById('LikeBtnJTP').addEventListener('click',function(){
    if(heartCanFill.PDX){
        document.querySelector('#LikeBtnJTP').src = "IMG/heartfill.svg";
        heartCanFill.PDX = false;
        heartToAlter.Amount = 1;
        heartToAlter.Name = "JTP"
        alter();
    }else{
        document.querySelector('#LikeBtnJTP').src = "IMG/heartblank.svg";
        heartCanFill.PDX = true;
        heartToAlter.Amount = -1;
        heartToAlter.Name = "JTP"
        alter();
    }
});

document.getElementById('LikeBtnCBL').addEventListener('click',function(){
    if(heartCanFill.PDX){
        document.querySelector('#LikeBtnCBL').src = "IMG/heartfill.svg";
        heartCanFill.PDX = false;
        heartToAlter.Amount = 1;
        heartToAlter.Name = "CBL"
        alter();
    }else{
        document.querySelector('#LikeBtnCBL').src = "IMG/heartblank.svg";
        heartCanFill.PDX = true;
        heartToAlter.Amount = -1;
        heartToAlter.Name = "CBL"
        alter();
    }
});

$(function(){



});

//https://horizonesxwebsite.df.r.appspot.com

function alter(){

    console.log("alter func ex.");
    $.ajax({
        url: `https://horizonesxwebsite.df.r.appspot.com/${heartToAlter.Name}/${heartToAlter.Amount}`,
        method: "GET",
        success : function(res) {
            console.log("Altered");
        },error : function(err){
            console.log("FAILED" + JSON.stringify(err));
        }
    }).done(function(){
        console.log("DONE");

    });
}

function fetchHearts(){
    console.log("fetchHearts func ex.");
    $.ajax({
        url: `https://horizonesxwebsite.df.r.appspot.com/fetch/fetchHeart`,
        method: "GET",
        success : function(res) {
            console.log("RES returned");
            console.log("FETCHED: "+res);

            console.log("Altered");
        },error : function(err){
            console.log("FAILED" + JSON.stringify(err));
        }
    }).done(function(){
        console.log("DONE");

    });
}

function register(){
    console.log("register func ex.");
    $.ajax({
        url: `https://horizonesxwebsite.df.r.appspot.com/fetch/create/${UserToRegister.Name}/${UserToRegister.Email}/${UserToRegister.Password}/${encodeURIComponent(UserToRegister.AvatarURL)}`,
        method: "GET",
        success : function(res) {
            console.log("SUCCESS" + res.toString());
            document.querySelector('#BGMODAL').style.display = 'none';
        },error : function(err){
            console.log("FAILED" + JSON.stringify(err));
        }
    }).done(function(){
        console.log("DONE");

    });
}

function login(){

    console.log("login func ex.");
    $.ajax({
        url: `https://horizonesxwebsite.df.r.appspot.com/fetch/auth/${UserToRegister.Email}/${UserToRegister.Password}`,
        method: "GET",
        success : function(res) {
            personalData = res;
            console.log("Print Res Login: " + res);
            if(res  != -1){
                loginSuccess();
            }else{
                loginFailed();
            }
        },error : function(err){
            console.log("Print failed login: " + JSON.stringify(err));
        }
    }).done(function(){
        console.log("Login function DONE");

    });
    console.log("Login function personalData: " + personalData);
    console.log("StRINGIFIED" + JSON.stringify(personalData));
}

function loginSuccess(){

    logined= true;
    console.log("loginSuccess");

    var pd = JSON.parse(personalData);

    CurrentUser.Name = pd[0].NAME;
    CurrentUser.Email = pd[0].EMAIL_ADRS;
    CurrentUser.AvatarURL = pd[0].AVTURL;
    CurrentUser.Buy = pd[0].CART_ITEMS;

    console.log(CurrentUser.Name);
    console.log(CurrentUser.Email);
    console.log(CurrentUser.Buy);
    console.log(CurrentUser.AvatarURL);

    if(CurrentUser.AvatarURL.length > 10){
        document.querySelector('#HBtnLogIn').src = CurrentUser.AvatarURL;
    }else{
        document.querySelector('#HBtnLogIn').src = "IMG/userAvatarR2.svg";
    }
    document.querySelector('#BGMODAL').style.display = "none";
    document.querySelector('body').style.overflow = "";
}

function loginFailed(){

    console.log("loginFailed");
}

function onSignIn(googleUser) {
    // Useful data for your client-side scripts:
    var profile = googleUser.getBasicProfile();
    console.log("ID: " + profile.getId()); // Don't send this directly to your server!
    console.log('Full Name: ' + profile.getName());
    console.log('Given Name: ' + profile.getGivenName());
    console.log('Family Name: ' + profile.getFamilyName());
    console.log("Image URL: " + profile.getImageUrl());
    console.log("Email: " + profile.getEmail());
    console.log(encodeURIComponent(UserToRegister.AvatarURL));

    // The ID token you need to pass to your backend:
    var id_token = googleUser.getAuthResponse().id_token;
    console.log("ID Token: " + id_token);

    UserToRegister.Name = profile.getName();
    UserToRegister.Email = profile.getEmail();
    UserToRegister.AvatarURL = profile.getImageUrl();

    // document.querySelector('#HBtnLogIn').src = profile.getImageUrl();
    // document.querySelector('#BGMODAL').style.display = "none";
    // document.querySelector('body').style.overflow = "";

    isUsingGoogle = true;
    register();
    login();
}