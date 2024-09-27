document.addEventListener('DOMContentLoaded', function () { 
    const $btn = document.getElementById('btn-kick');
    const $btnSpecial = document.getElementById('btn-special');


    const character = {
        name: 'Pikachu',
        defaultHP: 100,
        damageHP: 100,
        elHP: document.getElementById('health-character'),
        elProgressbar: document.getElementById('progressbar-character')
    };

    const enemy = {
        name: 'Charmander',
        defaultHP: 100,
        damageHP: 100,
        elHP: document.getElementById('health-enemy'),
        elProgressbar: document.getElementById('progressbar-enemy')
    };

    $btn.addEventListener('click', function () {
        console.log('Kick');
        changeHP(random(20), character);
        changeHP(random(20), enemy);
    });

    // $btnSpecial.addEventListener('click', function () {
    //     console.log('Special Kick');
    //     const target = randomTarget(); 
    //     changeHP(20, target); 
    // });

    function init() {
        console.log('Start Game!');
        renderHP(character);
        renderHP(enemy);
    }

    function renderHP(person) {
        renderHPLife(person);
        renderProgressbarHP(person);
    }

    function renderHPLife(person) {
        person.elHP.innerText = person.damageHP + '/' + person.defaultHP;
    }

    function renderProgressbarHP(person) {
        person.elProgressbar.style.width = (person.damageHP / person.defaultHP * 100) + '%';
    }

    function changeHP(count, person) {
        if (person.damageHP < count) {
            person.damageHP = 0;
            alert('Бедный ' + person.name + ' проиграл бой!');
            $btn.disabled = true;
            $btnSpecial.disabled = true;
        } else {
            person.damageHP -= count;
        }
        renderHP(person);
    }

    function random(num) {
        return Math.ceil(Math.random() * num);
    }

    function randomTarget() {
        return Math.random() < 0.5 ? character : enemy;
    }

    init();
});
