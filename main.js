// let colorInput = document.querySelector(".color");
// let div = document.querySelector(".div");

// colorInput.addEventListener("change",(e) =>{
//     div.style.backgroundColor = e.target.value ;
// })

const {matches : darkTheme} = window.matchMedia(
    '(prefers-color-scheme:dark)'
);

if (darkTheme){
    document.querySelector(".childDiv").classList.add('blue');
}