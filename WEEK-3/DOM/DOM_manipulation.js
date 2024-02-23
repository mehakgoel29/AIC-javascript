let newbtn=document.createElement("button");
newbtn.innerText='clickme'
console.log(newbtn);

let d= document.getElementById('box');
d.append(newbtn);
// d.prepend(newbtn);
// d.before(newbtn);
// d.after(newbtn);
console.log(d.innerHTML);

let heading = document.createElement("h1");
heading.innerHTML= "<i>hello people</i>";
document.querySelector("body").prepend(heading);


let para=document.querySelector("p");
para.remove();


