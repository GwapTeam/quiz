completevar quizzes = [
    "テトリスを作ったのは日本人である",
    "１円玉の直径は2cmである",
    "塩はカロリー0である",
    "レモンはミカン科の果物である",
    "パンとご飯を同じ分量だけ食べた時、消化が早いのはパンである",
    "ドライブスルーは馬で入っても注文できる"
];  //問題のリスト
var answerList   = [0, 1, 1, 1, 0, 1];   //0の時NOを選ぶと正解、1の時YESを選ぶと正解
var score        = 0;                    //正解数
var index        = 0;                    //現在の回答数
var question     = document.getElementById("question");

function updateQuestion() {
    question.innerText = "問題" + (index + 1) + ":" + quizzes[index];
}

function questionJudge(check) {

    if (check == answerList[index]) {
        alert("正解"+ (index + 1) + "問目終了。");
        score++;
    } else {
        alert("不正解"+ (index + 1) + "問目終了。");
    }

    if(index >= quizzes.length - 1) {
        localStorage.setItem("score", score);
        localStorage.setItem("quizCount", quizzes.length);
        location.href="quiz-result-complete .html";
    }

    index++;
    updateQuestion();
}
