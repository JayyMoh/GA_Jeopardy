console.log('JS is connected')

// // Variables for the Category Boxes
// const cat_1 = document.querySelector('.cat-1')
// const cat_2 = document.querySelector('.cat-2')
// const cat_3 = document.querySelector('.cat-3')
// const cat_4 = document.querySelector('.cat-4')
// const cat_5 = document.querySelector('.cat-5')

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

// Board array
const jeopardyBoard = [
    sports_100,
    sports_200,
    sports_300,
    sports_400,
    sports_500,
    foodDrink_100,
    foodDrink_200,
    foodDrink_300,
    foodDrink_400,
    foodDrink_500,
    theatre_100,
    theatre_200,
    theatre_300,
    theatre_400,
    theatre_500,
    music_100,
    music_200,
    music_300,
    music_400,
    music_500,
    fourLetterWords_100,
    fourLetterWords_200,
    fourLetterWords_300,
    fourLetterWords_400,
    fourLetterWords_500,
]

// Arrays for the categories
const sportsArray = [sports_100, sports_200, sports_300, sports_400, sports_500]
const foodDrinkArray = [foodDrink_100, foodDrink_200, foodDrink_300, foodDrink_400, foodDrink_500]
const theatreArray = [theatre_100, theatre_200, theatre_300, theatre_400, theatre_500]
const musicArray = [music_100, music_200, music_300, music_400, music_500]
const fourLetterWordsArray = [fourLetterWords_100, fourLetterWords_200, fourLetterWords_300, fourLetterWords_400, fourLetterWords_500]

const startGame = () => {
    for (i = 0; i < jeopardyBoard.length; i++) {
        jeopardyBoard[i].addEventListener('click', (e) => {
            if (e.currentTarget === cat_5_500) {
                console.log('You have selected Category 5, for 500 Points')
            } else {
                console.log('That is not cat 5')
            }
        })
    }
     
}

startGame()