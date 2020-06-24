const $ = require('jquery')
const slick = require('slick-carousel')
const sliderDocument = require('./slider-document')
const sliderGallery = require('./slider-gallery')
const sliderMain = require('./slider-main')

module.exports = function () {
  sliderDocument($, slick, '.slider__content', {
    slidesToShow: 3,
    slidesToScroll: 3,
    autoplay: true,
    autoplaySpeed: 2000,
    dots: true,
    responsive: [
      {
        breakpoint: 992,
        settings: {
          arrows: false,
          slidesToShow: 2,
          slidesToScroll: 2,
        }
      },
      {
        breakpoint: 770,
        settings: {
          arrows: false,
          slidesToShow: 1,
          slidesToScroll: 1,
        }
      }
    ]
  })
  sliderGallery()
  sliderMain($, slick, $('.main'), {
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplaySpeed: 2000,
    dots: true,
    appendDots: '.promo',
    appendArrows: $('.main').find('.promo')
  })
}