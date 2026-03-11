const keys = document.querySelectorAll('.key');
const noteCount = document.getElementById('noteCount');
const lastNote = document.getElementById('lastNote');

let count = 0;

const notes = {
    'a': 261.63,
    's': 293.66,
    'd': 329.63,
    'f': 349.23,
    'g': 392.00,
    'h': 440.00,
    'j': 493.88,
    'k': 523.25,
    'l': 587.33
};

const audioContext = new (window.AudioContext || window.webkitAudioContext)();

function playNote(frequency) {
    const oscillator = audioContext.createOscillator();
    const gainNode = audioContext.createGain();
    
    oscillator.connect(gainNode);
    gainNode.connect(audioContext.destination);
    
    oscillator.frequency.value = frequency;
    oscillator.type = 'sine';
    
    gainNode.gain.setValueAtTime(0.3, audioContext.currentTime);
    gainNode.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + 1);
    
    oscillator.start(audioContext.currentTime);
    oscillator.stop(audioContext.currentTime + 1);
}

function activateKey(key) {
    const keyElement = document.querySelector(`[data-key="${key}"]`);
    if(!keyElement) return;
    
    keyElement.classList.add('active');
    setTimeout(() => {
        keyElement.classList.remove('active');
    }, 200);
    
    const frequency = notes[key];
    if(frequency) {
        playNote(frequency);
        count++;
        noteCount.textContent = count;
        lastNote.textContent = keyElement.dataset.note;
    }
}

document.addEventListener('keydown', (e) => {
    const key = e.key.toLowerCase();
    if(notes[key]) {
        activateKey(key);
    }
});

keys.forEach(key => {
    key.addEventListener('click', () => {
        const keyLetter = key.dataset.key;
        activateKey(keyLetter);
    });
});
