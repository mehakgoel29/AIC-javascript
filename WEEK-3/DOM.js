// console.log(window);
// console.log(window.document);
// console.dir(window.document);
// console.log(document.body.childNodes[1]);
// document.body.style.backgroundColor='pink'
let heading=document.getElementsByClassName("head");
console.dir(heading);
let para=document.getElementById('para');
console.dir(para);
console.log(document.getElementsByTagName('p'));

//queryselector
let firstel=document.querySelector(".head")
console.log(firstel);
let allel=document.querySelectorAll("p")
console.log(allel);

//properties
console.log(firstel.tagName);
let  div= document.querySelector('.d')
console.log(div.innerText);
console.dir(div.innerHTML);
console.log(document.querySelector('div').children)
