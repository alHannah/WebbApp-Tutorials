class ColorGame {
    constructor(element) {
        this.$element = $(element);
        this.userInteracted = false;
        this.currentStep = 0;

        // Bind user interaction event
        $(document).on('keydown click', () => {
            this.userInteracted = true;
        });
    }

    playAudio(audioSrc) {
        if (!this.userInteracted) {
            console.log('User has not interacted with the document yet.');
            return;
        }

        const audio = new Audio(audioSrc);
        audio.play().catch(error => {
            console.error('Audio play failed:', error);
        });
    }

    getRandom(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    setPressedAnimation(button) {
        $(button).addClass('pressed');
        setTimeout(() => {
            $(button).removeClass('pressed');
        }, ColorGame.ANIMATION_DELAY);
    }

    autoPlay(targetButton, targetSound, delay) {
        setTimeout(() => {
            this.setPressedAnimation(targetButton);
            this.playAudio(targetSound);
        }, delay);
    }

    returnSound(soundSrc) {
        return ColorGame.SOUND_DICTIONARY[soundSrc];
    }

    reset() {
        this.currentStep = 0;
    }
}

ColorGame.SOUND_DICTIONARY = {
    'blue': './sounds/blue.mp3',
    'green': './sounds/green.mp3',
    'red': './sounds/red.mp3',
    'yellow': './sounds/yellow.mp3',
    'wrong': './sounds/wrong.mp3'
};
ColorGame.ANIMATION_DELAY = 100;

class ColorClass {
    static colorArray = ['blue', 'green', 'red', 'yellow'];
    static delay = 200;
    static repetitions = 5;

    static init() {
        this.gameInstance = new ColorGame('#container');
    }
}

$(document).ready(() => {
    console.log('jQuery Working!');
    ColorClass.init();
    
    const { repetitions, gameInstance, delay, colorArray } = ColorClass;
    const playedIndex = [];

    const playRandomWithDelay = (i) => {
        if (i < repetitions) {
            const randomIndex = gameInstance.getRandom(0, colorArray.length - 1);
            const randomColor = colorArray[randomIndex];
            playedIndex.push(randomColor);

            const targetSound = gameInstance.returnSound(randomColor);
            const targetButton = `#${randomColor}`;
            gameInstance.autoPlay(targetButton, targetSound, i * delay);

            setTimeout(() => {
                playRandomWithDelay(i + 1);
            }, delay);
        }
    };

    $(document).keydown(event => {
        if (event.key === 's') {
            playedIndex.length = 0;
            gameInstance.reset();
            playRandomWithDelay(0);
        }
    });

    $('.btn').on('click', function () {
        const $this = $(this);
        const pickedColor = $this.attr('id');
        const makeSound = gameInstance.returnSound(pickedColor);

        gameInstance.setPressedAnimation($this);
        gameInstance.playAudio(makeSound);

        if (playedIndex[gameInstance.currentStep] === pickedColor) {
            gameInstance.currentStep++;
            console.log('Correct');
        } else {
            gameInstance.playAudio(gameInstance.returnSound('wrong'));
            gameInstance.reset();
            playedIndex.length = 0;
        }
    });
});
