console.log('JS is connected')

// Variables for Category 1s Question Boxes 
const sports_100 = document.querySelector('.cat-1-100')
const sports_200 = document.querySelector('.cat-1-200')
const sports_300 = document.querySelector('.cat-1-300')
const sports_400 = document.querySelector('.cat-1-400')
const sports_500 = document.querySelector('.cat-1-500')

// Variables for Category 2s Question Boxes 
const foodDrink_100 = document.querySelector('.cat-2-100')
const foodDrink_200 = document.querySelector('.cat-2-200')
const foodDrink_300 = document.querySelector('.cat-2-300')
const foodDrink_400 = document.querySelector('.cat-2-400')
const foodDrink_500 = document.querySelector('.cat-2-500')

// Variables for Category 3s Question Boxes 
const theatre_100 = document.querySelector('.cat-3-100')
const theatre_200 = document.querySelector('.cat-3-200')
const theatre_300 = document.querySelector('.cat-3-300')
const theatre_400 = document.querySelector('.cat-3-400')
const theatre_500 = document.querySelector('.cat-3-500')

// Variables for Category 4s Question Boxes 
const music_100 = document.querySelector('.cat-4-100')
const music_200 = document.querySelector('.cat-4-200')
const music_300 = document.querySelector('.cat-4-300')
const music_400 = document.querySelector('.cat-4-400')
const music_500 = document.querySelector('.cat-4-500')

// Variables for Category 5s Question Boxes 
const fourLetterWords_100 = document.querySelector('.cat-5-100')
const fourLetterWords_200 = document.querySelector('.cat-5-200')
const fourLetterWords_300 = document.querySelector('.cat-5-300')
const fourLetterWords_400 = document.querySelector('.cat-5-400')
const fourLetterWords_500 = document.querySelector('.cat-5-500')

// Varibales for the Modal
const modal_question = document.getElementById('question-text')
const modal_answer = document.getElementById('answer-text') 
const modal = document.getElementById('modal')
const closeBtn = document.getElementById('close')
const submitBtn = document.getElementById('submit-button')
const scoreBoard = document.getElementById('scoreboard-text')
const startBtn = document.getElementById('start-button')
const restartBtn = document.getElementById('restart-button')



const questionObject = {
        Q1: {   
                category: 'sports',
                value: 100, 
                question: 'What company\'s logo is a swoosh?', 
                answer: 'Nike',
        },    
        Q2: {
                category: 'sports',
                value: 200, 
                question: 'What do you call it when a bowler makes three strikes in a row?', 
                answer: 'Turkey',
        },
        Q3: {
                category: 'sports',
                value: 300, 
                question: 'The Olympics are held every how many years?', 
                answer: 'Four',
        },
        Q4: {
                category: 'sports',
                value: 400, 
                question: 'What is the national sport of Canada?', 
                answer: 'Lacrosse',
        },
        Q5: {
                category: 'sports',
                value: 500, 
                question: 'Who has won more tennis grand slam titles, Venus Williams or Serena Williams?',
                answer: 'Serena Williams'
        }
}

const openModal = () => {
    modal.style.display = 'block'
}

const closeModal = () => {
    document.getElementById('player-answer').value = ''
    modal.style.display = 'none'
}


closeBtn.addEventListener('click', closeModal)


let click = 0
let currentScore = 0
const startGame = () => {
    
    document.querySelectorAll('.question-box').forEach((box) => {
        box.addEventListener('click', (e) => {
            click++
            if (e.currentTarget === sports_100) {
                sports_100.innerText = ''
                modal_question.innerText = questionObject.Q1.question
                let answer = questionObject.Q1.answer
                let value = questionObject.Q1.value
                openModal()
                submitBtn.addEventListener('click', () => {
                    let playerAnswer = document.getElementById('player-answer').value
                    if (playerAnswer === answer) {
                        modal_question.innerText = 'That\'s Correct!'
                        currentScore = currentScore + value
                        scoreBoard.innerText = currentScore
                    } else {
                        modal_question.innerText = 'That\'s Incorrect. The correct answer is ' + '"' + answer + '".'
                    }
                })
            } else if (e.currentTarget === sports_200) {
                sports_200.innerText = ''
                modal_question.innerText = questionObject.Q2.question
                let answer = questionObject.Q2.answer
                let value = questionObject.Q2.value
                openModal()
                submitBtn.addEventListener('click', () => {
                    let playerAnswer = document.getElementById('player-answer').value
                    if (playerAnswer === answer) {
                        modal_question.innerText = 'That\'s Correct!'
                        currentScore = currentScore + value
                        scoreBoard.innerText = currentScore
                    } else {
                        modal_question.innerText = 'That\'s Incorrect. The correct answer is ' + '"' + answer + '".'
                    }
                })
            } else if (e.currentTarget === sports_300) {
                sports_300.innerText = ''
                modal_question.innerText = questionObject.Q3.question
                let answer = questionObject.Q3.answer
                let value = questionObject.Q3.value
                openModal()
                submitBtn.addEventListener('click', () => {
                    let playerAnswer = document.getElementById('player-answer').value
                    if (playerAnswer === answer) {
                        modal_question.innerText = 'That\'s Correct!'
                        currentScore = currentScore + value
                        scoreBoard.innerText = currentScore
                    } else {
                        modal_question.innerText = 'That\'s Incorrect. The correct answer is ' + '"' + answer + '".'
                    }
                })
            } else if (e.currentTarget === sports_400) {
                sports_400.innerText = ''
                modal_question.innerText = questionObject.Q4.question
                let answer = questionObject.Q4.answer
                let value = questionObject.Q4.value
                openModal()
                submitBtn.addEventListener('click', () => {
                    let playerAnswer = document.getElementById('player-answer').value
                    if (playerAnswer === answer) {
                        modal_question.innerText = 'That\'s Correct!'
                        currentScore = currentScore + value
                        scoreBoard.innerText = currentScore
                    } else {
                        modal_question.innerText = 'That\'s Incorrect. The correct answer is ' + '"' + answer + '".'
                    }
                })
            } else if (e.currentTarget === sports_500) {
                sports_500.innerText = ''
                modal_question.innerText = questionObject.Q5.question
                let answer = questionObject.Q5.answer
                let value = questionObject.Q5.value
                openModal()
                submitBtn.addEventListener('click', () => {
                    let playerAnswer = document.getElementById('player-answer').value
                    if (playerAnswer === answer) {
                        modal_question.innerText = 'That\'s Correct!'
                        currentScore = currentScore + value
                        scoreBoard.innerText = currentScore
                    } else {
                        modal_question.innerText = 'That\'s Incorrect. The correct answer is ' + '"' + answer + '".'
                    }
                })
            }
        })
    })
}

startBtn.addEventListener('click', startGame)
restartBtn.addEventListener('click', startGame)