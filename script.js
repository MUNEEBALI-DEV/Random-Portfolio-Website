AOS.init();

// You can also pass an optional settings object
// below listed default settings
AOS.init({
  
  

  // Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
  offset: 120, // offset (in px) from the original trigger point
  delay: 0, // values from 0 to 3000, with step 50ms
  duration: 700, // values from 0 to 3000, with step 50ms
  easing: 'ease', // default easing for AOS animations
  once: false, // whether animation should happen only once - while scrolling down
  mirror: false, // whether elements should animate out while scrolling past them
  anchorPlacement: 'top-bottom', // defines which position of the element regarding to window should trigger the animation

});




const span = document.querySelector('.auto-type-1')
const span2= document.querySelector('.auto-type-2')
const span3= document.querySelector('.auto-type-3')

const wordsList = ['Developer', 'Coder', 'Programmer', 'Freelancer']
const wordsList2= ['Clients', 'Customers', 'Users', 'Instructor']
const wordsList3= ['Work', 'Portfolio', 'Projects']

function autoType(wordsList, element) {
  let wordIndex = 0
  let characterIndex = 0
  let skipUpdate = 0
  let reverseType = false

  const intervalId = setInterval(() => {
    if (skipUpdate) {
      skipUpdate--
      return
    }

    if (!reverseType) {
      skipUpdate = 2
      element.innerText = element.innerText + wordsList[wordIndex][characterIndex]
      characterIndex++
    } else {
      element.innerText = element.innerText.slice(0, element.innerText.length - 1)
      characterIndex--
    }

    if (characterIndex === wordsList[wordIndex].length) {
      skipUpdate = 6
      reverseType = true
    }

    if (element.innerText.length === 0 && reverseType) {
      reverseType = false
      wordIndex++
    }

    if (wordIndex === wordsList.length) {
      wordIndex = 0
    }
  }, 100)
}

autoType(wordsList,span)
autoType(wordsList2,span2)
autoType(wordsList3,span3)
