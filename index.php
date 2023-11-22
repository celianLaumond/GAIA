<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="style.css">
    <title>Gaia Game</title>
</head>
<body>




<div class="tavern-container">
    <img src="puissance4/GAIA.png" alt="tavern" class="tavern">
<div class ="menu">
    <button id="play-button" onclick="redirectToIndex()">Play Game</button>

    <script>
        function redirectToIndex() {
            var random = Math.floor(Math.random() * 4);
            if (random == 0) {
                window.location.href = 'pierrefeuilleciseaux.js/index.html';
            } else if (random == 1) {
                window.location.href = 'js-mastermind/index.html';
            } else if (random == 2) {
                window.location.href = 'tic-tac-toe/index.php';
            } else if (random == 3) {

                 window.location.href = 'puissance4/index.html';
            }
        }
    </script>



    <img id="dice" src="" alt="Dice Image" >
    <button onclick="rollDice()">Roll Dice</button>
    <div id="timer">1:00</div>
    <button id="start-timer" onclick="startTimer()">Threat</button>
</div>
</div>

<script src="script.js"></script>

</body>
</html>


