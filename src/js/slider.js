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
  slidesToShow: 7,
  slidesToScroll: 1,
  asNavFor: '.slider-for',
  dots: false,
  centerMode: true,
  focusOnSelect: true,
  arrows: false,
  centerPadding: '105',
  infinite: true,
  /* variableWidth: true, */
});

/* $('.slider').slick({
  // normal options...
  infinite: false,

  // the magic
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        infinite: true,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        dots: true,
      },
    },
    {
      breakpoint: 300,
      settings: 'unslick', // destroys slick
    },
  ],
}); */
