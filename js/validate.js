function validateFormNumber(numToVal, fetchSpanId) {
  
  var elementId = document.getElementById(numToVal);
  var spanId = document.getElementById(fetchSpanId);
  
  //https://stackoverflow.com/a/12643073
  if (new RegExp(/^[+-]?([0-9]+([.][0-9]*)?|[.][0-9]+)$/).test(parseFloat(elementId.value))) {
    elementId.classList.remove("error");
    spanId.classList.remove("tooltiptext");
    $(spanId).hide();
    
  } else {
    elementId.classList.add("error");
    spanId.classList.add("tooltiptext");
    $(spanId).show();
  }
}

window.onload = $(spanId).hide();