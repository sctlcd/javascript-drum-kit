// Play a sound and a transition when a keyboard key is hit
function playSound(e) {
  const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
  const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
  if (!audio) return; // stop the function from running all together
  audio.currentTime = 0; // rewind to the start
  audio.play();
  key.classList.add('playing');
};

// Remove the transition
function removeTransition(e) {
  if (e.propertyName !== 'transform') return; // skip if event propertyName isn't a transform
  this.classList.remove('playing');
};

const keys = document.querySelectorAll('.key');
keys.forEach(key => key.addEventListener('transitionend', removeTransition));

// Keydown Event listener
window.addEventListener('keydown', playSound);
