export const random = (num) => Math.ceil(Math.random() * num);

export const createClickCounter = (maxClicks) => {
    let count = 0;
    return () => {
        if (count < maxClicks) {
            count++;
            console.log(`Кліків: ${count}, Залишилось: ${maxClicks - count}`);
            return true;
        } else {
            console.log("Максимальна кількість натискань досягнута.");
            return false;
        }
    };
};

export const randomTarget = (character, enemy) => {
    return Math.random() < 0.5 ? character : enemy;
};
