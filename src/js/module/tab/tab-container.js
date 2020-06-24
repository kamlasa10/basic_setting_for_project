const tabView = require('./tab-view')
const tabGallery= require('./tab-gallery')
const $ = require('jquery')

module.exports = function () {
  tabView(
    $,
    '.view__tab',
    '.view__wrap',
    'view__tabs-item--active',
    '.view__sub-list',
    'view__sub-item--active'
  )

  tabGallery(
    $,
    '.gallery__tab',
    '.gallery__big-img',
    'gallery__tab--active',
    '.gallery__right'
    )

}