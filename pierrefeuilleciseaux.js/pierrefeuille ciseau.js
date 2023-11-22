// Variable globale pour stocker le choix du joueur 1
var choixJoueur1 = "";

// Variable globale pour stocker le choix du joueur 2
var choixJoueur2 = "";

// Fonction appelée lorsqu'un joueur clique sur une image
function choisir(joueur, choix) {
    if (joueur === 'joueur1') {
        choixJoueur1 = choix;
    } else if (joueur === 'joueur2') {
        choixJoueur2 = choix;
    }
}
function home() {
    window.location.href = './index.php';
}

function afficherExplosionConfettis() {var duration = 15 * 1000;
    var animationEnd = Date.now() + duration;
    var defaults = { startVelocity: 30, spread: 360, ticks: 60, zIndex: 0 };

    function randomInRange(min, max) {
        return Math.random() * (max - min) + min;
    }

    var interval = setInterval(function() {
        var timeLeft = animationEnd - Date.now();

        if (timeLeft <= 0) {
            return clearInterval(interval);
        }

        var particleCount = 50 * (timeLeft / duration);
        // since particles fall down, start a bit higher than random
        confetti({ ...defaults, particleCount, origin: { x: randomInRange(0.1, 0.3), y: Math.random() - 0.2 } });
        confetti({ ...defaults, particleCount, origin: { x: randomInRange(0.7, 0.9), y: Math.random() - 0.2 } });
    }, 250);}
// Fonction pour déterminer le gagnant et afficher les confettis
function jouer() {
    // Vérifier si les deux joueurs ont fait leur choix
    if (choixJoueur1 !== "" && choixJoueur2 !== "") {


        // Déterminer le gagnant
        if (choixJoueur1 === choixJoueur2) {
            alert("Égalité !");
        } else if (
            (choixJoueur1 === "pierre" && choixJoueur2 === "ciseaux") ||
            (choixJoueur1 === "feuille" && choixJoueur2 === "pierre") ||
            (choixJoueur1 === "ciseaux" && choixJoueur2 === "feuille")
        ) {
            afficherExplosionConfettis();
            alert("Joueur 1 a gagné !");
        } else {
            afficherExplosionConfettis();
            alert("Joueur 2 a gagné !");
        }

        // Réinitialiser les choix pour la prochaine partie
        choixJoueur1 = "";
        choixJoueur2 = "";
    } else {
        // Si un ou les deux joueurs n'ont pas encore fait de choix, afficher un message d'erreur
        alert("Les deux joueurs doivent faire leur choix.");
    }
}


