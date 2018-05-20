$(document).ready(function () {
    var brass = ["Trumpet", "Tuba", "Trombone", "Horn"];
    var woodwind = ["Clarinet", "Saxophone", "Bassoon", "Piccolo"];
    var percussion = ["Marimba", "Timpani", "Euphonium", "Vibraphone"];
    var string = ["Cello", "Viola", "Violin", "Bass"];
    var composer = ["Debussy", "Albeniz", "Tchaikovsky", "Messiaen"];
    var correct = 0;
    var incorrect = 0;
    var intervalId;

    brassFunction();

    function stopTimer() {
        clearInterval(intervalId);

    }

    function losingTime() {
        var time = 30;

        function countdown() {
            intervalId = setInterval(function () {
                $("#timeLeft").html(time);

                
                if (time == 0) {
                    stopTimer();
                    $("#timeLeft").text("Out of time!");
                }
                time--;
            }, 1000);

        }

        
        countdown();
    }

    function clearIt() {
        $("#questionGoesHere").empty();
    }

    
    function resultsInfo() {
        $("#correct").html("<h1>You successfully answered " + correct + " questions correctly!");
        $("#incorrect").html("<h1>You answered " + incorrect + " questions incorrectly.");
    }
    


    function brassFunction() {
        $("#questionGoesHere").append("<p class='question'>Which is the largest brass instrument?</p>");
        for (var i = 0; i < brass.length; i++) {
            var className = brass[i];

            var log = $("#questionGoesHere").append("<li class='" + className + "'>" + brass[i] + "</li>");
            
        }

        function chooseAnswer() {
            $(".Tuba").click(function () {
                correct++;
                alert("correct");
                clearIt();
                woodwindFunction();
            });
            $(".Trombone").click(function () {
                alert("incorrect");
                incorrect++;
                clearIt();
                woodwindFunction();
            });
            $(".Trumpet").click(function () {
                alert("incorrect");
                incorrect++;
                clearIt();
                woodwindFunction();
            });
            $(".Horn").click(function () {
                alert("incorrect");
                incorrect++;
                clearIt();
                woodwindFunction();
            });

        }
        chooseAnswer();
        losingTime();
        resultsInfo();
    }

    function woodwindFunction() {
        $("#questionGoesHere").append("<p class='question'>Which is the smallest woodwind instrument?</p>");
        for (var i = 0; i < woodwind.length; i++) {
            var className = woodwind[i];
            $("#questionGoesHere").append("<li class='" + className + "'>" + woodwind[i] + "</li>");
        }

        function chooseAnswer() {
            $(".Piccolo").click(function () {
                correct++;
                alert("correct");
                clearIt();
                percussionFunction();
            });
            $(".Clarinet").click(function () {
                alert("incorrect");
                incorrect++;
                clearIt();
                percussionFunction();
            });
            $(".Bassoon").click(function () {
                alert("incorrect");
                incorrect++;
                clearIt();
                percussionFunction();
            });
            $(".Saxophone").click(function () {
                alert("incorrect");
                incorrect++;
                clearIt();
                percussionFunction();
            });
        }
        chooseAnswer();
        losingTime();
        resultsInfo();
    }

    function percussionFunction() {
        $("#questionGoesHere").append("<p class='question'>Which of the following is not a percussion instrument?</p>");
        for (var i = 0; i < percussion.length; i++) {
            var className = percussion[i];
            $("#questionGoesHere").append("<li class='" + className + "'>" + percussion[i] + "</li>");
        }

        function chooseAnswer() {
            $(".Euphonium").click(function () {
                correct++;
                alert("correct");
                clearIt();
                stringFunction();
            });
            $(".Marimba").click(function () {
                alert("incorrect");
                incorrect++;
                clearIt();
                stringFunction();
            });
            $(".Vibraphone").click(function () {
                alert("incorrect");
                incorrect++;
                clearIt();
                stringFunction();
            });
            $(".Timpani").click(function () {
                alert("incorrect");
                incorrect++;
                clearIt();
                stringFunction();
            });
        }
        chooseAnswer();
        losingTime();
        resultsInfo();
    }

    function stringFunction() {
        $("#questionGoesHere").append("<p class='question'>Which of the following string instruments is most common in jazz?</p>");
        for (var i = 0; i < string.length; i++) {
            var className = string[i];
            $("#questionGoesHere").append("<li class='" + className + "'>" + string[i] + "</li>");
        }

        function chooseAnswer() {
            $(".Bass").click(function () {
                correct++;
                alert("correct");
                clearIt();
                composerFunction();
            });
            $(".Viola").click(function () {
                alert("incorrect");
                incorrect++;
                clearIt();
                composerFunction();
            });
            $(".Violin").click(function () {
                alert("incorrect");
                incorrect++;
                clearIt();
                composerFunction();
            });
            $(".Cello").click(function () {
                alert("incorrect");
                incorrect++;
                clearIt();
                composerFunction();
            });
        }
        chooseAnswer();
        losingTime();
        resultsInfo();
    }

    function composerFunction() {
        $("#questionGoesHere").append("<p class='question'>Which of the following composers made the best music?</p>");
        for (var i = 0; i < composer.length; i++) {
            var className = composer[i];
            $("#questionGoesHere").append("<li class='" + className + "'>" + composer[i] + "</li>");
        }

        function chooseAnswer() {
            $(".Debussy").click(function () {
                correct++;
                alert("correct");
                clearIt();
                
            });
            $(".Albeniz").click(function () {
                alert("correct");
                correct++;
                clearIt();
                
            });
            $(".Tchaikovsky").click(function () {
                alert("correct");
                correct++;
                clearIt();
                
            });
            $(".Messiaen").click(function () {
                alert("correct");
                correct++;
                clearIt();
                
            });
        }
        chooseAnswer();
        losingTime();
        resultsInfo();
    }
});