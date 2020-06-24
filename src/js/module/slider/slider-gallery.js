const template = require('./slider-template')
const $ = require('jquery')
const slick = require('slick-carousel')

function removeEl(el) {
  function removeEl(el) {
    el.each(function (i) {
      if (el.length - 1 === i) {
        return
      }
      $(this).remove()
    })
  }
}

function addBlock(bigImgs, wrap) {
  const block = $(`
       <div class="gallery__control">
          <div class="gallery__arrow"></div>
        </div>
    `)
  block.append(bigImgs.find('.slick-dots'))
  block.find('.gallery__arrow').append(bigImgs.find('.slick-arrow'))
  wrap.append(block)
}

module.exports = function (i) {
  const bigImgs = $('.gallery__big-img').eq(i)
  const smallImgs = $('.gallery__right').eq(i)
  const wrap = $('.gallery__left')

  bigImgs.on('init', (_, slick) => {
    addBlock(bigImgs, wrap)
  })
  removeEl($('.gallery__control'))

  addBlock(bigImgs, wrap)


  if (bigImgs.hasClass('slick-initialized') || smallImgs.hasClass('slick-initialized')) {
    return
  }

  bigImgs.slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    dots: true,
    fade: true,
    asNavFor: smallImgs
  })
  smallImgs.slick({
    slidesToShow: 5,
    slidesToScroll: 1,
    focusOnSelect: true,
    autoPlay: true,
    asNavFor: bigImgs,
    responsive: [
      {
        breakpoint: 1170,
        settings: {
          arrows: false,
          slidesToShow: 4
        }
      },
      {
        breakpoint: 992,
        settings: {
          arrows: false,
          slidesToShow: 3
        }
      },
      {
        breakpoint: 768,
        settings: {
          arrows: false,
          slidesToShow: 2
        }
      },
      {
        breakpoint: 615,
        settings: {
          arrows: false,
          slidesToShow: 4
        }
      },
      {
        breakpoint: 480,
        settings: {
          arrows: false,
          slidesToShow: 3
        }
      },
    ]
  })
}