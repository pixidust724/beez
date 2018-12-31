// when i scroll down the page, at a certain point,
// add a class to make the header white

const headerTag = document.querySelector('header')


const toggleHeader = function() {
  //   pick a pixels, how we far down we scroll down the page (threshold)
  const pixels = window.pageYOffset

  if (pixels > 60) {
    headerTag.classList.add('scrolled')
  } else {
    headerTag.classList.remove('scrolled')
  }
}

const fadeBox = function () {
   const pixels = window.pageYOffset
   const alpha = Math.min(pixels / 800, 0.5)
   
   headerTag.style.boxShadow = `0 0 8px rgba(0, 0, 0, ${alpha})`
}

fadeBox()
toggleHeader()

document.addEventListener('scroll', function() {
  toggleHeader()
  fadeBox()
})