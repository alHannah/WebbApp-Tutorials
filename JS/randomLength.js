var names = ["Peter", "Max", "Jem"]


function wholeRandom(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}

console.log(+names[wholeRandom(0, names.length)]+ " is going to buy lunch today!");
