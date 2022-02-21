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

  $('.burger').on('click', function () {
    $('.burger').toggleClass('burger--active');
    $('.menu-adaptive').toggleClass('menu-adaptive--active');
    $('.wrapper').toggleClass('wrapper--menu-adaptive');
    $('.body').toggleClass('body--menu-adaptive');
  });

  $(document).mouseup(function (e) {
    let menuAdaptive = $('.menu-adaptive');
    if (!menuAdaptive.is(e.target) && menuAdaptive.has(e.target).length === 0) {
      $('.burger').removeClass('burger--active');
      $('.menu-adaptive').removeClass('menu-adaptive--active');
      $('.wrapper').removeClass('wrapper--menu-adaptive');
      $('.body').removeClass('body--menu-adaptive');
    }
  });

  $('.navigation__link--basket').on('click', function () {
    $('.basket').toggleClass('basket--active');
    $('.body').toggleClass('body--basket');
    $('.wrapper').toggleClass('wrapper--basket-active');
  });

  $('.basket__close').on('click', function () {
    $('.basket').removeClass('basket--active');
    $('.body').removeClass('body--basket');
    $('.wrapper').removeClass('wrapper--basket-active');
  });

  $(document).mouseup(function (e) {
    let Basket = $('.basket');
    if (!Basket.is(e.target) && Basket.has(e.target).length === 0) {
      $('.basket').removeClass('basket--active');
      $('.body').removeClass('body--basket');
      $('.wrapper').removeClass('wrapper--basket-active');
    }
  });

  $('.navigation__item--search').on('click', function () {
    $('.form-search').toggleClass('form-search--active');
  });

  $('.tabs__top-link').on('click', function (e) {
    e.preventDefault()
    $('.tabs__top-link').removeClass('tabs__top-link--active');
    $(this).addClass('tabs__top-link--active');
    $('.tabs__item').removeClass('tabs__item--active');
    $($(this).attr('href')).addClass('tabs__item--active');
  });

  $('.star').rateYo({
    spacing: "5px",
    starWidth: "16px",
    readOnly: true,
    'starSvg': '<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#clip0_1922_62)"><path d="M0.0250292 6.16429C0.0799913 5.99457 0.226213 5.87088 0.402253 5.84526L5.34767 5.12448L7.55938 0.629902C7.63809 0.469903 7.80057 0.368622 7.97845 0.368622C8.15636 0.368622 8.31882 0.469903 8.39755 0.629902L10.6094 5.12448L15.5547 5.84526C15.7307 5.87088 15.877 5.99457 15.9319 6.16426C15.9869 6.33397 15.9411 6.52025 15.8137 6.64478L12.2353 10.1433L13.0799 15.0834C13.11 15.2593 13.0379 15.437 12.894 15.5419C12.8126 15.6012 12.7161 15.6314 12.6192 15.6314C12.5448 15.6314 12.4702 15.6136 12.4018 15.5775L7.97848 13.2451L3.55533 15.5775C3.39783 15.6605 3.20705 15.6467 3.06314 15.5418C2.91922 15.437 2.84709 15.2592 2.87716 15.0833L3.72206 10.1433L0.143272 6.64475C0.0159006 6.52025 -0.029995 6.33397 0.0250292 6.16429Z"/></g><defs><clipPath id="clip0_1922_62"><rect width="15.9527" height="16" fill="white" transform="matrix(-1 0 0 1 15.9548 0)"/></clipPath></defs></svg>',
    normalFill: "#EDEDED",
    ratedFill: "#FFB800",
  });

  $('.opinion-form__stars').rateYo({
    readOnly: false,
    spacing: "5px",
    starWidth: "16px",
    fullStar: true,
    'starSvg': '<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#clip0_1922_62)"><path d="M0.0250292 6.16429C0.0799913 5.99457 0.226213 5.87088 0.402253 5.84526L5.34767 5.12448L7.55938 0.629902C7.63809 0.469903 7.80057 0.368622 7.97845 0.368622C8.15636 0.368622 8.31882 0.469903 8.39755 0.629902L10.6094 5.12448L15.5547 5.84526C15.7307 5.87088 15.877 5.99457 15.9319 6.16426C15.9869 6.33397 15.9411 6.52025 15.8137 6.64478L12.2353 10.1433L13.0799 15.0834C13.11 15.2593 13.0379 15.437 12.894 15.5419C12.8126 15.6012 12.7161 15.6314 12.6192 15.6314C12.5448 15.6314 12.4702 15.6136 12.4018 15.5775L7.97848 13.2451L3.55533 15.5775C3.39783 15.6605 3.20705 15.6467 3.06314 15.5418C2.91922 15.437 2.84709 15.2592 2.87716 15.0833L3.72206 10.1433L0.143272 6.64475C0.0159006 6.52025 -0.029995 6.33397 0.0250292 6.16429Z"/></g><defs><clipPath id="clip0_1922_62"><rect width="15.9527" height="16" fill="white" transform="matrix(-1 0 0 1 15.9548 0)"/></clipPath></defs></svg>',
    normalFill: "#EDEDED",
    ratedFill: "#FFB800",
  });

  $('.product-offer__slider').slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    prevArrow: '<button class="btn-slider slick--prev"><svg class="btn-slider__svg"><use xlink:href="images/sprite.svg#arrow-left"></use></svg></button>',
    nextArrow: '<button class="btn-slider slick--next"><svg class="btn-slider__svg"><use xlink:href="images/sprite.svg#arrow-right"></use></svg></button>',
    responsive: [{
        breakpoint: 1100,
        settings: {
          slidesToShow: 3,
        }
      },
      {
        breakpoint: 769,
        settings: {
          arrows: false,
          slidesToShow: 3,
        }
      },
      {
        breakpoint: 660,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          arrows: false,
        }
      },
      {
        breakpoint: 500,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false,
        }
      },
    ]
  });

  $('.main-slider__items').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    infinite: false,
    fade: true,
    prevArrow: '<button class="btn-slider btn-slider--main-prev"><svg class="btn-slider__svg"><use xlink:href="images/sprite.svg#arrow-left"></use></svg></button>',
    nextArrow: '<button class="btn-slider btn-slider--main-next"><svg class="btn-slider__svg"><use xlink:href="images/sprite.svg#arrow-right"></use></svg></button>',
    responsive: [{
      breakpoint: 1540,
      settings: {
        arrows: false,
        dots: true
      }
    }, ]
  });

  $('.brands__items').slick({
    slidesToScroll: 1,
    slidesToShow: 6,
    arrows: false,
    responsive: [{
        breakpoint: 1200,
        settings: {
          slidesToShow: 5,
        },
      },
      {
        breakpoint: 1000,
        settings: {
          slidesToShow: 4,
        },
      },
      {
        breakpoint: 700,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 468,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
    ]
  });

  $('.slider-window').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    fade: true,
    prevArrow: '<button class="btn-slider btn-slider--main-prev"><svg class="btn-slider__svg"><use xlink:href="images/sprite.svg#arrow-left"></use></svg></button>',
    nextArrow: '<button class="btn-slider btn-slider--main-next"><svg class="btn-slider__svg"><use xlink:href="images/sprite.svg#arrow-right"></use></svg></button>',
    dots: true,
  });

  $('.shop__top-btn').on('click', function () {
    $('.shop__top-btn').removeClass('shop__top-btn--active');
    $(this).addClass('shop__top-btn--active');
  });

  $('.shop__top-btn--list').on('click', function () {
    $('.product-card').addClass('product-card--list');
    $('.shop-market').removeClass('shop-market--grid');
    $('.shop-market').addClass('shop-market--list');
  });

  $('.shop__top-btn--grid').on('click', function () {
    $('.product-card').removeClass('product-card--list');
    $('.shop-market').addClass('shop-market--grid');
    $('.shop-market').removeClass('shop-market--list');
  });

  $('.filter-item__list, .filter-item__title').on('click', function () {
    $(this).siblings().toggleClass('filter-item__list--active');
    $(this).toggleClass('filter-item__title--active');
  });

  $('.shop__sort, .product-page__number, .basket__number').styler();


  var $range = $('.filter-price__bar'),
    $inputFrom = $('.input-from'),
    $inputTo = $('.input-to'),
    instance;

  $range.ionRangeSlider({
    type: 'double',
    hide_min_max: true,
    hide_from_to: true,
    onStart: updateInputs,
    onChange: updateInputs
  });
  instance = $range.data("ionRangeSlider");

  function updateInputs(data) {
    from = data.from;
    to = data.to;
    $inputFrom.prop("value", from);
    $inputTo.prop("value", to);
  }

  $inputFrom.on("input", function () {
    var val = $(this).prop("value");
    instance.update({
      from: val
    });
  });

  $inputTo.on("input", function () {
    var val = $(this).prop("value");
    instance.update({
      to: val
    });
  });

  $('.shop__top-btn--adaptive').on('click', function () {
    $('.shop__filter').toggleClass('shop__filter--active');
    $('.shop').toggleClass('shop--active');
    $('.wrapper').toggleClass('wrapper--shop-active');
    $('.body').toggleClass('body--shop-active');
  });

  $(document).mouseup(function (e) {
    let filterMenu = $('.shop__filter');
    if (!filterMenu.is(e.target) && filterMenu.has(e.target).length === 0) {
      $('.shop__filter').removeClass('shop__filter--active');
      $('.shop').removeClass('shop--active');
      $('.wrapper').removeClass('wrapper--shop-active');
      $('.body').removeClass('body--shop-active');
    }
  });

  $('.shop__btn').on('click', function () {
    $('.shop__filter').removeClass('shop__filter--active');
    $('.shop').removeClass('shop--active');
    $('.wrapper').removeClass('wrapper--shop-active');
    $('.body').removeClass('body--shop-active');
  });

  $('.product-slider').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    fade: true,
    prevArrow: '<button class="btn-slider slick--prev"><svg class="btn-slider__svg"><use xlink:href="images/sprite.svg#arrow-left"></use></svg></button>',
    nextArrow: '<button class="btn-slider slick--next"><svg class="btn-slider__svg"><use xlink:href="images/sprite.svg#arrow-right"></use></svg></button>',
    responsive: [{
      breakpoint: 700,
      settings: {
        arrows: false,
      }
    }]
  });

  $('.product-slider__link').on('click', function () {
    $('.body').toggleClass('body--window-slider');
  });

  $('.slider-window__close').on('click', function () {
    $('.body').removeClass('body--window-slider');
  });

  var containerMix1 = document.querySelector('[data-ref="mixProducts"]');
  var containerMix2 = document.querySelector('[data-ref="mixStocks"]');
  var config = {
    controls: {
      scope: 'local'
    }
  };
  let mixer1 = mixitup('.products', config);
  let mixer2 = mixitup('.stocks', config);
});