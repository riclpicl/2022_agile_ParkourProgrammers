function Disappear() {
  //Since the function toggles, it must show the intended window and hide the alternative on every radio switch.
  if (document.getElementById('goalChangeYes').checked) {
    $('#goal-calculated-menu').show();
    $('#goal-custom-menu').hide();
    
  } else { 
    $('#goal-calculated-menu').hide();
    $('#goal-custom-menu').show();
  }
  
  
  
  //Since the function switches, it must show the intended description and hide the alternatives with every selection.
  if (document.getElementById('experience').value === 'beginner') {
    $('#beginnerDesc').show();
    $('#intermediateDesc').hide();
    $('#expertDesc').hide();
    
  } else if (document.getElementById('experience').value === 'intermediate') {
    $('#intermediateDesc').show();
    $('#beginnerDesc').hide();
    $('#expertDesc').hide();
    
  } else {
    $('#expertDesc').show();
    $('#beginnerDesc').hide();
    $('#intermediateDesc').hide();
    
  }
}

//Onload required to activate the function to initially hide the custom weight change and alternative selection descriptions based on experience level.
window.onload = Disappear();
