import { pokemons } from "./pokemons.js";
import { Pokemon } from "./Pokemon.js";
function resetGame() {
    const character = pokemons[0];
    const enemy = pokemons[1];

    const playerPokemon = new Pokemon({
        name: character.name,
        defaultHP: character.hp,
        elHPId: "health-character",
        elProgressbarId: "progressbar-character",
    });

    const enemyPokemon = new Pokemon({
        name: enemy.name,
        defaultHP: enemy.hp,
        elHPId: "health-enemy",
        elProgressbarId: "progressbar-enemy",
    });

    playerPokemon.damageHP = playerPokemon.defaultHP;
    enemyPokemon.damageHP = enemyPokemon.defaultHP;

    playerPokemon.renderHP();
    enemyPokemon.renderHP();

    const logsContainer = document.getElementById("logs");
    logsContainer.innerHTML = "";
}

document.getElementById("start-btn").addEventListener("click", () => {
    location.reload();
});

document.getElementById("refresh-btn").addEventListener("click", resetGame);
