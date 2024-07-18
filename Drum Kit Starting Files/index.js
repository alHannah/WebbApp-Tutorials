const drumButtons = document.querySelectorAll('.drum');
const soundsDictionary = {
    'w': './sounds/tom-1.mp3',
    'a': './sounds/tom-2.mp3',
    's': './sounds/tom-3.mp3',
    'd': './sounds/tom-4.mp3',
    'j': './sounds/snare.mp3',
    'k': './sounds/kick-bass.mp3',
    'l': './sounds/crash.mp3',
};

// Function to play sound
function playSound(key) {
    const soundFile = soundsDictionary[key];
    if (soundFile) {
        const audio = new Audio(soundFile);
        audio.play();
    } else {
        console.log('Unknown key: ' + key);
    }
}

function Animate(currentKey) {
    const selectedButton = document.querySelector('.' + currentKey);
    if (selectedButton) {
        selectedButton.classList.add('pressed');
        setTimeout(function () {
            selectedButton.classList.remove('pressed')
        }, 100);
    } else {
        console.log('Unknown key: ' + currentKey);
    }
}

// Add click event listeners to buttons
drumButtons.forEach(button => {
    button.addEventListener('click', function() {
        const particularKey = this.innerHTML;
        playSound(particularKey);
        Animate(particularKey);
    });
});

// Add keydown event listener to the document
document.addEventListener('keydown', event => {
    playSound(event.key);
    Animate(event.key);
});
