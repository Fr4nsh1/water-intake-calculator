function calculate(){

let weight = document.getElementById("weight").value;

if(weight <= 0){
document.getElementById("result").innerHTML = "Enter a valid weight";
return;
}

let water = weight * 0.035;

document.getElementById("result").innerHTML =
"You should drink about " + water.toFixed(2) + " liters of water per day.";

}
