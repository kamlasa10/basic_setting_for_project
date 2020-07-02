const template = require('./slider-template')

module.exports = function ($, slick, sliderSelector, options = {}) {

  sliderSelector.on('init beforeChange', (_, slick, currentSlide = 0, nextSlide = 0) => {
    const slide = slick.$slides.eq(nextSlide)
    const current = slide.find('.slider-info__current')
    const next = slide.find('.slider-info__next')

    nextSlide = currentSlide + 1 >= slick.$slides.length ? 0 : currentSlide + 1
    current.text(`0${currentSlide + 1}`)
    next.text(`0${nextSlide + 1}`)
  })

  sliderSelector.on('init afterChange', (_, slick, currentSlide = 0, nextSlide = 0) => {
    const slide = slick.$slides.eq(currentSlide)

    slide.find('.slick-dots li').eq(currentSlide).addClass('slick-active')
  })

  const slider = template($, slick, sliderSelector, options)

  sliderSelector.find('.slick-prev').on('click', function () {
    jQuery(sliderSelector).slick("slickPrev");
  });
  sliderSelector.find('.slick-next').on('click', function () {
    jQuery(sliderSelector).slick("slickNext");
  });
}