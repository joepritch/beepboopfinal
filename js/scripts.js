// Business Logic
function numberConvertor(numberInput) {
  var range = [];
  for (var i = numberInput; i >= 0; i--) {
    range.push(i);
  }
  spaceAdder(range.toString());
}

function spaceAdder(range)  {
  var comma = ",";
  var space = " ";
  var frontSlice = "";
  var endSlice = "";
  for (var i = 0; i < range.length; i++) {
    if (comma.includes(range[i])) {
      if (!space.includes(range[i + 1])) {
        frontSlice = range.slice(0, (i + 1));
        endSlice = range.slice((i + 1), range.length);
        range = (frontSlice + space + endSlice);
      }
    }
  }
  threeFinder(range)
}

function threeFinder(range) {
  var source = "3";
  for (var i = 0; i <= range.length;) {
    if (source.includes(range[i])) {
      rangeSlicer(range, i, source)
      return
    } else if (i < range.length) {
      i++
    } else if (i = range.length) {
      twoFinder(range)
      return
    }
  }
}

function twoFinder(range) {
  var source = "2";
  for (var i = 0; i <= range.length;) {
    if (source.includes(range[i])) {
      rangeSlicer(range, i, source);
      return;
    } else if (i < range.length) {
      i++
    } else if (i = range.length) {
      oneFinder(range);
      return;
    }
  }
}

function oneFinder(range) {
  var source = "1";
  for (var i = 0; i <= range.length;) {
    if (source.includes(range[i])) {
      rangeSlicer(range, i, source);
      return;
    } else if (i < range.length) {
      i++
    } else if (i = range.length) {
      result(range);
      return;
    }
  }
}

function  rangeSlicer(range, index, source) {
  var frontSlice = ""
  var endSlice = ""
  var returnRange = ""
  var message1 = " Beep!"
  var message2 = " Boop!"
  var message3 = " I'm sorry, Dave. I'm afraid I can't do that."
  var comma = ","
  if (index == 0) {
    for (var i = 0; i < range.length; i++) {
      if (comma.includes(range[index + i])) {
        endSlice = range.slice((index + i), range.length);
        if (source == 3) {
          returnRange = (message3 + endSlice);
          threeFinder(returnRange);
          return;
        } else if (source == 2) {
          returnRange = (message2 + endSlice);
          threeFinder(returnRange);
          return;
        } else if (source == 1) {
          returnRange = (message1 + endSlice);
          threeFinder(returnRange);
          return;
        }
      }
    }
  } else {
    for (var i = 0; i < range.length; i++) {
      if (comma.includes(range[index + i])) {
        endSlice = range.slice((index + i), range.length);
        for (var j = 0; j < range.length; j++) {
          if (comma.includes(range[index - j])) {
            frontSlice = range.slice(0, (index - j) + 1);
            if (source == 3) {
              returnRange = (frontSlice + message3 + endSlice);
              threeFinder(returnRange);
              return;
            } else if (source == 2) {
              returnRange = (frontSlice + message2 + endSlice);
              threeFinder(returnRange);
              return;
            } else if (source = 1) {
              returnRange = (frontSlice + message1 + endSlice);
              threeFinder(returnRange);
              return;
            }
          }
        }
      }
    }
  }
}

function result(range) {
  $("#result").text(range);
}

// User Interface Logic
$(document).ready(function(event) {
  $(".container").slideToggle(1000);
  $("form#beepBoopForm").submit(function(event) {
    event.preventDefault();
    var numberInput = parseInt($("#numberInput").val());
    numberConvertor(numberInput);

    $("h2").show();

    var result = function result(range) {
      $("#result").text(range);
    }
  });
});
