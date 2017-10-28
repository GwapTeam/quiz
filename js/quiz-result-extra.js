function result() {
    var score = localStorage.getItem("score");
    var quizCount = localStorage.getItem("quizCount");
    var missCount = quizCount - score;
    var percentage = Math.round(score/quizCount * 100);
    document.getElementById("score").innerText = score;
    document.getElementById("missCount").innerText = missCount;
    document.getElementById("percentage").innerText = percentage + "%";
}
