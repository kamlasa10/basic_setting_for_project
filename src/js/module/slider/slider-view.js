const template = require('./slider-template')
const slick = require('slick-carousel')
const $ = require('jquery')

module.exports = function (el, idx) {
  const subTabs = $('[data-sub-tab]')
  const listSubTab = $('.view__sub-list').eq(idx)

  listSubTab.children().eq(0).addClass('view__sub-item--active')

  el.on('init beforeChange', (_, slick, currentSlide, nextSlide = 0) => {
    subTabs.each(function () {
      $(this).removeClass('view__sub-item--active')
    })

    listSubTab.children().eq(nextSlide).addClass('view__sub-item--active')
  })

  el.on('init afterChange', (_, slick, currentSlide = 0, nextSlide) => {
    const wrap = $(`
      <div class="view__control">
        <div class="view__control-arrow"></div>
      </div>
    `)
    wrap.append(el.find('.slick-dots'))
    wrap.find('.view__control-arrow').append(el.find('.slick-arrow'))
    el.append(wrap)
    slick.$slides.eq(slick.$slides.length - 1).find('.slick-dots').eq((slick.$slides.length - 1)).remove()
  })

  if (el.hasClass('slick-initialized')) {
    return
  }

  const slider = template($, slick, el, {
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplaySpeed: 2000,
    dots: true,
  })
}