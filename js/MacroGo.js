function TDEE() {
  var weight = document.getElementById("currentWeight").value;
  var weightKgs= weight * 0.453592;
  var bodyFat = document.getElementById("estBodyFatPercent").value;
  var trainingExperience = document.getElementById("experience").value;
  var trainingGoal = document.getElementById("currentGoal").value;
  var sex = document.getElementById("userSex").value;
  
  var surplusCalories;
  var totalDailyCalories;
  var proteinRequirement;
  var carbRequirement;
  var fatRequirement;
  
  var BMR = weightKgs * 20;
  var TEF = BMR * 0.1;
  var EEE = 150;
  var NEAT = 150;
  var TDEE = Math.round(BMR + TEF + EEE + NEAT);
  
  if (sex == "female") {
    if (trainingExperience == "beginner") {
      if (trainingGoal == "bulk") {
        totalDailyCalories = weight * 17;
      } else if (trainingGoal == "tone") {
        totalDailyCalories = weight * 13;
      } else {
        totalDailyCalories = weight * 11;
      }
    } else if (trainingExperience == "intermediate") {
      if (trainingGoal == "bulk") {
        totalDailyCalories = weight * 19;
      } else if (trainingGoal == "tone") {
        totalDailyCalories = weight * 15;
      } else {
        totalDailyCalories = weight * 13;
      }
    } else {
      if (trainingGoal == "bulk") {
        totalDailyCalories = weight * 21;
      } else if (trainingGoal == "tone") {
        totalDailyCalories = weight * 17;
      } else {
        totalDailyCalories = weight * 15;
      }
    }
  } else if (sex == "male") {
        if (trainingExperience == "beginner") {
      if (trainingGoal == "bulk") {
        totalDailyCalories = weight * 18;
      } else if (trainingGoal == "tone") {
        totalDailyCalories = weight * 14;
      } else {
        totalDailyCalories = weight * 12;
      }
    } else if (trainingExperience == "intermediate") {
      if (trainingGoal == "bulk") {
        totalDailyCalories = weight * 20;
      } else if (trainingGoal == "tone") {
        totalDailyCalories = weight * 16;
      } else {
        totalDailyCalories = weight * 14;
      }
    } else {
      if (trainingGoal == "bulk") {
        totalDailyCalories = weight * 22;
      } else if (trainingGoal == "tone") {
        totalDailyCalories = weight * 18;
      } else {
        totalDailyCalories = weight * 16;
      }
    }

  }
  surplusCalories = totalDailyCalories - TDEE;
  
  if (trainingExperience == "beginner") {
    if (trainingGoal == "bulk") {
      if (bodyFat < 15) {
        proteinRequirement = Math.round(weight * 1.1);
      } else {
       proteinRequirement = Math.round(weight * 0.8);
      }
    } else if (trainingGoal == "tone") {
      if (bodyFat < 15) {
        proteinRequirement = Math.round(weight * 0.9);
      } else {
       proteinRequirement = Math.round(weight * 0.6);
      }
    } else {
      if (bodyFat < 15) {
        proteinRequirement = Math.round(weight * 1.0);
      } else {
       proteinRequirement = Math.round(weight * 0.7);
      }
    }
  } else if ( trainingExperience == "intermediate") {
    if (trainingGoal == "bulk") {
      if (bodyFat < 15) {
        proteinRequirement = Math.round(weight * 1.2);
      } else {
       proteinRequirement = Math.round(weight * 0.9);
      }
    } else if (trainingGoal == "tone") {
      if (bodyFat < 15) {
        proteinRequirement = Math.round(weight * 1.0);
      } else {
       proteinRequirement = Math.round(weight * 0.7);
      }
    } else {
      if (bodyFat < 15) {
        proteinRequirement = Math.round(weight * 1.1);
      } else {
       proteinRequirement = Math.round(weight * 0.8);
      }
    }
  } else {
        if (trainingGoal == "bulk") {
      if (bodyFat < 15) {
        proteinRequirement = Math.round(weight * 1.3);
      } else {
       proteinRequirement = Math.round(weight * 1.0);
      }
    } else if (trainingGoal == "tone") {
      if (bodyFat < 15) {
        proteinRequirement = Math.round(weight * 1.1);
      } else {
       proteinRequirement = Math.round(weight * 0.8);
      }
    } else {
      if (bodyFat < 15) {
        proteinRequirement = Math.round(weight * 1.2);
      } else {
       proteinRequirement = Math.round(weight * 0.9);
      }
    }
  }
  
  carbRequirement = Math.round((totalDailyCalories * 0.4)/4);
  
  fatRequirement = Math.round((totalDailyCalories * 0.3)/9);
  
  //Empty the paragraph tags each time button is pressed
  
  document.getElementById("currentTDEE").removeChild(document.getElementById("currentTDEE").lastChild);
  document.getElementById("dailySurplus").removeChild(document.getElementById("dailySurplus").lastChild);
  document.getElementById("totalCalories").removeChild(document.getElementById("totalCalories").lastChild);
  document.getElementById("protienMacro").removeChild(document.getElementById("protienMacro").lastChild);
  document.getElementById("fatMacro").removeChild(document.getElementById("fatMacro").lastChild);
  document.getElementById("carbMacro").removeChild(document.getElementById("carbMacro").lastChild);
  
  //Polulate with current information
  document.getElementById("currentTDEE").innerHTML += ("Your Current TDEE is: " + TDEE + " calories");
  document.getElementById("dailySurplus").innerHTML += ("Your Target Daily Surplus: " + surplusCalories + " calories");
  document.getElementById("totalCalories").innerHTML += ("Target Daily Calorie Intake: " + totalDailyCalories + " calories");
  document.getElementById("protienMacro").innerHTML += ("Protein: " + proteinRequirement + " grams");
  document.getElementById("fatMacro").innerHTML += ("Fat: " + fatRequirement + " grams");
  document.getElementById("carbMacro").innerHTML += ("Carbs: " + carbRequirement + " grams");
  
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
