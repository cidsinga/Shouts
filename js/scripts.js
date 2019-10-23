$(document).ready(function() {
  $("#shoutForm").submit(function(event) {
    var inputShouts = $("input#words").val().toUpperCase();
    $(".words").text(inputShouts);


    $("#shouts").show();

    event.preventDefault();
  })
})
