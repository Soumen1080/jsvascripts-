let btn = document.querySelector("button");
let div = document.querySelector("div");
let h2 = document.querySelector("h2");
btn.addEventListener("click", {
    handleEvent: rendomColor,
    
}
) ;

function rendomColor() {
    let red = Math.floor(Math.random() * 256);
    let green = Math.floor(Math.random() * 256);
    let blue = Math.floor(Math.random() * 256);
    div.style.backgroundColor = `rgb(${red}, ${green}, ${blue})`;
      div.style.Color = `rgb(${red}, ${green}, ${blue})`;
      h2.innerText =  `rgb(${red}, ${green}, ${blue})` ;
}