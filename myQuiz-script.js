var currentPg = 0,
    correct = 0;
var myAnswers = [];
var quizQA = [
    ["Q1. Which of the following is true about variable naming conventions in JavaScript?", 3, "JavaScript variable names must begin with a letter or the underscore character.", "JavaScript variable names are case sensitive.", "Both of the above.", "None of the above."],
    ["Q2. Which of the following is a valid type of function javascript supports?", 3, "named function", "anonymous function", "Both of the above.", "None of the above."],
    ["Q3. Which built-in method returns the character at the specified index?", 2, "characterAt()", "charAt()", "getCharAt()", "None of the above."]
];

var quizQues = document.getElementById("quizQuestion");
var answer = document.getElementsByClassName("answer");
var quizAns = document.getElementById("quizAnswers");
var btnNext = document.getElementById("btnNext");
var btnPrevious = document.getElementById("btnPrevious");
var progressBar = document.getElementById("progressBar");
var btnFinish = document.getElementById("finishQuiz");
checkPg();
btnNext.addEventListener("click", moveNext);
btnPrevious.addEventListener("click", moveBack);
btnFinish.addEventListener("click", endQuiz);
for (var i = 0; i < answer.length; i++) {
    answer[i].addEventListener('click', myAnswer, false);
}

function myAnswer() {
    var idAnswer = this.getAttribute("data-id");
    //document.getElementById("page1").innerHTML = 'Answer ' + idAnswer;
    myAnswers[currentPg] = idAnswer;
    if (quizQA[currentPg][1] == idAnswer) {
        //console.log('Correct Answer');
    } else {
        //console.log('Wrong Answer');
    }
    //console.log(myAnswers);
    addBox();
}

function addBox() {
    for (var i = 0; i < quizAnswers.children.length; i++) {
        var curNode = quizAnswers.children[i];
        if (myAnswers[currentPg] == (i + 1)) {
            curNode.classList.add("selAnswer");
        } else {
            curNode.classList.remove("selAnswer");
        }
    }
}

function moveNext() {
    if (myAnswers[currentPg]) {
        //console.log('okay to proceed');
        if (currentPg < (quizQA.length - 1)) {
            currentPg++;
            checkPg(currentPg);
        } else {
            //check if quiz is completed
            //console.log(currentPg + '  ' + quizQA.length);
            if (quizQA.length >= currentPg) {
                endQuiz();
            } else {
                //console.log('end of quiz Page ' + currentPg);
            }
        }
    } else {
        //console.log('not answered');
    }
}

function endQuiz() {
    if (myAnswers[quizQA.length - 1]) {
        var output = "<div class='output'>Quiz Results<BR>";
        var questionResult = "NA";
        //console.log('Quiz Over');
        for (var i = 0; i < myAnswers.length; i++) {
            if (quizQA[i][1] == myAnswers[i]) {
                questionResult = '<span class="glyphicon glyphicon-ok-circle" aria-hidden="true"></span>';
                correct++;
            } else {
                questionResult = '<span class="glyphicon glyphicon-remove-circle" aria-hidden="true"></span>';
            }
            output = output + '<p>Question ' + (i + 1) + ' ' + questionResult + '</p> ';
        }
        output = output + '<p>You scored ' + correct + ' out of ' + quizQA.length + '</p></div> ';
        document.getElementById("quizContent").innerHTML = output;
    } else {
        //console.log('not answered');
    }
}

function capitalise(str) {
    return str.substr(0, 1).toUppercase() + str.substr(1);
}

function checkPg(i) {
    /// add remove disabled buttons if there are no more questions in que
    if (currentPg == 0) {
        btnPrevious.classList.add("hide");
    } else {
        btnPrevious.classList.remove("hide");
    }
    if ((currentPg + 1) < (quizQA.length)) {
        btnNext.classList.remove("hide");
    } else {
        btnNext.classList.add("hide");
        btnFinish.classList.remove("hide");
    }

    quizQues.innerHTML = quizQA[currentPg][0];
    for (var i = 0; i < quizAns.children.length; i++) {
        var curNode = quizAns.children[i];
        //console.log(curNode.childNodes[1].innerHTML);
        curNode.childNodes[1].innerHTML = quizQA[currentPg][(i + 2)];
        //check if answered already
        if (myAnswers[currentPg] == (i + 1)) {
            curNode.classList.add("selAnswer");
        } else {
            curNode.classList.remove("selAnswer");
        }
    }
    var increment = Math.ceil((currentPg) / (quizQA.length) * 100);
    progressBar.style.width = (increment) + '%';
    progressBar.innerHTML = (increment) + '%';
}

function moveBack() {
    if (currentPg > 0) {
        currentPg--;
        checkPg(currentPg);
    } else {
        //console.log('end of quiz Page ' + currentPg);
    }

}
console.log();