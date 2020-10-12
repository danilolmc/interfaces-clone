let carrouselImages = ["./img/sonic1.png", "./img/sonic2.png"];

let current = 0;

let domIMg = document.getElementsByClassName("carrousel");
let markup = document.getElementsByClassName("markup");

// console.log((markup.className += "red"));

function sSlides() {
  for (let i = 0; i < domIMg.length; i++) {
    domIMg[i].style.display = "none";
    markup[i].className = markup[i].className.replace("active", "");
  }

  if (current >= domIMg.length) {
    current = 0;
  }

  markup[current].classList.add("active");

  domIMg[current].style.display = "block";
  setTimeout(sSlides, 2000);
  current += 1;
}

sSlides();
