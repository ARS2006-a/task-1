const keys = document.querySelectorAll('.key');
const noteCount = document.getElementById('noteCount');
const lastNote = document.getElementById('lastNote');

let count = 0;

const notes = {
    'a': 261.63, // C
    'w': 277.18, // C#
    's': 293.66, // D
    'e': 311.13, // D#
    'd': 329.63, // E
    'f': 349.23, // F
    't': 369.99, // F#
    'g': 392.00, // G
    'y': 415.30, // G#
    'h': 440.00, // A
    'u': 466.16, // A#
    'j': 493.88, // B
    'k': 523.25, // C2
    'o': 554.37, // C#2
    'l': 587.33  // D2
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
