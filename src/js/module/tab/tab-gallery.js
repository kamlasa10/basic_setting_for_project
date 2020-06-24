const slick = require('slick')
const sliderGallery = require('../slider/slider-gallery')

module.exports = function ($, triggerSelector, contentSelector, activeClass, imgsContentSelector) {
  const trigger = $(triggerSelector)
  const content = $(contentSelector)
  const active = activeClass
  const imgsContent = $(imgsContentSelector)

  trigger.each(function (i) {
    $(this).on('click', (e) => {
      e.preventDefault()
      showTabs(i)
      sliderGallery(i)
    })
  })

  function hideTabs() {
    trigger.each(function () {
      $(this).removeClass(active)
    })

    imgsContent.each(function () {
      $(this).hide()
    })

    content.each(function () {
      $(this).hide()
    })
  }

  function showTabs(idx) {
    hideTabs()
    trigger.eq(idx).addClass(active)
    content.eq(idx).show()
    imgsContent.eq(idx).show()

    try {
      content.slick("refresh");
      imgsContent.slick("refresh")
    } catch (e) {}

    sliderGallery(idx)
  }

  hideTabs()
  showTabs(0)

}