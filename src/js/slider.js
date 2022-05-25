$('.slider-for').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  // arrows: false,
  fade: true,
  asNavFor: '.slider-nav',
  prevArrow: $('.slick-prev-js'),
  nextArrow: $('.slick-next-js'),
  // appendArrows,
});
$('.slider-nav').slick({
  slidesToShow: 3,
  slidesToScroll: 1,
  asNavFor: '.slider-for',
  dots: false,
  arrows: false,
  mobileFirst: true,
  infinite: false,
  responsive: [
    {
      breakpoint: 767,
      settings: {
        slidesToShow: 7,
        slidesToScroll: 7,
      },
    },
  ],
});
