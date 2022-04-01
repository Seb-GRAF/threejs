import imagesLoaded from 'imagesloaded'
import FontFaceObserver from 'fontfaceobserver'

const fontOpen = new Promise((resolve) => {
  new FontFaceObserver('Open Sans').load().then(() => {
    resolve()
  })
})

const fontPlayfair = new Promise((resolve) => {
  new FontFaceObserver('Playfair Display').load().then(() => {
    resolve()
  })
})

const preloadImages = new Promise((resolve, reject) => {
  imagesLoaded(document.querySelectorAll('img'), { background: true }, resolve)
})

export default { fontOpen, fontPlayfair, preloadImages }
