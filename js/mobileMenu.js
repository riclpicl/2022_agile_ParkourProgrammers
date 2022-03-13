/* jquery for small screen navbar button */
/* only execute this script when the document is ready */
$(document).ready(function() {
  /* function called when you click on the button */
  $("button").click(function() {
    /* this if/else to change the text in the button */
    if($("button").text() == "☰"){
      $("button").text("🞬");
    }else{
      $("button").text("☰");
    }
    /* toggles the visibilities of "li" elements. */
    $("li").toggle("slow");
  });
});
