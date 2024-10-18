function random(num) {
    return Math.ceil(Math.random() * num);
}

function generateLog(attacker, defender, damage, attackName) {
    const logs = [
        `${defender.name} вспомнил что-то важное, но неожиданно ${attacker.name}, не помня себя от испуга, ударил в предплечье врага с атакой ${attackName}.`,
        `${defender.name} поперхнулся, и за это ${attacker.name} с испуга приложил прямой удар коленом в лоб врага с атакой ${attackName}.`,
        `${defender.name} забылся, но в это время наглый ${attacker.name}, приняв волевое решение, неслышно подойдя сзади, ударил с атакой ${attackName}.`,
        `${defender.name} пришел в себя, но неожиданно ${attacker.name} случайно нанес мощнейший удар с атакой ${attackName}.`,
        `${defender.name} поперхнулся, но в это время ${attacker.name} нехотя раздробил кулаком <вырезано цензурой> противника с атакой ${attackName}.`,
        `${defender.name} удивился, а ${attacker.name} пошатнувшись влепил подлый удар с атакой ${attackName}.`,
        `${defender.name} высморкался, но неожиданно ${attacker.name} провел дробящий удар с атакой ${attackName}.`,
        `${defender.name} пошатнулся, и внезапно наглый ${attacker.name} беспричинно ударил в ногу противника с атакой ${attackName}.`,
        `${defender.name} расстроился, как вдруг, неожиданно ${attacker.name} случайно влепил стопой в живот соперника с атакой ${attackName}.`,
        `${defender.name} пытался что-то сказать, но вдруг, неожиданно ${attacker.name} со скуки, разбил бровь сопернику с атакой ${attackName}.`,
    ];

    const log = logs[random(logs.length) - 1];
    const lossInfo = `Завдано втрат: ${damage}, залишилось HP: ${defender.damageHP}/${defender.defaultHP}`;

    return `${log} ${lossInfo}`;
}

export { generateLog };
