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
  centerPadding: '350px',
  infinite: true,
  variableWidth: false,
});
