let button1 = document.querySelector("#btn1");

button1.onclick = (e) => {
    console.log(e);    // e given information about event ...its an event obj
    console.log(e.type);
    console.log(e.target);
    console.log(e.clientX,e.clientY)
    console.log("button was clicked");
};


let button2 = document.querySelector("#btn2");
button2.ondblclick = (e) => {
    console.log(e);
    console.log("button was clicked");
};

let box = document.querySelector("#div");
div.onmouseover = (e) => {
    console.log(e);
    console.log(e.type);
    console.log(e.target);
    console.log(e.clientX,e.clientY)
    console.log("you are inside div");
};


