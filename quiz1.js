const quizForm = document.forms[0]
const quesDivs = document.querySelectorAll('.radio')
const scoreDiv = document.querySelector('#scoreDiv')
const submitQuiz = document.querySelector('#submitQuiz')

const correctAns = [
  'option1',
  'option2',
  'option1',
  'option1',
  'option1',
  'option2',
  'option2',
  'option3',
  'option3',
  'option3',
]
let score = 0

function clickEventHandler(event) {
  event.preventDefault()
  const quesData = new FormData(quizForm)
  let index = 0
  for (let each of quesData) {
    if (each[1] == correctAns[index]) {
      quesDivs[index].style.backgroundColor = 'lightgreen'
      score++
    } else {
      quesDivs[index].style.backgroundColor = 'pink'
    }

    index++
  }
  scoreDiv.textContent = 'Score: ' + score
  submitQuiz.style.display = 'none'
}

quizForm.addEventListener('submit', clickEventHandler)
