var digit = document.getElementsByClassName("digit") // to get all the divs having class name digit
console.log(digit[0].id)
for (i = 0; i < digit.length; i++){  // go through all the list items 
    digit[i].addEventListener("click" , (e)=>{ // adding on click functionality
        let display = document.getElementById('display');
        let number = document.createElement('p'); 
        number.innerHTML = e.currentTarget.getAttribute ("value"); // adding the value of the target element i.e the element which is clicked to the div with class name display 
        display.appendChild(number);
   })
}

var back = document.getElementById("back").addEventListener("click" , ()=>{
    let display = document.getElementById('display');
    display.removeChild(display.lastChild); // to remove the last element present i.e last p tag present in the display  
})