$(".customer-list").slick({
  infinite: true,
  slidesToShow: 3,
  slidesToScroll: 1,
  dots: true,
  prevArrow:`<button type='button' class='slick-prev pull-left'><img src="/img/arrow-left.png" /></button>`,
  nextArrow: `<button type='button' class='slick-next pull-right'><img src="/img/arrow-right.png" /></button>`,

  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        infinite: true,
        arrows: false,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
        arrows: false,
      },
    },
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ],
});

const toggle = document.querySelector(".menu-toggle");
const menu = document.querySelector(".menu");
const activeClass = "is-show";
toggle.addEventListener("click", function(){
  menu.classList.add(activeClass);
});
window.addEventListener("click", function (e) {
  if (!menu.contains(e.target) && !e.target.matches(".menu-toggle")) {
    menu.classList.remove(activeClass);
  }
});
