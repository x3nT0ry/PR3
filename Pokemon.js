export class Pokemon {
    constructor({ name, defaultHP, elHPId, elProgressbarId }) {
        this.name = name;
        this.defaultHP = defaultHP;
        this.damageHP = defaultHP;
        this.elHP = document.getElementById(elHPId);
        this.elProgressbar = document.getElementById(elProgressbarId);
    }

    renderHP() {
        this.renderHPLife();
        this.renderProgressbarHP();
    }

    renderHPLife() {
        this.elHP.innerText = `${this.damageHP}/${this.defaultHP}`;
    }

    renderProgressbarHP() {
        this.elProgressbar.style.width = `${(this.damageHP / this.defaultHP) * 100}%`;
    }

    changeHP(count) {
        if (this.damageHP < count) {
            this.damageHP = 0;
            alert(`Бідний ${this.name} програв бій!`);
        } else {
            this.damageHP -= count;
        }
        this.renderHP();
    }
}
