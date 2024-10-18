import { Pokemon } from "./Pokemon.js";
import { random, createClickCounter } from "./utils.js";
import { generateLog } from "./logs.js";
import { pokemons } from "./pokemons.js";

document.addEventListener("DOMContentLoaded", function () {
    const $logs = document.getElementById("logs");

    function getRandomPokemon(excludedName) {
        let randomPokemon;
        do {
            const randomIndex = Math.floor(Math.random() * pokemons.length);
            randomPokemon = pokemons[randomIndex];
        } while (randomPokemon.name === excludedName);
        return randomPokemon;
    }

    let player1Data = getRandomPokemon("");
    let player1Attacks = player1Data.attacks;
    let player1 = new Pokemon({
        name: player1Data.name,
        defaultHP: player1Data.hp,
        elHPId: "health-character",
        elProgressbarId: "progressbar-character",
    });

    let player2Data = getRandomPokemon(player1Data.name);
    let player2Attacks = player2Data.attacks;
    let player2 = new Pokemon({
        name: player2Data.name,
        defaultHP: player2Data.hp,
        elHPId: "health-enemy",
        elProgressbarId: "progressbar-enemy",
    });

    function init() {
        console.log("Початок гри!");
        updatePlayerDisplay(player1, player2);
        player1.renderHP();
        player2.renderHP();
        createAttackButtons(player1, ".control", player1Attacks);
        createAttackButtons(player2, ".control-enemy", player2Attacks);
    }

    function updatePlayerDisplay(player1, player2) {
        document.getElementById("name-character").innerText = player1.name;
        document.querySelector(".sprite").src = player1Data.img;
        document.getElementById("name-enemy").innerText = player2.name;
        document.querySelector(".enemy .sprite").src = player2Data.img;
    }

    function createAttackButtons(player, controlSelector, attacks) {
        const controlDiv = document.querySelector(controlSelector);
        attacks.forEach((attack, index) => {
            const button = document.createElement("button");
            button.classList.add("button");
            button.innerText = attack.name;
            button.id = `btn-attack-${player.name}-${index}`;
            button.addEventListener("click", () => {
                handleAttack(
                    player === player1 ? player2 : player1,
                    attack,
                    player
                );
            });
            controlDiv.appendChild(button);
        });
    }

    function handleAttack(target, attack, attacker) {
        const damage =
            random(attack.maxDamage - attack.minDamage) + attack.minDamage;
        target.changeHP(damage);

        const log = generateLog(attacker, target, damage, attack.name);
        addLog(log);

        if (target.damageHP > 0) {
            const responseAttack =
                target === player1 ? player2Attacks[0] : player1Attacks[0];
            const responseDamage =
                random(responseAttack.maxDamage - responseAttack.minDamage) +
                responseAttack.minDamage;

            attacker.changeHP(responseDamage);

            const responseLog = generateLog(
                target,
                attacker,
                responseDamage,
                responseAttack.name
            );
            addLog(responseLog);
        }
    }

    function addLog(log) {
        const logEntry = document.createElement("p");
        logEntry.innerText = log;
        $logs.prepend(logEntry);
    }

    init();
});
