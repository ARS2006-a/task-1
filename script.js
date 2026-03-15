// ── DOM references ────────────────────────────────────────
const allKeyElements  = document.querySelectorAll('.key');
const noteCountEl     = document.getElementById('noteCount');
const lastNoteEl      = document.getElementById('lastNote');
const resetBtn        = document.getElementById('resetBtn');

// ── State ─────────────────────────────────────────────────
let totalNotesPlayed = 0;

// ── Key → frequency map (Hz) ──────────────────────────────
// Each keyboard letter maps to a piano note frequency.
const keyFrequencyMap = {
  a: 261.63,  // C4
  s: 293.66,  // D4
  d: 329.63,  // E4
  f: 349.23,  // F4
  g: 392.00,  // G4
  h: 440.00,  // A4
  j: 493.88,  // B4
  k: 523.25,  // C5
  l: 587.33,  // D5
};

// ── Audio context (lazy-initialised on first interaction) ──
// Browsers require a user gesture before allowing audio playback.
let audioCtx = null;

function getAudioContext() {
  if (!audioCtx) {
    audioCtx = new (window.AudioContext || window.webkitAudioContext)();
  }
  return audioCtx;
}

// ── Sound synthesis ────────────────────────────────────────
/**
 * Plays a single piano-like tone at the given frequency.
 * Uses a sine-wave oscillator with a quick volume fade-out
 * to mimic the natural decay of a piano note.
 *
 * @param {number} frequency - Note frequency in Hz
 */
function playNote(frequency) {
  const ctx        = getAudioContext();
  const oscillator = ctx.createOscillator();
  const gainNode   = ctx.createGain();

  // Route: oscillator → gain → speakers
  oscillator.connect(gainNode);
  gainNode.connect(ctx.destination);

  oscillator.type            = 'sine';
  oscillator.frequency.value = frequency;

  // Start at moderate volume, then fade to silence over 1 second
  gainNode.gain.setValueAtTime(0.3, ctx.currentTime);
  gainNode.gain.exponentialRampToValueAtTime(0.01, ctx.currentTime + 1);

  oscillator.start(ctx.currentTime);
  oscillator.stop(ctx.currentTime + 1);
}

// ── Key activation ─────────────────────────────────────────
/**
 * Visually activates a piano key, plays its note,
 * and updates the on-screen stats.
 *
 * @param {string} keyLetter - Single lowercase letter (e.g. "a")
 */
function activateKey(keyLetter) {
  const keyElement = document.querySelector(`[data-key="${keyLetter}"]`);
  if (!keyElement) return;

  // Highlight the key for 200 ms
  keyElement.classList.add('active');
  setTimeout(() => keyElement.classList.remove('active'), 200);

  const frequency = keyFrequencyMap[keyLetter];
  if (!frequency) return;

  // Play the note and update stats
  playNote(frequency);
  totalNotesPlayed++;
  noteCountEl.textContent = totalNotesPlayed;
  lastNoteEl.textContent  = keyElement.dataset.note;
}

// ── Reset stats ────────────────────────────────────────────
function resetStats() {
  totalNotesPlayed        = 0;
  noteCountEl.textContent = 0;
  lastNoteEl.textContent  = '—';
}

// ── Event listeners ────────────────────────────────────────

// Physical keyboard input
document.addEventListener('keydown', (event) => {
  const pressedKey = event.key.toLowerCase();
  if (keyFrequencyMap[pressedKey]) {
    activateKey(pressedKey);
  }
});

// Mouse / touch click on each piano key
allKeyElements.forEach((keyEl) => {
  keyEl.addEventListener('click', () => {
    activateKey(keyEl.dataset.key);
  });
});

// Reset button
resetBtn.addEventListener('click', resetStats);
