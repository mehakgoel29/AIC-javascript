// let h2 = document.querySelector('h2');
// console.dir(h2);
// h2.innerText= h2.innerText+' from developers';


 let box=document.querySelectorAll('.box');
// console.dir(box);
// box[0].innerText='new value';
// box[1].innerText='second new value';
// box[2].innerText='third new value';

let index=1;
for(div of box){
    div.innerText=`new unique value ${index}`;
    index++;
}


