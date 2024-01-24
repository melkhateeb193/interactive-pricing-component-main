addEventListener('DOMContentLoaded',()=>{
let inputSlider = document.getElementById('rangeInput')
let billPSpanN = document.getElementsByClassName('billPSpanN') [0];

inputSlider.addEventListener('input' ,()=>{
    let inputSliderValue = inputSlider.value;
     billPSpanN.innerHTML = inputSliderValue;
     inputSlider.style.background = `linear-gradient(to right, hsl(174, 77%, 80%) 0%, hsl(174, 77%, 80%) ${inputSliderValue}%, hsl(224, 65%, 95%) ${inputSliderValue}%, hsl(224, 65%, 95%) 100%)`;

})




})