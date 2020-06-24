const $ = require('jquery')

module.exports = function (triggerSelector, overlaySelector, closeSelector) {
  const triggers = $(triggerSelector)
  const overlay = $(overlaySelector)
  const close = $(closeSelector)

  function showPopup() {
    triggers.each(function () {
      $(this).on('click', (e) => {
        e.preventDefault()
        overlay.css({'display': 'block'})
        overlay.animate({opacity: 1}, 500)
      })
    })
  }

  function closePopup() {
    close.on('click', function () {
      overlay.css({'display': 'none', 'opacity': 0})
      }
    )
  }

  closePopup()
  showPopup()
}