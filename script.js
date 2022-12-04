let num = ''
let num1 = ''
let num2 = ''

let displayNum = document.querySelector('.displayNumber')
let LastResultNum = document.querySelector('.lastResultNum')
const button1 = document.querySelector('.button1')
const button2 = document.querySelector('.button2')
const button3 = document.querySelector('.button3')
const button4 = document.querySelector('.button4')
const button5 = document.querySelector('.button5')
const button6 = document.querySelector('.button6')
const button7 = document.querySelector('.button7')
const button8 = document.querySelector('.button8')
const button9 = document.querySelector('.button9')
const button0 = document.querySelector('.button0')
const buttonPlus = document.querySelector('.buttonPlus')
const buttonMinus = document.querySelector('.buttonMinus')
const buttonTimes = document.querySelector('.buttonTimes')
const buttonDivide = document.querySelector('.buttonDivide')
const buttonEqual = document.querySelector('.buttonEqual')
const buttonDot = document.querySelector('.buttonDot')

changeLastResultValue()

button1.addEventListener('click', (e) => {
    num = num + 1
    displayNum.textContent = num
})

button2.addEventListener('click', (e) => {
    num = num + 2
    displayNum.textContent = num
})

button3.addEventListener('click', (e) => {
    num = num + 3
    displayNum.textContent = num
})

button4.addEventListener('click', (e) => {
    num = num + 4
    displayNum.textContent = num
})

button5.addEventListener('click', (e) => {
    num = num + 5
    displayNum.textContent = num
})

button6.addEventListener('click', (e) => {
    num = num + 6
    displayNum.textContent = num
})

button7.addEventListener('click', (e) => {
    num = num + 7
    displayNum.textContent = num
})

button8.addEventListener('click', (e) => {
    num = num + 8
    displayNum.textContent = num
})

button9.addEventListener('click', (e) => {
    num = num + 9
    displayNum.textContent = num
})

button0.addEventListener('click', (e) => {
    num = num + 0
    displayNum.textContent = num
})

buttonDot.addEventListener('click', (e) => {
    num = num + '.'
    displayNum.textContent = num
})

buttonPlus.addEventListener('click', (e) => {
    num1 = parseFloat(num)
    num = ''
    displayNum.textContent = num
})

buttonMinus.addEventListener('click', (e) => {
    num1 = parseFloat(num)
    num = ''
    displayNum.textContent = num
})

buttonTimes.addEventListener('click', (e) => {
    num1 = parseFloat(num)
    num = ''
    displayNum.textContent = num
})

buttonDivide.addEventListener('click', (e) => {
    num1 = parseFloat(num)
    num = ''
    displayNum.textContent = num
})

buttonEqual.addEventListener('click', (e) => {
    num2 = parseFloat(num)
    num = num1 + num2
    displayNum.textContent = num
    window.localStorage.setItem("LastResult", num)
    LastResultNum.textContent = window.localStorage.getItem("LastResult")
    num = ''
})

function changeLastResultValue(e){
    LastResultNum.textContent = window.localStorage.getItem("LastResult")
}


