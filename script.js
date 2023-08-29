let menuIcom= document.querySelector("mainContainer>navbar>div>p.menu")
let aside=document.querySelector("mainContainer>navbar>div>ul.aside")
let button=aside.querySelector("mainContainer>navbar>div>ul.aside>button.pakel")

menuIcom.onclick =function () {
    aside.classList.toggle('active')
}
button.onclick=function () {
    aside.classList.toggle('active')
}


let dzax=document.querySelector("mainContainer>testimonials>div>.content>.Jenny>div>span.dzax")
let aj=document.querySelector("mainContainer>testimonials>div>.content>.Jenny>div>span.aj")
let img=document.querySelectorAll("mainContainer>testimonials>div>.content>.Jenny>div.img")
let active=0

aj.onclick=function () {
    img[active].style.display = 'none'
     if(active == img.length-1){
        active=-1
    }
    img[++active].style.display = 'block'
}
dzax.onclick = function () {
    img[active].style.display = 'none'
    if (active==0) {
        active=img.length
    }
    img[--active].style.display = 'block'
}

// +i hamar?
let par = document.querySelectorAll("mainContainer > .frequently > div > .howMuch > div > p");
let plyus = document.querySelectorAll('mainContainer > .frequently > div > .howMuch > div > button.plyus');








