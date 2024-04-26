const btn = document.getElementById('btn');
const answer = document.getElementById('answer');
const present = document.getElementById('present');
const label = document.getElementById('label');
const imgPresent = document.getElementById('img-present');

const speech = document.getElementById('speech');

let soundNo = [
    'no sound/no-bezrazl.mp3',
    'no sound/no-rezko.mp3',
    'no sound/no-zvuk.mp3',
    'no sound/oh-no-muj.mp3',
    'no sound/oh-no-komichn.mp3',
    'no sound/oh-nooo.mp3'
];

btn.addEventListener('click', () => {
    if (answer.value == 27) {
        label.style.opacity = '0';
        var audio = new Audio();
        audio.preload = 'auto';
        audio.src = 'yes sound/oh-yeah.mp3';
        audio.play();

        setTimeout(() => {
            present.classList.add('open');
        }, 3000);
        setTimeout(() => {
            speech.play();
            imgPresent.style.zIndex = 3;
            imgPresent.style.transform = 'scale(2)';
        }, 5000);


    } else {
        answer.value = '';
        var randomIndex = Math.floor(Math.random() * soundNo.length);
        var audio = new Audio();
        audio.preload = 'auto';
        audio.src = soundNo[randomIndex];
        audio.play();
    }
});




