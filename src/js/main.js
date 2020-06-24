const $ = require('jquery');
window.jQuery = $
const modalContainer = require('./module/modal/modal-container')
const formContainer = require('./module/form/form-container')
const sliderContainer = require('./module/slider/slider-container')
const tabContainer = require('./module/tab/tab-container')
const fullPageContainer = require('./module/onePage/one-page-container')

$(document).ready(() => {
  modalContainer()
  formContainer()
  tabContainer()
  sliderContainer()
  fullPageContainer()
})