function TDEE() {
  var weight = document.getElementById("currentWeight").value;
  var lbs_kgs = document.getElementById("Lbs_Kgs");
  var bodyFat = document.getElementById("estBodyFatPercent").value;
  var trainingExperience = document.getElementById("experience").value;
  var trainingGoal = document.getElementById("currentGoal").value;
  var sex = document.getElementById("userSex").value;

  var surplusCalories;
  var totalDailyCalories;
  var proteinRequirement;
  var carbRequirement;
  var fatRequirement;
  
  
  if (lbs_kgs.checked) {
    console.log("checked");
    weight = weight / 0.453592;
  }

  var BMR = (weight * 0.453592) * 20;
  var TEF = BMR * 0.1;
  var EEE = 150;
  var NEAT = 150;
  var TDEE = Math.round(BMR + TEF + EEE + NEAT);

// total daily calories section
  if (sex === "female") {
    if (trainingExperience === "beginner") {
      if (trainingGoal === "bulk") {
        totalDailyCalories = weight * 17;
      } else if (trainingGoal === "tone") {
        totalDailyCalories = weight * 13;
      } else {
        totalDailyCalories = weight * 11;
      }
    } else if (trainingExperience === "intermediate") {
      if (trainingGoal === "bulk") {
        totalDailyCalories = weight * 19;
      } else if (trainingGoal === "tone") {
        totalDailyCalories = weight * 15;
      } else {
        totalDailyCalories = weight * 13;
      }
    } else {
      if (trainingGoal === "bulk") {
        totalDailyCalories = weight * 21;
      } else if (trainingGoal === "tone") {
        totalDailyCalories = weight * 17;
      } else {
        totalDailyCalories = weight * 15;
      }
    }
  } else if (sex === "male") {
    if (trainingExperience === "beginner") {
      if (trainingGoal === "bulk") {
        totalDailyCalories = weight * 18;
      } else if (trainingGoal === "tone") {
        totalDailyCalories = weight * 14;
      } else {
        totalDailyCalories = weight * 12;
      }
    } else if (trainingExperience === "intermediate") {
      if (trainingGoal === "bulk") {
        totalDailyCalories = weight * 20;
      } else if (trainingGoal === "tone") {
        totalDailyCalories = weight * 16;
      } else {
        totalDailyCalories = weight * 14;
      }
    } else {
      if (trainingGoal === "bulk") {
        totalDailyCalories = weight * 22;
      } else if (trainingGoal === "tone") {
        totalDailyCalories = weight * 18;
      } else {
        totalDailyCalories = weight * 16;
      }
    }

  }
  surplusCalories = Math.round(totalDailyCalories - TDEE);

//Macro Requirement section. Protien requirements are based on exercise experience, training goal, as well as body fat percentage
  if (trainingExperience === "beginner") {
    if (trainingGoal === "bulk") {
      if (bodyFat < 15) {
        proteinRequirement = Math.round(weight * 1.1);
      } else {
        proteinRequirement = Math.round(weight * 0.8);
      }
    } else if (trainingGoal === "tone") {
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
  } else if (trainingExperience === "intermediate") {
    if (trainingGoal === "bulk") {
      if (bodyFat < 15) {
        proteinRequirement = Math.round(weight * 1.2);
      } else {
        proteinRequirement = Math.round(weight * 0.9);
      }
    } else if (trainingGoal === "tone") {
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
    if (trainingGoal === "bulk") {
      if (bodyFat < 15) {
        proteinRequirement = Math.round(weight * 1.3);
      } else {
        proteinRequirement = Math.round(weight * 1.0);
      }
    } else if (trainingGoal === "tone") {
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
  
   // Fat and Carb Requirements based on how many calories of protein are consumed
  var fatAndCarbCalories = totalDailyCalories - (proteinRequirement * 4);
  var proteinCalories = totalDailyCalories - fatAndCarbCalories;
  var proteinPercentage = proteinCalories/totalDailyCalories;
  var fatAndCarbPercentage = 100 - proteinPercentage;
  var fatAndCarbPercentage = 1 - proteinPercentage;

  carbRequirement = Math.round((fatAndCarbCalories * (fatAndCarbPercentage * 0.6)) / 4);
  
 fatRequirement = Math.round((fatAndCarbCalories * (fatAndCarbPercentage * 0.4)) / 9);

  //Polulate with current information
  document.getElementById("currentTDEE").innerText = (TDEE + " calories");
  document.getElementById("dailySurplus").innerText = (surplusCalories + " calories");
  document.getElementById("totalCalories").innerText = (Math.round(totalDailyCalories) + " calories");
  document.getElementById("proteinMacro").innerText = (proteinRequirement + " grams");
  document.getElementById("fatMacro").innerText = (fatRequirement + " grams");
  document.getElementById("carbMacro").innerText = (carbRequirement + " grams");

}

function trainingPhaseRec() {
  var bodyFat = document.getElementById("estBodyFatPercent").value;
  var sex = document.getElementById("userSex").value;

  var Tone = "Toning Phase";
  var Bulk = "Bulking Phase";
  var WeightLoss = "Weightloss Phase";


  if (bodyFat >= 22 && sex === "female" || bodyFat >= 18 && sex === "male") {
    document.getElementById("recPhase").innerText = WeightLoss;
  } else if (bodyFat <= 16 && sex === "female" || bodyFat <= 6 && sex === "male") {
    document.getElementById("recPhase").innerText = Bulk;
  } else {
    document.getElementById("recPhase").innerText = Tone;
  }

}

function GoalWeightChange() {
  var weight = document.getElementById("currentWeight").value;
  var bodyFat = document.getElementById("estBodyFatPercent").value;
  var trainingExperience = document.getElementById("experience").value;
  var trainingGoal = document.getElementById("currentGoal").value;
  var sex = document.getElementById("userSex").value;
  var recommendedWeightChangeText = document.getElementById("recWeightChangeWeekly");

  var weightGain;
  var weightLoss;
  var maintain;


  if (sex === "female") {
    if (trainingGoal === "bulk") {
      if (trainingExperience === "beginner") {
        //TODO: Proper if/else logic
        if (bodyFat < 30) {
          weightGain = Math.round(weight * 0.01) / 4;
          }
        } else if (trainingExperience === "intermediate") {
          weightGain = Math.round(weight * 0.015) / 4;
        } else if (trainingExperience === "expert") {
          weightGain = Math.round(weight * 0.025) / 4;
        }
    } else if (trainingGoal === "weightloss") {
      if (bodyFat > 40) {
        weightLoss = Math.round(weight * 0.01) / 4;
      } else if (bodyFat <= 40 || bodyFat >= 35) {
        weightLoss = Math.round(weight * 0.075) / 4;
      } else if (bodyFat < 30 || bodyFat <= 34) {
      weightLoss = Math.round(weight * 0.05) / 4;
      }    
    } else if (trainingGoal === "tone") {
          maintain = 0;
    }
  } else if (sex === "male") {  
    if (trainingGoal === "bulk") {    
      if (trainingExperience === "beginner") {        
        if (bodyFat < 20) {
          weightGain = Math.round(weight * 0.01) / 4;
          } else {
              //TODO: Proper if/else logic
              weightGain = "Uh oh, broke";
            }
        } else if (trainingExperience === "intermediate") {
          weightGain = Math.round(weight * 0.05) / 4;
        } else if (trainingExperience === "expert") {
          weightGain = Math.round(weight * 0.025) / 4;
        }
    } else if (trainingGoal === "weightloss") {
      if (bodyFat > 30) {
        weightLoss = Math.round(weight * 0.01) / 4;
      } else if (bodyFat <= 30 || bodyFat >= 25) {
        weightLoss = Math.round(weight * 0.075) / 4;
      } else if (bodyFat < 20 || bodyFat <= 24) {
        weightLoss = Math.round(weight * 0.05) / 4;
      }
    } else if (trainingGoal === "tone") {
        maintain = 0;
    }
  }
  if (trainingGoal === "bulk") {
    recommendedWeightChangeText.innerHTML = ("+ " + weightGain);
  } else if (trainingGoal === "weightloss"){
    recommendedWeightChangeText.innerHTML = ("- " + weightLoss);
  } else if (trainingGoal === "tone"){
    recommendedWeightChangeText.innerHTML = (maintain + " maintain current weight by following calculated TDEE.");
  }
}

function WeightAvg() {
  // take user input and convert to integer
  var num1 = Number(document.getElementById("SunWeight").value);
  var num2 = Number(document.getElementById("MonWeight").value);
  var num3 = Number(document.getElementById("TuesWeight").value);
  var num4 = Number(document.getElementById("WedWeight").value);
  var num5 = Number(document.getElementById("ThursWeight").value);
  var num6 = Number(document.getElementById("FriWeight").value);
  var num7 = Number(document.getElementById("SatWeight").value);

  //average weight over 7 days
  var avgWeight = (num1 + num2 + num3 + num4 + num5 + num6 + num7) / 7;

  // display and output average weight
  document.getElementById("AverageWeight").innerText = Math.round(avgWeight);
}


function CalorieAvg() {
  // take user calorie input and convert to integer
  var num1 = Number(document.getElementById("SunCalories").value);
  var num2 = Number(document.getElementById("MonCalories").value);
  var num3 = Number(document.getElementById("TuesCalories").value);
  var num4 = Number(document.getElementById("WedCalories").value);
  var num5 = Number(document.getElementById("ThursCalories").value);
  var num6 = Number(document.getElementById("FriCalories").value);
  var num7 = Number(document.getElementById("SatCalories").value);

  //average calorie intake over 7 days
  var avgWeight = (num1 + num2 + num3 + num4 + num5 + num6 + num7) / 7;

  // output and display average calories
  document.getElementById("AverageCalories").innerText = Math.round(avgWeight);
}
