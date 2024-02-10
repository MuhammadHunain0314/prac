const maintitle  = document.getElementById('title')
let curvalue = 0
const btndecrement  = document.getElementById('decrement')
const btnreset  = document.getElementById('reset')
const btnincrement  = document.getElementById('increment')

btnincrement.addEventListener('click', () => {
    curvalue++;
    maintitle.textContent = curvalue 
} )
btndecrement.addEventListener('click', () => {
    curvalue--;
    maintitle.textContent = curvalue 
} )
btnreset.addEventListener('click', () => {
    curvalue = 0;
    maintitle.textContent = curvalue 
} )