 const body =document.getElementById("body");
 const myButton = document.getElementById("myButton");
 const myLabel = document.getElementById("myLabel");
 const resetBtn = document.getElementById("resetBtn");
 const min = 1;
 const max = 6;
 let random;
 let colors;

myButton.onclick = function(){
    random= Math.floor(Math.random()*max)+min;
    myLabel.textContent = random;
};

function resetbtn(){
    myLabel.textContent = 0;
}
 function changeBackground() {
     
 
 function bodyC(){
    
    const  red = Math.floor(Math.random()*255);
    const  green = Math.floor(Math.random()*255);
    const  blue = Math.floor(Math.random()*255);
    const  colors =`rgb(${red}, ${green} ,${blue})` ;
    body.style.backgroundColor = colors;
}
     
     bodyC();
 }

