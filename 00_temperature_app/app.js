inputBox = document.getElementById('inputBox');
toFarenheit = document.getElementById('toFarenheit');
toCelsius = document.getElementById('toCelsius');
result = document.getElementById('result');

let temp 
function convert(inputTemperature){
    if(toFarenheit.checked){
        temp = Number(inputBox.value)*9/5 + 32;
        // one point of precision
        result.textContent = temp.toFixed(1) + " F";
    }
    else if(toCelsius.checked){
        temp = (Number(inputBox.value) -32)*5/9;
         // one point of precision
        result.textContent = temp.toFixed(1) + " C";
    }
    
    else{
        result.textContent = 'Please Select a unit.';
    }
}