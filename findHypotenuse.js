var legOneInput = document.querySelector('#leg-number-1')
var legTwoInput = document.querySelector('#leg-number-2')
var findHypotenuse = document.querySelector('#find-hypotenuse')
var result = document.querySelector('#result')
var resultText = document.querySelector('#result-text')

function calculateHypotenuse(event) {
  event.preventDefault()

  // console.log(legOneInput.value, typeof(legOneInput.value))
  // console.log(legTwoInput.value, typeof(legTwoInput.value))

  if (!legOneInput.value || !legTwoInput.value) {
    alert('No fields can be left empty! Fill in all the fields :)')
    return
  }

  legOne = parseFloat(legOneInput.value)
  legTwo = parseFloat(legTwoInput.value)

  // console.log(legOne, typeof(legOne))
  // console.log(legTwo, typeof(legTwo))

  if (legOne === 0 || legTwo === 0) {
    alert('No side can be be 0! Please enter valid inputs :)')
    return
  }

  var hypotenuse = Math.sqrt(legOne ** 2 + legTwo ** 2).toFixed(3)

  resultText.textContent = 'Hypotenuse: ' + hypotenuse
}

findHypotenuse.addEventListener('click', calculateHypotenuse)
