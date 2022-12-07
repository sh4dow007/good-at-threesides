var angleOneInput = document.querySelector('#angle1')
var angleTwoInput = document.querySelector('#angle2')
var angleThreeInput = document.querySelector('#angle3')
var checkAngleSum = document.querySelector('#check-angle-sum')
var angleSum = document.querySelector('#angle-sum')
var resultText = document.querySelector('#result-text-for-angle-sum')

function sumOfAngles(event) {
  event.preventDefault()

  console.log(angleOneInput.value, typeof angleOneInput.value)
  console.log(angleTwoInput.value, typeof angleTwoInput.value)
  console.log(angleThreeInput.value, typeof angleThreeInput.value)

  if (!angleOneInput.value || !angleTwoInput.value || !angleThreeInput.value) {
    alert("Angle field can't be empty.\nPlease enter valid angles.")
    return
  }

  var angleOne = parseFloat(angleOneInput.value)
  var angleTwo = parseFloat(angleTwoInput.value)
  var angleThree = parseFloat(angleThreeInput.value)

  if (angleOne === 0 || angleTwo === 0 || angleThree === 0) {
    alert(
      "Angle of a triangle can't be ZERO! \n If it's zero, it'll be a forming a straight line"
    )
    return
  }

  var sum = angleOne + angleTwo + angleThree
  console.log(sum)
  angleSum.textContent = 'Sum of the angles is: ' + sum

  if (sum != 180) {
    resultText.textContent = 'Oops! these angles cannot make a triangle'
  } else {
    resultText.textContent = 'It makes a triangle :)'
  }
}

checkAngleSum.addEventListener('click', sumOfAngles)
