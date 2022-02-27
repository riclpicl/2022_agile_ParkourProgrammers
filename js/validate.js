function validateFormNumber(numToVal) {
  
  var elementId = document.getElementById(numToVal);
  
  //https://stackoverflow.com/a/12643073
  var isValid = new RegExp(/^[+-]?([0-9]+([.][0-9]*)?|[.][0-9]+)$/).test(parseFloat(elementId.value));
  if (isValid) {
    elementId.classList.remove("error");
    $(".tooltiptext").css("visibility", "hidden");
    
  } else {
    //Resets number input if invalid character is entered.
    document.getElementById(numToVal).value = "";
    elementId.classList.add("error");
    $(".tooltiptext").css("visibility", "visible");
  }
}

window.onload = $(".tooltiptext").css("visibility", "hidden");