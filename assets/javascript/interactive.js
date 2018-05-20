$(document).ready(function () {
    var brass = ["Trumpet", "Tuba", "Trombone", "Horn"];
    var woodwind = ["Clarinet", "Tenor Saxophone", "Bassoon", "Piccolo"];
    var percussion = ["Marimba", "Timpani", "Euphonium", "Vibraphone"];
    var string = ["Cello", "Hurdy Gurdy", "Violin", "Bass"];
    var composer = ["Debussy", "Albeniz", "Tchaikovsky", "Messiaen"];
    var correct = 0;
    var incorrect = 0;
    var intervalId;

    function start() {
        $("#clear").click(function () {
            $("#initiate").empty();
            questionGenerator();
        });
    }

    function questionGenerator() {


        var brassFunc = brassFunction();
        var woodwindFunc = woodwindFunction();
        var percussionFunc = percussionFunction();
        var stringFunc = stringFunction();
        var composerFunc = composerFunction();

        var functionArray = [brassFunc, woodwindFunc, percussionFunc, stringFunc, composerFunc];

        for (var i = 0; i < functionArray.length; i++) {
            //iterate each individual function...
            currentQuestion = functionArray[i];

            //on answer, change question
            questionGenerator();
        }
    }

    function timer() {
        $("#timeLeft").append(losingTime());
    }


    function losingTime() {
        var time = 50;

        function countdown() {
            intervalId = setInterval(function () {
                $("#timeLeft").html(time);
                
                console.log(time);
                if (time == 0) {
                    stopTimer();
                } time--;
            }, 1000);
            
        }

        function stopTimer() {
            clearInterval(intervalId);
                    
                    $("#timeLeft").text("Out of time!");
        }
        countdown();       
    }

    losingTime();


    function brassFunction() {
        $("#questionGoesHere").append("<p class='question'>Which is the largest brass instrument?</p>");
        for (var i = 0; i < brass.length; i++) {
            var className = brass[i];

            var log = $("#questionGoesHere").append("<li class='" + className + "'>" + brass[i] + "</li>");
            console.log(log);
        }

        function chooseAnswer() {
            $(".Tuba").click(function () {
                correct++;
                alert("correct");
            });
            $(".Trombone").click(function () {
                alert("incorrect");
                incorrect++;
            });
            $(".Trumpet").click(function () {
                alert("incorrect");
                incorrect++;
            });
            $(".Horn").click(function () {
                alert("incorrect");
                incorrect++;
            });

        }
        chooseAnswer();
    }

    brassFunction();

    function woodwindFunction() {
        $("#questionGoesHere").append("<p class='question'>Which is the smallest woodwind instrument?</p>");
        for (var i = 0; i < woodwind.length; i++) {
            $("#questionGoesHere").append("<li class='option" + i + "'>" + woodwind[i] + "</li>");
        }
    }

    function percussionFunction() {
        $("#questionGoesHere").append("<p class='question'>Which of the following is not a percussion instrument?</p>");
        for (var i = 0; i < percussion.length; i++) {
            $("#questionGoesHere").append("<li class='option" + i + "'>" + percussion[i] + "</li>");
        }
    }

    function stringFunction() {
        $("#questionGoesHere").append("<p class='question'>Which of the following string instruments is most common in jazz?</p>");
        for (var i = 0; i < string.length; i++) {
            $("#questionGoesHere").append("<li class='option" + i + "'>" + string[i] + "</li>");
        }
    }

    function composerFunction() {
        $("#questionGoesHere").append("<p class='question'>Which of the following composers made the best music?</p>");
        for (var i = 0; i < composer.length; i++) {
            $("#questionGoesHere").append("<li class='option" + i + "'>" + composer[i] + "</li>");
        }
    }


});