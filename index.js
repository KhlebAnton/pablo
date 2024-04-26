const btn = document.getElementById('btn');
const answer = document.getElementById('answer');
const present = document.getElementById('present');
const label = document.getElementById('label');
const imgPresent = document.getElementById('img-present')

document.getElementById('bg-sound').volume = 0.2;
present.addEventListener('click', () => { document.getElementById('bg-sound').play() })
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
            var speech = new speech();
            speech.preload = 'auto';
            speech.src = 'speech.mp3';
            speech.volume = 1;
            speech.play();
            imgPresent.style.zIndex = 3;
            imgPresent.style.transform = 'scale(2)';
            setTimeout(() => {
                imgPresent.addEventListener('click', () => {
                    var randomIndex = Math.floor(Math.random() * soundNo.length);
                    var audio = new Audio();
                    audio.preload = 'auto';
                    
                    audio.src = soundNo[randomIndex];
                    audio.play();
                })
            }, 14000)
        }, 5000);


    } else {
        answer.value = '';
        var randomIndex = Math.floor(Math.random() * soundNo.length);
        var audio = new Audio();
        audio.preload = 'auto';
        audio.volume = 0.3;
        audio.src = soundNo[randomIndex];
        audio.play();
    }
});




