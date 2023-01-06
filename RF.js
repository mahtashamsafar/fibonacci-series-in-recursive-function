function fibbonaci(num) {
    if (num < 2) {
        return num;
    } else {
        return fibbonaci(num - 1) + fibbonaci(num - 2);
       
    }

}

const number = parseInt(prompt('how many fibbonaci you want'));
const list=document.querySelector('.list');
const page = document.querySelector('.page');
var text='';
if (number <=0) {
    page.innerHTML = `enter a positive number`;
} else {
    for (let i = 0; i <=number; i++) {
      
    text+=`<li>${(fibbonaci(i))}</li>`;
    }
}

 page.innerHTML=text;
