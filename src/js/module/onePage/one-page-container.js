const $ = require('jquery')
const fullPage = require('./one-page')

module.exports = function () {
  fullPage()
  if($(window).width() > 600) {
    $('#fullpage').fullpage({
      navigation: true,
      navigationPosition: "right",
      navigationTooltips: ["First", "Second", "Third"],
      scrollingSpeed: 1200,
      onLeave: function (origin = 0, destination = 0, direction) {
        count = direction === 'up' ? count -= 1 : count += 1

        if(count) {
          $('#fp-nav').css('display', 'block')
        } else {
          $('#fp-nav').css('display', 'none')
        }

        pageNav.each(function () {
          $(this).css({
            'backgroundColor': 'transparent',
            'border-color': 'transparent'
          })
        })

        pageNav.each(function () {
          const el = $(this).find('.section__name')
          removeChild(el)
        })

        if(count === 2 || count === 3) {
          $('#fp-nav li').eq(count).append(`<div class="section__name section__name--yellow">${sectionsNames[count]}</div>`)
        } else {
          $('#fp-nav li').eq(count).append(`<div class="section__name">${sectionsNames[count]}</div>`)
        }

        pageNav.eq(count).css({
          'backgroundColor': '#ddd',
          'border-color': '#a68e52'
        })
      },
      afterLoad: function () {
        pageNav = $('#fp-nav li')
        $('#fp-nav').append($('.control'))
      }
    });
  }

  $('.control__arrow-up').click(function(){
    $.fn.fullpage.moveSectionUp();
  });

  $('.control__arrow-down').click(function(){
    $.fn.fullpage.moveSectionDown();
  });

  let count = 0
  const sectionsNames = ['Главная', 'Галерея', 'Планировка', 'Документы', 'Контакты']
  let pageNav
}

function removeChild(el) {
  el.remove()
}