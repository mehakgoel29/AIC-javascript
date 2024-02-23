let btn = document.createElement("button");
btn.innerText="click Me";
document.querySelector("body").prepend(btn);
btn.style.color="white";
btn.style.backgroundColor='purple';

let para = document.querySelector("p");
para.classList.add("newclass");     // class list is used to add new class to the existing class.....it do not overwrite the old class completely
