btn1.addEventListener("click", () =>{
    console.log("button 1");
});
btn1.addEventListener("click", (e) =>{
    console.log("button 2");
});

let button3 = (e) =>{
    console.log("button 3")
};
btn1.addEventListener("click", button3);
btn1.addEventListener("click", (e) =>{
    console.log("button 4");
});

// wrong method because it occupy space as 2 diff function
btn1.removeEventListener("click", button3);
