const btn = document.getElementById('btn');
const answer = document.getElementById('answer');
const present = document.getElementById('present');
const label = document.getElementById('label');
const imgPresent = document.getElementById('img-present');

btn.addEventListener('click', ()=> {
    var audioSoun = new Audio();
    audioSoun.preload = 'auto';
    audioSoun.src = 'sound.mp3';
    audioSoun.volume = 0.3;
    audioSoun.play();
});

function playNO() {
    var randomIndex = Math.floor(Math.random() * soundNo.length);
    var audioNo = new Audio();
    audioNo.preload = 'auto';
    audioNo.src = soundNo[randomIndex];
    audioNo.play();
};
function playYes() {
    var audioYes = new Audio();
    audioYes.preload = 'auto';
    audioYes.src = 'yes sound/oh-yeah.mp3';
    audioYes.play();
}

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
        playYes();
        label.style.opacity = '0';
        present.classList.add('open');

        setTimeout(() => {
            var audio = new Audio();
            audio.preload = 'auto';
            audio.src = 'speech.mp3';
            audio.play();
            imgPresent.style.zIndex = 3;
            imgPresent.style.transform = 'scale(2)';
        }, 2000);


    } else {
        answer.value = '';
        playNO();
    }
});




