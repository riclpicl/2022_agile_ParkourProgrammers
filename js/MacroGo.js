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