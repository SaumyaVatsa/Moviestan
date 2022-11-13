// Objects
let loginfrm = document.getElementsByClassName("login")
let signupfrm = document.getElementsByClassName("signup")
let userAlert = document.getElementsByClassName("username-alert")
let passAlert = document.getElementsByClassName("password-alert")
let emailAlert = document.getElementsByClassName("email-alert")
let reviewTest = document.getElementsByClassName("reviews")

// Image Slider
let interval = setInterval(function(){slideShow()},1500)
let x=1

function slideShow(){
    let images = ["caraousel1.jpg","caraousel2.jpg","carousel3.jpg","caraousel4.jpg","carousel5.jpg"]
    let sliderObj = document.getElementById("slider")
    if(x<5){
        let imgSrc = "Images/"+ images[x]
        sliderObj.src = imgSrc
        x++;
        if(x==4){
            x=0
        }
    }
}

// Login Form
function loginValid(){
    let uname = document.getElementById("username")
    let upass = document.getElementById("password")
    if(usernameValid(uname)){
        if(passwordValid(upass,16,8)){
            loginfrm.submit()
        }
    }
    loginfrm.reset()
}

// Changing Section (login - signup)
let loginToSignup = document.getElementById("login-link")
let signupToLogin = document.getElementById("signup-link")

loginToSignup.addEventListener("click",function (){
    loginfrm[0].style.display="none"
    signupfrm[0].style.display="block"
})

signupToLogin.addEventListener("click",function(){
    signupfrm[0].style.display="none"
    loginfrm[0].style.display ="block"
})

//Signup Form
function signupValidation(){
    let fname = document.getElementById("fname")
    let lname = document.getElementById("lname")
    let nUsername = document.getElementById("nusername")
    let uemail = document.getElementById("useremail")
    let nPassword = document.getElementById("npassword")

    if(allLetters(fname)){
        if(allLetters(lname)){
            if(newUserValid(nUsername)){
                if(emailValid(uemail)){
                    if(newPassValid(nPassword,16,8)){
                        signupfrm.submit()
                    }
                }
            }
        }
    }
    signupfrm.reset()
}

// Validation Functions
function usernameValid(uname){
    let pattern = /^[A-Za-z0-9]+$/
    if(uname.value.match(pattern)){
        userAlert[0].style.display="none"
        return true
    }else{
        userAlert[0].style.display="block"
        uname.focus()
        return false
    }
}

function passwordValid(upass,mx,mi){
    let pattern = /^[A-Za-z0-9]+$/
    if(upass.value.length >= mi && upass.value.length <=mx){
        if(upass.value.match(pattern)){
            passAlert[0].style.display = "none"
            return true
        }else{
            passAlert[0].style.display = "block"
            upass.focus()
            return false
        }
    }else{
        passAlert[0].style.display = "block"
        passAlert[0].focus()
        return false
    } 
}

function allLetters(name){
    let pattern = /^[A-Za-z]+$/
    if(name.value.match(pattern)){
        return true
    }else{
        alert("Name can only be letters")
        name.focus()
        return false
    }
}

function emailValid(uemail){
    let pattern = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-z0-9]{2,4})+$/
    if(uemail.value.match(pattern)){
        emailAlert[0].style.display = "none"
        return true
    }else{
        emailAlert[0].style.display = "block"
        uemail.focus()
        return false
    }
}

function newUserValid(nusername){
    let pattern=/^[A-Za-z0-9]+$/
    if(nusername.value.match(pattern)){
        userAlert[1].style.display = "none"
        return true
    }else{
        userAlert[1].style.display="block"
        nusername.focus()
        return false
    }
}

function newPassValid(npassword,mx,mi){
    let pattern = /^[A-Za-z0-9]+$/
    if(npassword.value.length >= mi && npassword.value.length <= mx){
        if(npassword.value.match(pattern)){
            passAlert[1].style.display = "none"
            return true
        }else{
            passAlert[1].style.display = "block"
            npassword.focus()
            return false
        }
    }else{
        passAlert[1].style.display = "block"
        npassword.focus()
        return false
    }
}

// Testimonial Carousels
let s = 0
let b = 3
let leftBtn = document.getElementsByClassName("left-btn")
let rightBtn = document.getElementsByClassName("right-btn")

leftBtn[0].addEventListener("click",function(){
    if(b>=0){
        reviewTest[s].style.display="none"
        reviewTest[b].style.display="flex"
        s=b
        b--
        if(b==-1){
            b =3
        }
    }
})

rightBtn[0].addEventListener("click",function(){
    if(s<=3){
        reviewTest[s].style.display="none"
        b=s+1
        if(b==4){
            reviewTest[0].style.display="flex"
        }else{
            reviewTest[b].style.display="flex"
        }
        s++
        if(s==4){
            s=0
        }
    }
})