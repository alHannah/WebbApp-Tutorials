function setDice(img1, img2) {
    document.getElementById('img1').setAttribute('src', img1);
    document.getElementById('img2').setAttribute('src', img2);
};

const diceImages = [
    './images/dice1.png',
    './images/dice2.png',
    './images/dice3.png',
    './images/dice4.png',
    './images/dice5.png',
    './images/dice6.png',
];

function getRandom() {
    return Math.floor(Math.random() * 6);
};

const randomInt1 = getRandom();
const randomInt2 = getRandom();

if (randomInt1 == randomInt2) {
    document.getElementById('winner').innerHTML = 'Tie';
} else if (randomInt1 > randomInt2) {
    document.getElementById('winner').innerHTML = '🚩1 wins';
} else {
    document.getElementById('winner').innerHTML = '🚩2 wins';
};

setDice(diceImages[randomInt1], diceImages[randomInt2]);
