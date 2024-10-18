import { Pokemon } from "./Pokemon.js";
import { random, createClickCounter, randomTarget } from "./utils.js";
import { generateLog } from "./logs.js";

document.addEventListener("DOMContentLoaded", function () {
    const $btn = document.getElementById("btn-kick");
    const $btnSpecial = document.getElementById("btn-special");
    const $logs = document.getElementById("logs");

    const kickCounter = createClickCounter(6);
    const specialCounter = createClickCounter(6);

    const character = new Pokemon({
        name: "Pikachu",
        defaultHP: 100,
        elHPId: "health-character",
        elProgressbarId: "progressbar-character",
    });

    const enemy = new Pokemon({
        name: "Charmander",
        defaultHP: 100,
        elHPId: "health-enemy",
        elProgressbarId: "progressbar-enemy",
    });

    function init() {
        console.log("Початок гри!");
        character.renderHP();
        enemy.renderHP();
    }

    function addLog(log) {
        const logEntry = document.createElement("p");
        logEntry.innerText = log;
        $logs.prepend(logEntry);
    }

    $btn.addEventListener("click", function () {
        if (kickCounter()) {
            const damageCharacter = random(20);
            const damageEnemy = random(20);

            character.changeHP(damageCharacter);
            enemy.changeHP(damageEnemy);

            const characterLog = generateLog(character, enemy, damageCharacter);
            const enemyLog = generateLog(enemy, character, damageEnemy);

            addLog(characterLog);
            addLog(enemyLog);
        }
    });

    $btnSpecial.addEventListener("click", function () {
        if (specialCounter()) {
            const target = randomTarget(character, enemy);
            const damage = 20;
            target.changeHP(damage);

            const log = generateLog(
                target,
                target === character ? enemy : character,
                damage
            );
            addLog(log);
        }
    });

    init();
});
