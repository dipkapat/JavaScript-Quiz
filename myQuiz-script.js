var curPage = 0;
var quizQA = [
    ["Which of the following is true about variable naming conventions in JavaScript?", "JavaScript variable names must begin with a letter or the underscore character.", "JavaScript variable names are case sensitive.", "Both of the above.", "None of the above.", 3],
    //["Which of the following is a valid type of function javascript supports?", "named function", "anonymous function", "Both of the above.", "None of the above.", 3],
    //["Which built-in method returns the character at the specified index?", "characterAt()", "charAt()", "getCharAt()", "None of the above.", 2]
];
var quizQues = document.getElementById("quizQuestion");
var answer = document.getElementsByClassName("answer");
var quizAns = document.getElementById("quizAnswers");
/*console.log(quizAns);
console.log(quizAns.children[0]);
console.log(quizAns.children[1]);
console.log(quizAns.children[2]);
console.log(quizAns.children[3]);*/

/*var btnNext = document.getElementById("btnNext");
var btnPrevious = document.getElementById("btnPrevious");

btnNext.addEventListener("click", moveNext);
btnPrevious.addEventListener("click", moveBack);

checkPage();
for (var i = 0; i < answer.length; i++) {
    answer[i].addEventListener('click', myAnswer, false);
}

function myAnswer() {
    var idAnswer = this.getAttribute("data-id");
    document.getElementById("page1").innerHTML = 'Answer ' + idAnswer;
}

function moveNext() {
    if (curPage < (quizQA.length - 1)) {
        curPage++;
        checkPage(curPage);
    } else {
        //console.log('end of quiz Page ' + curPage);
    }
}

function checkPage(i) {
    //console.log(curPage + 1);
    quizQues.innerHTML = quizQA[curPage][0];
    for (var i = 0; i < quizAns.children.length; i++) {
        var curNode = quizAns.children[i];
        console.log(curNode.childNodes[1].innerHTML);
        curNode.childNodes[1].innerHTML = quizQA[curPage][(i + 1)];
    }
}

function moveBack() {
    if (curPage > 0) {
        curPage--;
        checkPage(curPage);
    } else {
        //console.log('end of quiz Page ' + curPage);
    }

}*/
quizQues.innerHTML = quizQA[0][0];
for (var i = 0; i < quizAns.children.length; i++) {
    var curNode = quizAns.children[i];
    //console.log(curNode.childNodes[1].innerHTML);
    curNode.childNodes[1].innerHTML = quizQA[0][(i + 1)];
}
