//////////////////////////////SLIDER /////////////////////////////////
function button1() {
    sContent.style.left = "-100%";
    s1.style.display = "none";
    s2.style.display = "block";
    s3.style.display = "block";
}

function button2() {
    sContent.style.left = "0%";
    s1.style.display = "block";
    s2.style.display = "none";
    s3.style.display = "none";
}

function button3() {
    sContent.style.left = "-200%";
    s2.style.display = "none";
    s3.style.display = "none";
    s4.style.display = "block";
}

function button4() {
    sContent.style.left = "-100%";
    s2.style.display = "block";
    s3.style.display = "block";
    s4.style.display = "none ";
}

////////////////////////////////////Menu dépliant repliant ///////////////////////////////////

function Yscroll() {
    var divTitre;
    var yPos;
    divTitre = document.getElementById('divTitre');
    yPos = window.pageYOffset;
    if (yPos > 150) {
        divTitre.style.height = "0px";
    } else {
        divTitre.style.height = "40px";
    }
}
window.addEventListener("scroll", Yscroll);

/////////////////////////// responsive part //////////////////////


//////////////////////BACK TO TOP DUDE ///////////////////////////////
let marginY = 0;
let speed = 25;
let scroller = null;
let myButton = document.getElementById('BackTop');

window.onscroll = function() {

    if (window.pageYOffset >= 400) {
        myButton.style.display = "block";
    } else {
        myButton.style.display = "none";
    }
};

function LetTop() {
    scroller = setTimeout(function() {
        LetTop();
    }, 1);
    marginY = window.pageYOffset - speed;

    if (marginY <= 0) {
        clearTimeout(scroller);
    }
    window.scroll(0, marginY);
}

////////////////////////////////Remplissage///////////////////////
/*
function Remplissage() {
    let wrapper = document.getElementById('wrapper')
    for (var i = 0; i < 20; i++) {
        wrapper.innerHTML += ("<h4>" + "Je suis pas beau mais moi au moins je le sais, Mouahahahahah ;) </h4>");
    }
}

window.onload = Remplissage();
*/