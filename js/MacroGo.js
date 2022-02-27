function TDEE() {
  var weight = document.getElementById("bodyweight");
  var bodyFat = document.getElementById("estBodyFatPercent");
  
  var surplusCalories;
  
  var protienRequirement;
  var carbRequirement;
  var fatRequirement;
  
  var BMR = weight * 20;
  var TEF = BMR * 0.1;
  var EEE = 250;
  var NEAT = 250;
  var TDEE = BMR + TEF + EEE + NEAT;
  
  var totalDailyCalories = TDEE + sruplusCalories;
  
  if bodyFat < .15 {
    protienRequirement = weight;
  } else {
   protienRequirement = weight * 0.8;
  }
  
  carbRequirement = (totalDailyCalories * 0.4)/4;
  
  fatRequirement = (totalDailyCalories * 0.3)/9;
}
