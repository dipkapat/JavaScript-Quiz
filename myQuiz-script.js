
var currentPg = 0;
var quizQA = [
    ["Which of the following is true about variable naming conventions in JavaScript?", "JavaScript variable names must begin with a letter or the underscore character.", "JavaScript variable names are case sensitive.", "Both of the above.", "None of the above.", 3],
    ["Which of the following is a valid type of function javascript supports?", "named function", "anonymous function", "Both of the above.", "None of the above.", 3],
    ["Which built-in method returns the character at the specified index?", "characterAt()", "charAt()", "getCharAt()", "None of the above.", 2]
];

var quizQues = document.getElementById("quizQuestion");
var answer = document.getElementsByClassName("answer");
var quizAns = document.getElementById("quizAnswers");
var btnNext = document.getElementById("btnNext");
var btnPrevious = document.getElementById("btnPrevious");

btnNext.addEventListener("click", moveNext);
btnPrevious.addEventListener("click", moveBack);

for (var i = 0; i < answer.length; i++) {
    answer[i].addEventListener('click', myAnswer, false);
}

function myAnswer() {
    var idAnswer = this.getAttribute("data-id");    
    document.getElementById("page1").innerHTML = 'Answer ' + idAnswer;
}

function moveNext() {
    if (currentPg < (quizQA.length - 1)) {
        currentPg++;
        checkPg(currentPg);
    } else {
        //console.log('end of quiz Page ' + curPage);
    }
}

function checkPg(i) {
    quizQues.innerHTML = quizQA[currentPg][0];
    for (var i = 0; i < quizAns.children.length; i++) {
        var curNode = quizAns.children[i];
        //console.log(curNode.childNodes[1].innerHTML);
        curNode.childNodes[1].innerHTML = quizQA[currentPg][(i + 1)];
    }
}
checkPg();

function moveBack() {
    if (currentPg > 0) {
        currentPg--;
        checkPg(currentPg);
    } else {
        //console.log('end of quiz Page ' + curPage);
    }

}