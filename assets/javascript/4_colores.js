function changeBgColor(element)
{
element.style.backgroundColor = 'black';
}

const ele1 = document.querySelector('#div-azul');
const ele2 = document.querySelector('#div-rojo');
const ele3 = document.querySelector('#div-verde');
const ele4 = document.querySelector('#div-amarillo');

ele1.addEventListener('click',()=>changeBgColor(ele1));
ele2.addEventListener('click',()=>changeBgColor(ele2));
ele3.addEventListener('click',()=>changeBgColor(ele3));
ele4.addEventListener('click',()=>changeBgColor(ele4));