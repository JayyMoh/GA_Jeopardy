
// Varibales for the Modal
const modal_question = document.getElementById('question-text')
const modal_answer = document.getElementById('answer-text') 
const modal = document.getElementById('modal')
const closeBtn = document.getElementById('close')
const submitBtn = document.getElementById('submit-button')
const scoreBoard = document.getElementById('scoreboard-text')
const scoreToBeat = document.getElementById('score-to-beat-text')
const startBtn = document.getElementById('start-button')
const gameRules = document.getElementById('game-rules')
const answerForm = document.getElementById('answer-form')


const questionObject = {
        sports1: {   
                category: 'sports',
                value: 100, 
                question: 'What company\'s logo is a swoosh?', 
                answer: 'Nike',
        },    
        sports2: {
                category: 'sports',
                value: 200, 
                question: 'What do you call it when a bowler makes three strikes in a row?', 
                answer: 'Turkey',
        },
        sports3: {
                category: 'sports',
                value: 300, 
                question: 'The Olympics are held every how many years?', 
                answer: 'Four',
        },
        sports4: {
                category: 'sports',
                value: 400, 
                question: 'What is the national sport of Canada?', 
                answer: 'Lacrosse',
        },
        sports5: {
                category: 'sports',
                value: 500, 
                question: 'Who has won more tennis grand slam titles, Venus Williams or Serena Williams?',
                answer: 'Serena Williams'
        },
        fnD1: {
                category: 'Food & Drink',
                value: 100,
                question: 'What is the national spirit of America?',
                answer: 'Bourbon',
        },
        fnD2: {
                category: 'Food & Drink',
                value: 200,
                question: 'What is the most iconic food item in Chicago city?',
                answer: 'Deep-dish Pizza',
        },
        fnD3: {
                category: 'Food & Drink',
                value: 300,
                question: 'Name the main ingredient of mince-pie.',
                answer: 'Dried Fruit',
        },
        fnD4: {
                category: 'Food & Drink',
                value: 400,
                question: 'What is the national dish of Germany?',
                answer: 'Pot Roast',
        },
        fnD5: {
                category: 'Food & Drink',
                value: 500,
                question: 'Name the national drink of Scotland other than whiskey.',
                answer: 'Irn-Bru',
        },
        theatre1: {
                category: 'Theatre',
                value: 100,
                question: 'The majority of Broadway shows are what?',
                answer: 'Musicals',
        },
        theatre2: {
                category: 'Theatre',
                value: 200,
                question: 'Which Oscar-winning musical is getting a 2020 remake courtesy of Steven Spielberg?',
                answer: 'West Side Story',
        },
        theatre3: {
                category: 'Theatre',
                value: 300,
                question: 'In Shakespeare’s King Lear, which of his three daughters really does love him and is true to him?',
                answer: 'Cordelia',
        },
        theatre4: {
                category: 'Theatre',
                value: 400,
                question: 'The Bowery Theatre opened in what year?',
                answer: '1826',
        },
        theatre5: {
                category: 'Theatre',
                value: 500,
                question: 'Beginning with The Red Mill, Broadway shows installed what outside the theatres?',
                answer: 'Electric Signs',
        },
        music1: {
                category: 'Music',
                value: 100,
                question: 'What was Elvis Presley\'s first hit in 1956?',
                answer: 'Heartbreak Hotel',
        },
        music2: {
                category: 'Music',
                value: 200,
                question: 'Which famous music group was formerly known as the New Yardbirds?',
                answer: 'Led Zeppelin',
        },
        music3: {
                category: 'Music',
                value: 300,
                question: 'Which singer is a godmother to Elton John\'s two sons?',
                answer: 'Lady Gaga',
        },
        music4: {
                category: 'Music',
                value: 400,
                question: 'The Rock and Roll Hall of Fame is situated in what US State?',
                answer: 'Ohio',
        },
        music5: {
                category: 'Music',
                value: 500,
                question: 'Which pop singer\'s real name is Robyn Fenty?',
                answer: 'Rihanna',
        },
        flw1: {
                category: 'Four Letter Words',
                value: 100,
                question: 'The triangular frame used to line up the billiard balls at the start of the game.',
                answer: 'Rack',
        },
        flw2: {
                category: 'Four Letter Words',
                value: 200,
                question: 'This word commonly follows cuff or missing. ',
                answer: 'Link',
        },
        flw3: {
                category: 'Four Letter Words',
                value: 300,
                question: 'From the Greek word for "deep sleep", it\'s a deep, prolonged unconsciousness.',
                answer: 'Coma',
        },
        flw4: {
                category: 'Four Letter Words',
                value: 400,
                question: 'The dry particles of matter found on your furniture or what you do to remove them.',
                answer: 'Dust',
        },
        flw5: {
                category: 'Four Letter Words',
                value: 500,
                question: 'The first name isn\'t on the "Keystone" of the house, but that of the Sennett.',
                answer: 'Mack',
        },
}


// Modal that pops up almost immediately that tells the player the rules
const rulesModal = () => {
        modal.style.display = 'block'
        answerForm.style.display = 'none'
        modal_question.style.fontSize = '23px'
        modal_question.innerText = 'Welcome to Jeopardy! Once you close out of these rules you can start the game at anytime by clicking the start game button. Once the game is started your score will begin to track in the window next to the score to beat. You may choose any question from the board worth any value by clicking on the value boxes under the category. You will then be prompted with the question as well as an answer box below the question. Type your answer (the answers are case sensitive) in the answer box and then click submit. Try to answer enough questions of value to pass the score to beat.'
}

setTimeout(rulesModal, 1000)

const openModal = (e) => {
        answerForm.style.display = 'block'
        modal_question.style.fontSize = '2em'
        modal.style.display = 'block'
        e.currentTarget.innerText = ''
        getQuestion(e)
        checkAnswer(e)
}

const closeModal = () => {
        document.getElementById('player-answer').value = ''
        modal.style.display = 'none'
        checkWin()
}

const getQuestion = (e) => {
        let question = questionObject[e.currentTarget.id].question
        modal_question.innerText = question
}

// checks if the player has won
const checkWin = () => {
        if (currentScore > winningScore) {
                playerWon()
        } else if (questionsRemaining === 0 && currentScore < winningScore) {
                playerLost()
        }
}

const playerWon = () => {
        alert('Congratulations, you won!')
        restartGame()
}  

const playerLost = () => {
        alert('It look\'s like you didn\'t get enough questions correct to win. Better luck next time!' )
}

let currentScore = 0
let winningScore = 4000
let questionsRemaining = 25
const checkAnswer = (e) => {
        questionsRemaining--
        let answer = questionObject[e.currentTarget.id].answer
        let value = questionObject[e.currentTarget.id].value
        submitBtn.addEventListener('click', () => {
                let playerAnswer = document.getElementById('player-answer').value
                if (playerAnswer === answer) {
                        modal_question.innerText = 'That\'s Correct!'
                        currentScore = currentScore + value
                        scoreBoard.innerText = 'Your Score: ' + currentScore
                } else {
                        modal_question.innerText = 'That\'s Incorrect. The correct answer is ' + '"' + answer + '".'
                }
        }) 
}

// This function makes the scoreboard live and creates the event listeners for the boxes
const startGame = () => {
        scoreBoard.innerText = 'Your Score: ' + currentScore
        scoreToBeat.innerText = 'Score to Beat: ' + winningScore
        document.querySelectorAll('.question-box').forEach((e) => {             
                e.addEventListener('click', openModal, {once: true})
        })
}

// future development to restart the game and reset the board
const restartGame = () => {
        // reset the gameboxes to original view
        scoreBoard.innerText = ''
        currentScore = 0
        questionsRemaining = 25
        document.getElementById('sports1').innerText = '100'
        document.getElementById('fnD1').innerText = '100'
        document.getElementById('theatre1').innerText = '100'
        document.getElementById('music1').innerText = '100'
        document.getElementById('flw1').innerText = '100'
        document.getElementById('sports2').innerText = '200'
        document.getElementById('fnD2').innerText = '200'
        document.getElementById('theatre2').innerText = '200'
        document.getElementById('music2').innerText = '200'
        document.getElementById('flw2').innerText = '200'
        document.getElementById('sports3').innerText = '300'
        document.getElementById('fnD3').innerText = '300'
        document.getElementById('theatre3').innerText = '300'
        document.getElementById('music3').innerText = '300'
        document.getElementById('flw3').innerText = '300'
        document.getElementById('sports4').innerText = '400'
        document.getElementById('fnD4').innerText = '400'
        document.getElementById('theatre4').innerText = '400'
        document.getElementById('music4').innerText = '400'
        document.getElementById('flw4').innerText = '400'
        document.getElementById('sports5').innerText = '500'
        document.getElementById('fnD5').innerText = '500'
        document.getElementById('theatre5').innerText = '500'
        document.getElementById('music5').innerText = '500'
        document.getElementById('flw5').innerText = '500'
}


closeBtn.addEventListener('click', closeModal)
startBtn.addEventListener('click', startGame)
gameRules.addEventListener('click', rulesModal)