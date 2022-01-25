$(function () {
  $('.catalog__btn').on('click', function () {
    $('.catalog__list').toggleClass('catalog__list--active');
    $('.catalog__btn').toggleClass('catalog__btn--active');
  });

  $(document).mouseup(function (e) {
    let btn = $('.catalog__btn');
    if (!btn.is(e.target) && btn.has(e.target).length === 0) {
      $('.catalog__list').removeClass('catalog__list--active');
      $('.catalog__btn').removeClass('catalog__btn--active');
    }
  });

  $('.main-slider__items').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    infinite: false,
    fade: true,
    prevArrow: '<button class="slick-prev"><svg class="slick-arrow__svg slick-prev--svg"><use xlink:href="images/sprite.svg#arrow-left"></use></svg></button>',
    nextArrow: '<button class="slick-next"><svg class="slick-arrow__svg slick-next--svg"><use xlink:href="images/sprite.svg#arrow-right"></use></svg></button>'
  });
  let mixer = mixitup('.products__items');
});