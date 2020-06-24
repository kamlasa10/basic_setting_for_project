const $ = require('jquery')

module.exports = function (formSelector) {
  const form = $(formSelector)
  const inputs = form.find('.modal__input')
  const checkEmpty = require('../../utills/utills')

  form.on('submit', (e) => {
    e.preventDefault()
    const formData = new FormData(document.querySelector(formSelector))
    let formEmpty = false
    formEmpty = checkEmpty(inputs)

    if(formEmpty) {
      alert('Введите значения во все поля!')
      return
    }

    alert('Мы с вами свяжемся в ближайшее время')
    $('.overlay').css({'display': 'none', 'opacity': 0})
    form[0].reset()
  })
}