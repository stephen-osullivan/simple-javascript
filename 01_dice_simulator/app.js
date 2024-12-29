// dice simulator
result = document.getElementById("result")
total = document.getElementById("total")
image_div = document.getElementById("images")
num_dice= document.getElementById("num_dice")

function rollDice() {
    rolls = [];
    image_div.innerHTML=""
    for (i=0; i<num_dice.value; i++) {
        roll = Math.floor(Math.random() * 6) + 1;
        rolls.push(roll);
        image_path = "images/dice_" + roll + ".png";
        alt_text = "a picture of a die showing a " + roll;
        image_div.innerHTML += `<img src=${image_path} alt=${alt_text}>`;
    }
    result.innerHTML = "You rolled a " + rolls.join(", ");
    total.innerHTML = "Sum Total: " + rolls.reduce((accumulator, element) => accumulator + element, 0);
   
}