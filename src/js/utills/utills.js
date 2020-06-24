const $ = require('jquery')

module.exports = function ($arr) {
  let isEmpty
  $arr.each(function () {
    if(!$(this).val()) {
      isEmpty = true
      return isEmpty
    }
  })

  return isEmpty
}