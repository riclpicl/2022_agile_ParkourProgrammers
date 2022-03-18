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
  
  
  if (!lbs_kgs.checked) {
    // if it is not checked it weight should be converted to pounds
    weight = weight / 0.453592;
    document.getElementById("weightLabel").innerHTML = "Current Weight: Kgs"
  } else {
    document.getElementById("weightLabel").innerHTML = "Current Weight: Lbs"
  }

  var BMR = (weight * 0.453592) * 20;
  var TEF = BMR * 0.1;
  var EEE = 150;
  var NEAT = 150;
  var TDEE = Math.round(BMR + TEF + EEE + NEAT);

// total daily calories section
  
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
  
  if (sex === "male") {
    totalDailyCalories = totalDailyCalories * 1.1;
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
  
  var fatAndCarbPercentage = 1 - proteinPercentage;
  

  carbRequirement = Math.round((fatAndCarbCalories * (fatAndCarbPercentage * 0.6)) / 4);
  
  fatRequirement = Math.round((fatAndCarbCalories * (fatAndCarbPercentage * 0.4)) / 9);

  //Polulate with current information
  if (TDEE > 799) {
    document.getElementById("currentTDEE").innerText = (TDEE + " calories");
    document.getElementById("dailySurplus").innerText = (surplusCalories + " calories");
    document.getElementById("totalCalories").innerText = (Math.round(totalDailyCalories) + " calories");
    document.getElementById("proteinMacro").innerText = (proteinRequirement + " grams");
    document.getElementById("fatMacro").innerText = ( fatRequirement + " grams");
    document.getElementById("carbMacro").innerText = (carbRequirement + " grams");
  }
}

function customWeightChange() {
  var customWeightChange = document.getElementById("customWeightChangeWeekly").value;

  var Tone = "You should be in the toning phase";
  var Bulk = "You should be in the bulking Phase";
  var WeightLoss = "You should be in the weightloss Phase";
  var calorieDeficit = "Not in a healthy weightloss range, please try again.";
  var calorieSurplus = "Not in a healthy bulking range, please try again.";

  if (customWeightChange >= 5) {
    document.getElementById("customPhase").innerText = calorieSurplus;
    } else if (customWeightChange <= -3.5) {
        document.getElementById("customPhase").innerText = calorieDeficit;
    } else if (customWeightChange >= 1 && customWeightChange <= 4.99) {
        document.getElementById("customPhase").innerText = Bulk;
      } else if (customWeightChange <= -0.99 && customWeightChange >= -3.49 ) {
        document.getElementById("customPhase").innerText = WeightLoss;
      } else {
        document.getElementById("customPhase").innerText = Tone;
      }
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
  
  var weightArray = [];
  var weightArrayFiltered = [];
  var totalWeight = 0;
  
  // take user input and convert to integer while adding to an array
  weightArray.push(Number(document.getElementById("SunWeight").value), Number(document.getElementById("MonWeight").value),Number(document.getElementById("TuesWeight").value), Number(document.getElementById("WedWeight").value), Number(document.getElementById("ThursWeight").value), Number(document.getElementById("FriWeight").value), Number(document.getElementById("SatWeight").value));
  
  // loop through that array and store anything over 0 to an array
  for (var value of weightArray) {
    if (value >= 1) {
      weightArrayFiltered.push(value);
    }
  }
  
  // use that new array to add the values to total weight of the week
  for (var value of weightArrayFiltered) {
    totalWeight += value;
  }
  
  var avgWeight = totalWeight / weightArrayFiltered.length;
  
  // display and output average Weight
  document.getElementById("AverageWeight").innerText = Math.round(avgWeight);
}


function CalorieAvg() {
  
  var caloriesArray = [];
  var caloriesArrayFiltered = [];
  var totalCalories = 0;
  
  // take user input and convert to integer while adding to an array
  caloriesArray.push(Number(document.getElementById("SunCalories").value), Number(document.getElementById("MonCalories").value),Number(document.getElementById("TuesCalories").value), Number(document.getElementById("WedCalories").value), Number(document.getElementById("ThursCalories").value), Number(document.getElementById("FriCalories").value), Number(document.getElementById("SatCalories").value));
  
  // loop through that array and store anything over 0 to an array
  for (var value of caloriesArray) {
    if (value >= 1) {
      caloriesArrayFiltered.push(value);
    }
  }
  
  // use that new array to add the values to total calories of the week
  for (var value of caloriesArrayFiltered) {
    totalCalories += value;
  }
  
  var avgCalories = totalCalories / caloriesArrayFiltered.length;
  
  // display and output average Calories
  document.getElementById("AverageCalories").innerText = Math.round(avgCalories);
}

function ProteinAvg() {
  
  var proteinArray = [];
  var proteinArrayFiltered = [];
  var totalProtein = 0;
  
  // take user input and convert to integer while adding to an array
  proteinArray.push(Number(document.getElementById("SunProtein").value), Number(document.getElementById("MonProtein").value),Number(document.getElementById("TuesProtein").value), Number(document.getElementById("WedProtein").value), Number(document.getElementById("ThursProtein").value), Number(document.getElementById("FriProtein").value), Number(document.getElementById("SatProtein").value));
  
  // loop through that array and store anything over 0 to an array
  for (var value of proteinArray) {
    if (value >= 1) {
      proteinArrayFiltered.push(value);
    }
  }
  
  // use that new array to add the values to total Protein of the week
  for (var value of proteinArrayFiltered) {
    totalProtein += value;
  }
  
  var avgProtein = totalProtein / proteinArrayFiltered.length;
  
  // display and output average Protein
  document.getElementById("AverageProtein").innerText = Math.round(avgProtein);
}

function CarbsAvg() {
  
  var carbsArray = [];
  var carbsArrayFiltered = [];
  var totalCarbs = 0;
  
  // take user input and convert to integer while adding to an array
  carbsArray.push(Number(document.getElementById("SunCarbs").value), Number(document.getElementById("MonCarbs").value),Number(document.getElementById("TuesCarbs").value), Number(document.getElementById("WedCarbs").value), Number(document.getElementById("ThursCarbs").value), Number(document.getElementById("FriCarbs").value), Number(document.getElementById("SatCarbs").value));
  
  // loop through that array and store anything over 0 to an array
  for (var value of carbsArray) {
    if (value >= 1) {
      carbsArrayFiltered.push(value);
    }
  }
  
  // use that new array to add the values to total Carbs of the week
  for (var value of carbsArrayFiltered) {
    totalCarbs += value;
  }
  
  var avgCarbs = totalCarbs / carbsArrayFiltered.length;
  
  // display and output average Carbs
  document.getElementById("AverageCarbs").innerText = Math.round(avgCarbs);
}

function FatAvg() {
  
  var fatArray = [];
  var fatArrayFiltered = [];
  var totalFat = 0;
  
  // take user input and convert to integer while adding to an array
  fatArray.push(Number(document.getElementById("SunFat").value), Number(document.getElementById("MonFat").value),Number(document.getElementById("TuesFat").value), Number(document.getElementById("WedFat").value), Number(document.getElementById("ThursFat").value), Number(document.getElementById("FriFat").value), Number(document.getElementById("SatFat").value));
  
  // loop through that array and store anything over 0 to an array
  for (var value of fatArray) {
    if (value >= 1) {
      fatArrayFiltered.push(value);
    }
  }
  
  // use that new array to add the values to total fat of the week
  for (var value of fatArrayFiltered) {
    totalFat += value;
  }
  
  var avgFat = totalFat / fatArrayFiltered.length;
  
  // display and output average Fat
  document.getElementById("AverageFat").innerText = Math.round(avgFat);
}


function validateForm()                                    
{ 
    var name = document.getElementById("name");               
    var email = document.getElementById("email");    
    var message = document.getElementById("message");   
   
    if (name.value == "")                                  
    { 
        document.getElementById('errorname').innerText="Please enter a valid name";  
        name.focus(); 
        return false; 
    }else{
        document.getElementById('errorname').innerText="";  
    }
       
    if (email.value == "")                                   
    { 
        document.getElementById('erroremail').innerText="Please enter a valid email address"; 
        email.focus(); 
        return false; 
    }else{
        document.getElementById('erroremail').innerText="";  
    }
   
    if (email.value.indexOf("@", 0) < 0)                 
    { 
        document.getElementById('erroremail').innerText="Please enter a valid email address"; 
        email.focus(); 
        return false; 
    } 
   
    if (email.value.indexOf(".", 0) < 0)                 
    { 
        document.getElementById('erroremail').innerText="Please enter a valid email address"; 
        email.focus(); 
        return false; 
    } 
   
    if (message.value == "")                           
    {
        document.getElementById('errormsg').innerText="Please enter a valid message"; 
        message.focus(); 
        return false; 
    }else{
        document.getElementById('errormsg').innerText="";  
    }
   
    return true; 
}


/* Toggle between adding and removing the "responsive" class to topnav when the user clicks on the icon */
function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
      x.className += " responsive";
    } else {
      x.className = "topnav";
    }
  }
