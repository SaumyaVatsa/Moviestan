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
function usernameValid(uname){
    let pattern = /^[A-Za-z0-9]+$/
    let userAlert = document.getElementsByClassName("username-alert")
    if(uname.value.match(pattern)){
        return true
    }else{
        userAlert[0].style.display="block"
        uname[0].focus()
        return false
    }
}

function passwordValid(upass,mx,mi){
    let pattern = /^[A-Za-z0-9]+$/
    let passAlert = document.getElementsByClassName("password-alert")
    if(upass.value.length >= mi && upass.value.length <=mx){
        if(upass.value.match(pattern)){
            return true
        }else{
            passAlert[0].style.display = "block"
            passAlert[0].focus()
            return false
        }
    }else{
        passAlert[0].style.display = "block"
        passAlert[0].focus()
        return false
    }
        
}

function loginValid(){
    let loginfrm = document.getElementsByClassName("login")
    let uname = document.getElementById("username")
    let upass = document.getElementById("password")

    if(usernameValid(uname)){
        if(passwordValid(upass,16,8)){
            loginfrm.submit()
        }
    }

}