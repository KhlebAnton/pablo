const btn = document.getElementById('btn');
const answer = document.getElementById('answer');
const present = document.getElementById('present');
const label = document.getElementById('label');
const imgPresent = document.getElementById('img-present');
const speech = document.getElementById('speech');
const audio = new Audio();
audio.preload = 'auto';
audio.volume = 0.3;

document.getElementById('bg-sound').volume = 0.2;
present.addEventListener('click', () => { document.getElementById('bg-sound').play() });
btn.addEventListener('click', () => { document.getElementById('bg-sound').play() })
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
        audio.src = 'yes sound/oh-yeah.mp3';
        audio.play();

        setTimeout(() => {
            present.classList.add('open');
        }, 3000);
        setTimeout(() => {
            imgPresent.style.zIndex = 3;
            imgPresent.style.transform = 'scale(2)';
            speech.volume = 1;
            speech.play();
            setTimeout(() => {
                imgPresent.addEventListener('click', () => {
                    var randomIndex = Math.floor(Math.random() * soundNo.length);
                    audio.src = soundNo[randomIndex];
                    audio.play();
                })
            }, 14000)
        }, 5000);


    } else {
        answer.value = '';
        var randomIndex = Math.floor(Math.random() * soundNo.length);
        audio.src = soundNo[randomIndex];
        audio.play();
    }
});




