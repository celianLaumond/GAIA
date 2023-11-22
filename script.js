var timerInterval; // Variable pour stocker l'ID de l'intervalle du minuteur




    function rollDice() {
        var randomNumber = Math.floor(Math.random() * 6) + 1;

        if (randomNumber == 1) {
            document.getElementById("dice").src = "image/dice1.png";
        } else if (randomNumber == 2) {
            document.getElementById("dice").src = "image/dice2.png";
        } else if (randomNumber == 3) {
            document.getElementById("dice").src = "image/dice3.png";
        } else if (randomNumber == 4) {
            document.getElementById("dice").src = "image/dice4.png";
        } else if (randomNumber == 5) {
            document.getElementById("dice").src = "image/dice5.png";
        } else {
            document.getElementById("dice").src = "image/dice6.png";
        }
        // Ajoutez votre logique de lancer de dé ici
    }


function updateTimer() {
    document.getElementById('timer').innerText = formatTime(timer);
}

function startTimer() {
    timer = 60; // Réinitialiser le minuteur à 60 secondes
    updateTimer(); // Mettre à jour l'affichage du minuteur
    timerInterval = setInterval(function() {
        if (timer > 0) {
            timer=timer-1;
            updateTimer();
        } else {
            clearInterval(timerInterval); // Arrêter le minuteur une fois qu'il atteint 0

        }
    }, 1000);
}

function formatTime(seconds) {
    var minutes = Math.floor(seconds / 60);
    var remainingSeconds = seconds % 60;
    return minutes + ':' + (remainingSeconds < 10 ? '0' : '') + remainingSeconds;
}
