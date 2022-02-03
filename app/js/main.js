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
  var containerMix1 = document.querySelector('[data-ref="mixProducts"]');
  var containerMix2 = document.querySelector('[data-ref="mixStocks"]');
  var config = {
    controls:{
      scope: 'local'
    }
  };
  let mixer1 = mixitup('.products', config);
  let mixer2 = mixitup('.stocks', config);

  $('.brands__items').slick({
    slidesToScroll: 1,
    slidesToShow: 6,
    arrows: false
  });
});