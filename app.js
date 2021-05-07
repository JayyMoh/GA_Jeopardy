console.log('JS is connected')

// Variables for the Category Boxes
const cat_1 = document.querySelector('.cat-1')
const cat_2 = document.querySelector('.cat-2')
const cat_3 = document.querySelector('.cat-3')
const cat_4 = document.querySelector('.cat-4')
const cat_5 = document.querySelector('.cat-5')

// Variables for Category 1s Question Boxes 
const cat_1_100 = document.querySelector('.cat-1-100')
const cat_1_200 = document.querySelector('.cat-1-200')
const cat_1_300 = document.querySelector('.cat-1-300')
const cat_1_400 = document.querySelector('.cat-1-400')
const cat_1_500 = document.querySelector('.cat-1-500')

// Variables for Category 2s Question Boxes 
const cat_2_100 = document.querySelector('.cat-2-100')
const cat_2_200 = document.querySelector('.cat-2-200')
const cat_2_300 = document.querySelector('.cat-2-300')
const cat_2_400 = document.querySelector('.cat-2-400')
const cat_2_500 = document.querySelector('.cat-2-500')

// Variables for Category 3s Question Boxes 
const cat_3_100 = document.querySelector('.cat-3-100')
const cat_3_200 = document.querySelector('.cat-3-200')
const cat_3_300 = document.querySelector('.cat-3-300')
const cat_3_400 = document.querySelector('.cat-3-400')
const cat_3_500 = document.querySelector('.cat-3-500')

// Variables for Category 4s Question Boxes 
const cat_4_100 = document.querySelector('.cat-4-100')
const cat_4_200 = document.querySelector('.cat-4-200')
const cat_4_300 = document.querySelector('.cat-4-300')
const cat_4_400 = document.querySelector('.cat-4-400')
const cat_4_500 = document.querySelector('.cat-4-500')

// Variables for Category 5s Question Boxes 
const cat_5_100 = document.querySelector('.cat-5-100')
const cat_5_200 = document.querySelector('.cat-5-200')
const cat_5_300 = document.querySelector('.cat-5-300')
const cat_5_400 = document.querySelector('.cat-5-400')
const cat_5_500 = document.querySelector('.cat-5-500')

// Create the Board array
const jeopardyBoard = [
    cat_1, 
    cat_1_100,
    cat_1_200,
    cat_1_300,
    cat_1_400,
    cat_1_500,
    cat_2,
    cat_2_100,
    cat_2_200,
    cat_2_300,
    cat_2_400,
    cat_2_500,
    cat_3,
    cat_3_100,
    cat_3_200,
    cat_3_300,
    cat_3_400,
    cat_3_500,
    cat_4,
    cat_4_100,
    cat_4_200,
    cat_4_300,
    cat_4_400,
    cat_4_500,
    cat_5,
    cat_5_100,
    cat_5_200,
    cat_5_300,
    cat_5_400,
    cat_5_500,
]

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