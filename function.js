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


btns[0].addEventListener('click', function(){
    x += 1
    num1.innerHTML = x
})

btns[1].addEventListener('click', function(){
    x += 2
    num1.innerHTML = x
})

btns[2].addEventListener('click', function(){
    x += 3
    num1.innerHTML = x
})

btns[3].addEventListener('click', function(){
    y += 1
    num2.innerHTML = y
})

btns[4].addEventListener('click', function(){
    y += 2
    num2.innerHTML = y
})

btns[5].addEventListener('click', function(){
    y += 3
    num2.innerHTML = y
})








