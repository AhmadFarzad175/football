let num1 = document.querySelector('#num1')
let num2 = document.querySelector('#num2')
let finish = document.querySelector('.Finish')
let reset = document.querySelector('.reset')
let result = document.querySelector('.result')
let btns = document.getElementsByClassName('btn-item');
let x = 0;
let y = 0;

reset.addEventListener('click', Reset_finish)
reset.addEventListener('click', Display)


// RESET AND FINISH FUNCTION
function Reset_finish() {
    x = 0;
    y = 0;
    num1.innerHTML = x;
    num2.innerHTML = y;
}

// DISPLAY NONE FUNCTION
function Display() {
    result.style = 'display: none'
}


// FINISH FUNCTION
finish.addEventListener('click', function () {
    if (x > y ) {
        result.innerHTML = `Congretulation! Home wins the game by ${x-y} points`
    }
    else if(x === y) {
        result.innerHTML = 'You are tie.'
 
    }
    else{
        result.innerHTML = `Congretulation! Away wins the game by ${y-x} points`

    }

    result.style = 'display:block'
    Reset_finish()  
})


// ADD FUNCTION
function AddLeft(number) {
    x += number;
    num1.innerHTML = x;
}

function AddRight(number) {
    y += number;
    num2.innerHTML = y;
}


btns[0].addEventListener('click', AddLeft.bind(null, 1))
btns[1].addEventListener('click', AddLeft.bind(null, 2))
btns[2].addEventListener('click', AddLeft.bind(null, 3))
btns[3].addEventListener('click', AddRight.bind(null, 1))
btns[4].addEventListener('click', AddRight.bind(null, 2))
btns[5].addEventListener('click', AddRight.bind(null, 3))