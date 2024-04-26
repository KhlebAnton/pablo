const btn = document.getElementById('btn');
const answer = document.getElementById('answer');
const present = document.getElementById('present');
const label = document.getElementById('label');
const imgPresent = document.getElementById('img-present');


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
        present.classList.add('open');
        
        setTimeout(() => {
            var audio = new Audio();
            audio.preload = 'auto';
            audio.src = 'speech.mp3';
            audio.canPlayType('audio/mp3; codecs="vorbis"');
            audio.play();
            imgPresent.style.zIndex = 3;
            imgPresent.style.transform = 'scale(2)';    
        }, 2000);


    } else {
        answer.value = '';
        var randomIndex = Math.floor(Math.random() * soundNo.length);
        var audio = new Audio();
        audio.preload = 'auto';
        audio.src = soundNo[randomIndex];
        audio.play();
    }
});




