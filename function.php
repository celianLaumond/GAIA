<?php

function startGame()
{
        $i = random(1, 4);
        if ($i == 1) {
            require_once(pierrefeuilleciseaux.js/index.html);
        } elseif ($i == 2) {
            require_once(tictactoe/index.html);
        }
