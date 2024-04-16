const display = document.getElementById('display');

function appendToDisplay(input){

    display.value += input;
};

function calculat(){
    try {
        display.value = eval(display.value)
    } catch (error) {
        display.value = 'Error😈'
    };
};

function clearDisplay(){
    display.value = "";
};

function clearLastEntry() {
    display.value = display.value.slice(0, -1); // Remove the last character
};