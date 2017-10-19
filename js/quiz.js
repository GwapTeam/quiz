var quizzes = [
    "問題1:テトリスを作ったのは日本人である",
    "問題2:１円玉の直径は2cmである",
    "問題3:塩はカロリー0である",
    "問題4:レモンはミカン科の果物である",
    "問題5:パンとご飯を同じ分量だけ食べた時、消化が早いのはパンである",
    "問題６:ドライブスルーは馬で入っても注文できる"
];  //問題のリスト
var answerList   = [0, 1, 1, 1, 0, 1];   //0の時NOを選ぶと正解、1の時YESを選ぶと正解
var score        = 0;                    //正解数
var count        = 0;                    //現在の回答数
var question     = document.getElementById("question");

function updateQuestion() {
    question.innerText = quizzes[count];
}

function questionJudge(check) {

    if (check == answerList[count]) {
        swal("正解", count + "問目終了。", "success");
        score++;
    } else {
        swal("不正解", count + "問目終了。", "error");
    }

  	if(count >= quizzes.length - 1) {
        //まほうのことば
        localStorage.setItem("score", score);
    		location.href="quiz-result.html";
  	}

    count++;
    updateQuestion()
}

function result() {
    var score   = localStorage.getItem("score");            //正解数
    var incorrect = quizzes.length - score;                 //不正解数(正解数ー問題数)
    var percentage = Math.round(score/quizzes.length * 100);//正答率を求める
    document.getElementById("score").innerText = score;
    document.getElementById("incorrect").innerText = incorrect;
    document.getElementById("percentage").innerText = percentage + "%"
}
