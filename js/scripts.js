var scoreDesign = 1;
var scoreBackend = 1;
var scoreCsharp = 1;
var scoreRuby = 1;

$(document).ready(function() {
  $("form#quiz").submit(function(event) {
    var question1 = parseInt($("input:radio[name=question1]:checked").val());
    var question2 = parseInt($("input:radio[name=question2]:checked").val());
    var question3 = parseInt($("input:radio[name=question3]:checked").val());
    var question4 = parseInt($("input:radio[name=question4]:checked").val());
    var question5 = parseInt($("input:radio[name=question5]:checked").val());

    if (question1 === 1) {
      scoreDesign++;
    } else if (question1 === 2) {
      scoreBackend++;
      scoreCsharp++;
    } else if (question3 === 3) {
      scoreRuby++;
    }
    if (question2 === 1) {
      scoreBackend++;
      scoreCsharp++;
    } else if (question2 === 2) {
      scoreDesign++;
    } else if (question2 === 3) {
      scoreRuby++;
    }
    if (question3 === 1) {
      scoreCsharp++;
    } else if (question3 === 2) {
      scoreRuby++;
    }

    if (scoreDesign === scoreBackend) {
      var result = "Your score is a tie! You show equal preference for back-end and front-end and will make a fabulous engineer however you end up. Fortunately for you, no developer exists in a vacuum and you will have to have strong skillsets in both front-end and back-end coding to achieve your wishes. Also fortunately for you, Epicodus' programs should prepare you to be a well-rounded programmer in whatever path you choose!";
      $("#answers").text(result);
    } else if (scoreDesign > scoreBackend) {
      var result = "Your preference is to be a front-end designer! Your inclination for good aesthetics and the users' experience should send you down the path to study more CSS.";
      $("#answers").text(result) ;
    } else {
      if (scoreRuby > scoreCsharp) {
        var result = "Your preference is for Ruby/Rails! Ruby is a dynamic, open source programming language with a focus on productivity and simplicity. It has had a lot of traction over the last few years and should serve you well. " ;
        $("#answers").text(result);
    } else {
      var result = "Your preference is C#/.Net! It is a proven language on the upswing that should prove valuable in a career with established companies. It is strong in the back-end."
      $("#answers").text(result);
      }
    }
    $("#answers").removeClass();
    $("#quiz").hide();
    event.preventDefault();
  });
});

$(document).ready(function() {
  $("#part0part1").click(function() {
    $("#part1").removeClass();
    $("#part0").hide();
  });
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
