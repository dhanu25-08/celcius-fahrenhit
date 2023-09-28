let celciusEl = document.getElementById("celcius");
let fahrenheitEl = document.getElementById("fahrenheit");
let descrip1El = document.getElementById("descrip1");
let calculateEl = document.getElementById("calculate");
let resetEl = document.getElementById("reset");

//F = °C × (9/5) + 32.


celciusEl.addEventListener("keydown", function(event) {
    let numberEl = 0;
    if (event.key === "Enter") {
        if (event.target.value === "") {
            descrip1El.textContent = "*Required";
            fahrenheitEl.value = "";
            descrip1El.classList.add("description");
        } else {

            descrip1El.textContent = "";
            numberEl = parseInt(event.target.value);
            //console.log(numberEl);
            let fahrenheit = numberEl * (9 / 5) + 32;
            fahrenheitEl.value = (fahrenheit);
        }
    }

});

calculateEl.onclick = function() {
    let numberEl = 0;

    if (celciusEl.value === "") {
        descrip1El.textContent = "*Required";
        fahrenheitEl.value = "";
        descrip1El.classList.add("description");
    } else {
        descrip1El.textContent = "";
        numberEl = parseInt(celciusEl.value);
        //console.log(numberEl);
        let fahrenheit = numberEl * (9 / 5) + 32;
        fahrenheitEl.value = (fahrenheit);
    }

};

resetEl.onclick = function() {
    fahrenheitEl.value = "";
    celciusEl.value = "";
    descrip1El.textContent = "";
}









