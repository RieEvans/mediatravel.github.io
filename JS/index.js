let menu = document.querySelector('#menu-btn');
let navbar = document.querySelector('.header .navbar');

menu.onclick = () => {
    menu.classList.toggle('fa-times');
    navbar.classList.toggle('active')
};

window.onscroll = () => {
    menu.classList.remove('fa-times');
    navbar.classList.remove('active');
};


var swiper = new Swiper(".home-slider", {
  loop:true,
  pagination: {
    el: ".swiper-pagination",
  },
});


var swiper = new Swiper(".reviews-slider", {
  loop:true,
 spaceBetween: 50,
  autoHeight:true,
  grabCursor:true,
  breakpoints: {
    640: {
     slidesPerView: 1,
     
    },
    768: {
      slidesPerView: 3,
    },
    1024: {
      slidesPerView: 2,
   },
  },
});


let loadMoreBtn = document.querySelector('.packages .load-more .btn');
let currentItem = 2;

loadMoreBtn.onclick = () => {
  let boxes = [...document.querySelectorAll('.packages .box-container .box')];
  for(let i = currentItem; i < currentItem + 2; i++){
    boxes[i].style.display = 'inline-block';
  }

  currentItem += 2;
  if(currentItem >= boxes.length){
    loadMoreBtn.style.display = 'none';
  }
}