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
    prevArrow: '<button class="slick-arrow slick--prev"><svg class="slick-arrow__svg"><use xlink:href="images/sprite.svg#arrow-left"></use></svg></button>',
    nextArrow: '<button class="slick-arrow slick--next"><svg class="slick-arrow__svg"><use xlink:href="images/sprite.svg#arrow-right"></use></svg></button>',
    responsive: [
      {
        breakpoint: 1540,
        settings: {
          arrows: false,
          dots: true
        }
      },
    ]
  });

  $('.brands__items').slick({
    slidesToScroll: 1,
    slidesToShow: 6,
    arrows: false,
    responsive: [
      {
        breakpoint: 1200,
        settings:{
          slidesToShow: 5,
        },
      },
      {
        breakpoint: 1000,
        settings:{
          slidesToShow: 4,
        },
      },
      {
        breakpoint: 700,
        settings:{
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 468,
        settings:{
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
    ]
  });

  $('.burger').on('click', function(){
    $('.burger').toggleClass('burger--active');
    $('.menu-adaptive').toggleClass('menu-adaptive--active');
    $('.body').toggleClass('body--active');
  });
  $('.navigation__item--search').on('click', function(){
    $('.form-search').toggleClass('form-search--active');
  });

  $('.shop__content-btn').on('click', function(){
    $('.shop__content-btn').removeClass('shop__content-btn--active');
    $(this).addClass('shop__content-btn--active');
  });

  $('.shop__content-btn--list').on('click', function(){
    $('.product-card').addClass('product-card--list')
  })

  $('.shop__content-btn--grid').on('click', function(){
    $('.product-card').removeClass('product-card--list')
  })

  $('.shop__content-sort').styler();

  var containerMix1 = document.querySelector('[data-ref="mixProducts"]');
  var containerMix2 = document.querySelector('[data-ref="mixStocks"]');
  var config = {
    controls:{
      scope: 'local'
    }
  };
  let mixer1 = mixitup('.products', config);
  let mixer2 = mixitup('.stocks', config);
});