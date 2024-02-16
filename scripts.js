let menu = document.getElementById("menu");
let navbar = document.querySelector(".navbar");
menu.addEventListener("click", function(){
    if(navbar.style.left === "100%"){
        navbar.style.left = 0;
    }else{
        navbar.style.left = "100%";
    }
})



const myslide = document.querySelectorAll(".myslide");
const dot = document.querySelectorAll(".dot");

let counter = 1;
slidefun(counter);
let timer = setInterval(autoslide, 6000);

function autoslide() {
  counter += 1;
  slidefun(counter);
}

function plusSlides(n) {
  counter += n;
  slidefun(counter);
  resettime();
}

function currentslide(n) {
  counter = n;
  slidefun(counter);
  resettime();
}

function resettime() {
  clearInterval(timer);
  timer = setInterval(autoslide, 6000);
}

function slidefun(n) {
  let i;
  for(i = 0;i < myslide.length;i++){
    myslide[i].style.display = "none";
  }
  for(i = 0;i < dot.length;i++){
    dot[i].className = dot[i].className.replace(' active', '');
  }
  if(n > myslide.length){
    counter = 1;
  }
  if(n < 1){
    counter = myslide.length;
  }
  myslide[counter - 1].style.display = "block";
  dot[counter - 1].className += " active";
}


$('.owl-carousel').owlCarousel({
  items:3,
  loop:true,
  center:true,
  margin:10,
  URLhashListener:true,
  autoplay:true,
  nav:true,
  startPosition: 'URLHash',
  responsive:{
      0:{
          items:1
      },
      600:{
          items:3
      },            
      960:{
          items:5
      },
      1200:{
          items:6
      }
  }
});
owl.on('mousewheel', '.owl-stage', function (e) {
  if (e.deltaY>0) {
      owl.trigger('next.owl');
  } else {
      owl.trigger('prev.owl');
  }
  e.preventDefault();
});