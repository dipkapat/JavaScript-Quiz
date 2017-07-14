var currentPg = 0, correct = 0;
var myAnswers = [];
var quizQA = [
    ["Q1. Which of the following is true about variable naming conventions in JavaScript?",3, "JavaScript variable names must begin with a letter or the underscore character.", "JavaScript variable names are case sensitive.", "Both of the above.", "None of the above."],
    ["Q2. Which of the following is a valid type of function javascript supports?",3, "named function", "anonymous function", "Both of the above.", "None of the above."],
    ["Q3. Which built-in method returns the character at the specified index?",2, "characterAt()", "charAt()", "getCharAt()", "None of the above."]
];

var quizQues = document.getElementById("quizQuestion");
var answer = document.getElementsByClassName("answer");
var quizAns = document.getElementById("quizAnswers");
var btnNext = document.getElementById("btnNext");
var btnPrevious = document.getElementById("btnPrevious");
var progressBar = document.getElementById("progressBar");

btnNext.addEventListener("click", moveNext);
btnPrevious.addEventListener("click", moveBack);

for (var i = 0; i < answer.length; i++) {
    answer[i].addEventListener('click', myAnswer, false);
}

function myAnswer() {
    var idAnswer = this.getAttribute("data-id");
    //document.getElementById("page1").innerHTML = 'Answer ' + idAnswer;
    myAnswers[currentPg] = idAnswer;
    if (quizQA[currentPg][1] == idAnswer) {
    	console.log('Correct Answer');
    }else {
    	console.log('Wrong Answer');
    }
    console.log(myAnswers);
}

function moveNext() {
	if(myAnswers[currentPg]){
		console.log('okay to proceed');
		if (currentPg < (quizQA.length - 1)) {
			currentPg++;
			checkPg(currentPg);
		} else {
			console.log(currentPg + '  ' + quizQA.length);
			if(quizQA.length >= currentPg) {
				endQuiz();
			} else {
				console.log('end of quiz Page ' + currentPg) ;
			}
		}
	} else {
		console.log('not answered');
	}
    /*if (currentPg < (quizQA.length - 1)) {
        currentPg++;
        checkPg(currentPg);
    } else {
        //console.log('end of quiz Page ' + curPage);
    }*/
}

function endQuiz(){
	console.log('Quiz is Over');
}

function checkPg(i) {
    quizQues.innerHTML = quizQA[currentPg][0];
    for (var i = 0; i < quizAns.children.length; i++) {
        var curNode = quizAns.children[i];
        //console.log(curNode.childNodes[1].innerHTML);
        curNode.childNodes[1].innerHTML = quizQA[currentPg][(i + 2)];
    }
    var increment = Math.ceil((currentPg) / (quizQA.length) * 100);
    progressBar.style.width = (increment) + '%';
    progressBar.innerHTML = (increment) + '%';
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
