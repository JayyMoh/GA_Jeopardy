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
const playerAnswer = document.getElementById('player-answer')


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
    modal.style.display = 'none'
}

const checkAnswer = (e) => {
    if (playerAnswer === e.currentTarget.answer) {
        // increase points properly 
        //close the model
        //make the question box on the board go away
    }
}

closeBtn.addEventListener('click', closeModal)
submitBtn.addEventListener('click', checkAnswer)

let click = 0
const startGame = () => {
    document.querySelectorAll('.question-box').forEach((box) => {
        box.addEventListener('click', (e) => {
            click++
            if (e.currentTarget === sports_100 && click === 1) {
                sports_100.innerText = ''
                modal_question.innerText = questionObject.Q1.question
                openModal()
            }
        })
    })
}


startGame()