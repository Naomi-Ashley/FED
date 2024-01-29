var slideIndex = 1;
showDivs(slideIndex)

const prevBtn = document.querySelector(".slideshow button:nth-of-type(1)")
const nextBtn = document.querySelector(".slideshow button:nth-of-type(2)")

prevBtn.onclick = previous;
nextBtn.onclick = next;


function previous(){
    showDivs(slideIndex += 1)
}

function next(){
    showDivs(slideIndex -= 1)
}

function showDivs(n){
    var i;
    var x = document.getElementsByClassName('slide');

    if(n > x.length){
        slideIndex = 1
    }

    if(n<1){
        slideIndex = x.length
    }

    for(i = 0; i < x.length; i++){
        x[i].style.display = "none";
    }
    x[slideIndex-1].style.display = 'block';
}