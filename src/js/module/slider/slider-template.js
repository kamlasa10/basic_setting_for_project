module.exports = function ($, slick, sliderSelector, options = {}) {
  const slider = $(sliderSelector)
  slider.slick(options)

  return slider
}