function TDEE() {
  var weight = document.getElementById("currentWeight");
  var bodyFat = document.getElementById("estBodyFatPercent");
  
  var surplusCalories;
  
  var proteinRequirement;
  var carbRequirement;
  var fatRequirement;
  
  var BMR = weight * 20;
  var TEF = BMR * 0.1;
  var EEE = 250;
  var NEAT = 250;
  var TDEE = BMR + TEF + EEE + NEAT;
  
  var totalDailyCalories = TDEE + surplusCalories;
  
  if (bodyFat < .15) {
    proteinRequirement = weight;
  } else {
   proteinRequirement = weight * 0.8;
  }
  
  carbRequirement = (totalDailyCalories * 0.4)/4;
  
  fatRequirement = (totalDailyCalories * 0.3)/9;
}

function GoalWeightChange() {
  var weight = document.getElementById("currentWeight");
  var bodyFat = document.getElementById("estBodyFatPercentage");

  if (weight <= 150) {
    recWeightLoss = (weight * .01) - .05; 
  } else if (weight >= 150 ) {
    recWeightLoss = (weight * .01) - 1;
  }
}


function WeightAvg() {
    // take user input and convert to integer
    var num1 = parseInt(document.getElementById("SunWeight").value);
    var num2 = parseInt(document.getElementById("MonWeight").value);
    var num3 = parseInt(document.getElementById("TuesWeight").value);
    var num4 = parseInt(document.getElementById("WedWeight").value);
    var num5 = parseInt(document.getElementById("ThursWeight").value);
    var num6 = parseInt(document.getElementById("FriWeight").value);
    var num7 = parseInt(document.getElementById("SatWeight").value);

    //average weight over 7 days
    var avgWeight = (num1 + num2 + num3 + num4 + num5 + num6 + num7) / 7;

    // display and output average weight
    document.getElementById("AverageWeight").innerText = avgWeight;


}


function CalorieAvg() {
    // take user calorie input and convert to integer
    var num1 = parseInt(document.getElementById("SunCalories").value);
    var num2 = parseInt(document.getElementById("MonCalories").value);
    var num3 = parseInt(document.getElementById("TuesCalories").value);
    var num4 = parseInt(document.getElementById("WedCalories").value);
    var num5 = parseInt(document.getElementById("ThursCalories").value);
    var num6 = parseInt(document.getElementById("FriCalories").value);
    var num7 = parseInt(document.getElementById("SatCalories").value);

    //average calorie intake over 7 days
    var avgWeight = (num1 + num2 + num3 + num4 + num5 + num6 + num7) / 7;

    // output and display average calories
    document.getElementById("AverageCalories").innerText = avgWeight;



}
