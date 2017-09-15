

$(document).ready(function() {
  $("form#quiz").submit(function(event) {
    var question1 = parseInt($("input:radio[name=question1]:checked").val());
    var question2 = parseInt($("input:radio[name=question2]:checked").val());
    var question3 = parseInt($("input:radio[name=question3]:checked").val());
    var question4 = parseInt($("input:radio[name=question4]:checked").val());
    var question5 = parseInt($("input:radio[name=question5]:checked").val());

    var scoreDesign = 1;
    var scoreBackend = 1;
    var scoreCsharp = 1;
    var scorePhp = 1;
    var scoreJava = 1;


    if (question1 === 1) {
      scoreDesign++;
    } else if (question1 === 2) {
      scoreBackend++;
      scoreCsharp++;
      scorePhp++;
    } else if (question3 === 3) {
      scoreDesign++;
      scoreBackend++;
      scoreRuby++;
    }

    if (question2 === 1) {
      scoreBackend++;
      scoreRuby++;
      scorePhp++;
      scoreCsharp++;
    } else if (question2 === 2) {
      scoreDesign++;
    } else if (question2 === 3) {
      scoreRuby++;
      scoreJava++;
    }

    if (question3 === 1) {
      scoreCsharp++;
      scoreJava++;
      scorePhp++;
    } else if (question3 === 2) {
      scoreRuby++;
    }




    if (scoreDesign > scoreBackend) {
      var result = "Your results were for a <em>Front End Designer.</em>";
      $("#answers").text(result)
    }
    // question 4 & 5 ignored




  //  result = "You picked "+question1+", "+question2+", "+question3+", "+question4+", and "+question5+". " ;

    // designResult = "Your score for design was " + designScore;


    $("#answers").removeClass();
    // $("#answers").text(concat(question1,question2,question3));

    // $("#answers").text(result);

    $("#quiz").hide();

    event.preventDefault();
  });
});

$(document).ready(function() {
  $("#part1part2").click(function() {
    $("#part1").hide();
    $("#part2").removeClass();
  });
  $("#part2part3").click(function() {
    $("#part3").removeClass()
    $("#part2").hide()
  });
  $("#part3part4").click(function() {
    $("#part4").removeClass()
    $("#part3").hide()
  });
  $("#part4part5").click(function() {
    $("#part5").removeClass()
    $("#part4").hide()
  });
});





// function goTo(close,open) {
//   $("close").hide("slow");
//   $("open").removeClass(hidden);
// }
