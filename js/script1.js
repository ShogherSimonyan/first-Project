let plyus = document.querySelectorAll('mainContainer > .frequently > div > .howMuch > div > button.plyus, mainContainer > .frequently > div > .howMuch > div > div');


for (let i = 0; i < plyus.length; i++) {
    plyus[i].onclick = function () {
        let div = this.parentElement;
        if (div.classList.toggle("show")) {
            div.style.height=div.querySelector("p").clientHeight+70+"px"
        }
        else{
            div.style.height="40px"
        }
    };
}