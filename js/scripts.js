// Business Logic
function numberConvertor(numberInput) {
  var convertedRange = [];
  for (var i = 0; i <= numberInput; i++) {
    if (i.toString().includes("3")) {
      convertedRange.push(" I'm sorry Dave. I'm afraid I can't do that.")
    } else if (i.toString().includes(2)) {
      convertedRange.push(" Boop!")
    } else if (i.toString().includes(1)) {
      convertedRange.push(" Beep!")
    } else {
      convertedRange.push(" " + i);
    }
  }
  return convertedRange;
}

// User Interface Logic
$(document).ready(function(event) {
  $(".container").slideToggle(1000);
  $("form#beepBoopForm").submit(function(event) {
    event.preventDefault();
    var numberInput = parseInt($("#numberInput").val());
    var result = numberConvertor(numberInput);

    $("h2").show();

    $("#result").text(result);
  });
});
