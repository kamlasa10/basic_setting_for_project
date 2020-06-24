const sliderView = require('../slider/slider-view')

module.exports = function ($, tabSelector, contentSelector, activeClass, subTabsSelector, activeSubClass) {
  const tabs = $(tabSelector)
  const content = $(contentSelector)
  const active = activeClass
  const subTabs = $(subTabsSelector)
  const activeSub = activeSubClass

  tabs.each(function (i) {
    $(this).parent().attr('data-idx', i)

    subTabs.eq(i).children().each(function (j) {
      $(this).attr('data-sub-tab', j)

      $(this).on('click', (e) => {
        e.preventDefault()
      })
    })

    $(this).on('click', (e) => {
      e.preventDefault()
      showTab($(this).parent().attr('data-idx'), 0)
    })
  })

  function showTab(idx, i = 0) {
    hideTabs()
    const el = $(`[data-idx="${idx}"]`)
    el.addClass(activeClass)
    content.eq(idx).show()
    sliderView(content.eq(idx), idx)
  }

  function hideTabs() {
    tabs.each(function () {
      $(this).parent().removeClass(activeClass)
    })

    content.each(function () {
      $(this).hide()
    })
  }

  hideTabs(true)
  showTab(0, true, 0)
}