$(document).ready(function() {
  $("button#dark").click(function() {
    $("body").removeClass();
    $("body").addClass("dark-background");
  });

  $("button#light").click(function() {
    $("body").removeClass();
    $("body").addClass("light-background");
  })

  $("button#surprise").click(function() {
    $("body").removeClass();
    $("body").addClass("surprise-background");
  })
  
});