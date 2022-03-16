function validateFormNumber(numToVal, fetchSpanId) {
 
  var elementId = document.getElementById(numToVal);
  var spanId = document.getElementById(fetchSpanId);
  
  //https://stackoverflow.com/a/12643073
  if (new RegExp('^[+-]?([0-9]+([.][0-9]*)?|[.][0-9]+)$').test(parseFloat(elementId.value))) {
    $(".TDEE").show();
    elementId.classList.remove("error");
    spanId.classList.remove("tooltiptext");
    $(spanId).hide();
    
  } else {
    $(".TDEE").hide();
    elementId.classList.add("error");
    spanId.classList.add("tooltiptext");
    $(spanId).show();

  validateInputLength();

  }
}

z
function validateInputLength (fieldId, maxLength, lengthText) {
  
  var elementId = document.getElementById(fieldId);
  var lengthTextId = document.getElementById(lengthText);
  
  
  if (elementId.value.length <= maxLength) {
    $(".TDEE").show();
    $(lengthTextId).hide();
    
  } else {
    $(".TDEE").hide();
    $(lengthTextId).show();
  }
}