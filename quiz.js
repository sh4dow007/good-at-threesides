var question = document.querySelector('#question')
var optionYes = document.querySelector('#option-yes')
var optionNo = document.querySelector('option-no')
var submitAction = document.querySelector('#submit')
var ele = document.getElementsByName('option')

var angle1 = 0
var angle2 = 0
var angle3 = 0

var questionNo = 0

function setQuestionRoundOne() {
  questionNo++

  angle1 = Math.floor(Math.random() * 180 + 1)
  angle2 = Math.floor(Math.random() * 180 + 1)
  angle3 = Math.floor(Math.random() * 180 + 1)

  if (questionNo <= 3) {
    whichTriangle = 1 // obtuse
  } else if (questionNo > 3 && questionNo <= 6) {
    whichTriangle = 2 // acute
  } else {
    whichTriangle = 3 // right angle
    if (questionNo === 7 || questionNo === 10) {
      angle2 = 90
    }
  }

  question.textContent =
    'If a triangle has angles ' +
    angle1 +
    '°, ' +
    angle2 +
    '°, ' +
    angle3 +
    '°. Is it an ' +
    (whichTriangle === 1 ? 'obtuse' : whichTriangle === 2 ? 'acute' : 'right') +
    ' triangle? '

  return (
    'If a triangle has angles ' +
    angle1 +
    '°, ' +
    angle2 +
    '°, ' +
    angle3 +
    '°. Is it an ' +
    (whichTriangle === 1 ? 'obtuse' : whichTriangle === 2 ? 'acute' : 'right') +
    ' triangle? '
  )
}

function giveAnswerRoundOne() {
  if (whichTriangle === 1) {
    return (angle1 > 90 || angle2 > 90 || angle3 > 90) &&
      angle1 + angle2 + angle3 === 180
      ? 'yes'
      : 'no'
  } else if (whichTriangle === 2) {
    return angle1 < 90 &&
      angle2 < 90 &&
      angle3 < 90 &&
      angle1 + angle2 + angle3 === 180
      ? 'yes'
      : 'no'
  } else {
    return (angle1 === 90 || angle2 === 90 || angle3 === 90) &&
      angle1 + angle2 + angle3 === 180
      ? 'yes'
      : 'no'
  }
}

function roundOne(event) {
  event.preventDefault()
  for (var i = 0; i < 10; i++) {
    var questions = {
      question: setQuestionRoundOne(),
      answer: giveAnswerRoundOne(),
    }

    for (i = 0; i < ele.length; i++) {
      if (ele[i].checked) {
        var userAnswer = ele[i].value
      }
    }

    if (userAnswer.toUpperCase() === questions.answer.toUpperCase()) {
      console.log("You're right! Good Luck ahead :)")
    } else {
      console.log("You're wrong! Brush up your basics :)")
    }
  }
}

submitAction.addEventListener('click', roundOne)
