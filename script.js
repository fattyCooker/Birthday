document.addEventListener('DOMContentLoaded', function() {
  const candles = document.querySelectorAll('.candle');
  for (let i = 0; i < candles.length; i++) {
    candles[i].style.animationDelay = `${i * 0.2}s`;
  }
});

document.addEventListener('DOMContentLoaded', function() {
  const candles = document.querySelectorAll('.candle');
  for (let i = 0; i < candles.length; i++) {
    candles[i].style.animationDelay = `${i * 0.2}s`;

    // Add ignite animation to the flames
    const flame = candles[i].querySelector('.flame');
    flame.style.animationDelay = `${i * 0.2}s`;
    flame.style.animationDuration = `1s`;
  }
});

function createFirework() {
  const fireworksContainer = document.querySelector('.fireworks');
  const firework = document.createElement('div');
  firework.classList.add('firework');
  fireworksContainer.appendChild(firework);

  const colors = ['#ff0000', '#00ff00', '#0000ff', '#ffff00', '#ff00ff', '#00ffff']; // Add more colors as needed

  const randomColor = colors[Math.floor(Math.random() * colors.length)];
  firework.style.backgroundColor = randomColor;

  const x = Math.random() * window.innerWidth;
  const y = Math.random() * window.innerHeight;
  const delay = Math.random() * 5;

  firework.style.left = `${x}px`;
  firework.style.top = `${y}px`;
  firework.style.animationDelay = `${delay}s`;

  setTimeout(() => {
    firework.remove();
  }, 2400);
}

setInterval(createFirework, 800);


const playButton = document.getElementById('playButton');
const bgMusic = document.getElementById('bgMusic');
const songName = document.getElementById('songName');
const songTime = document.getElementById('songTime');

const formatTime = (time) => {
  const minutes = Math.floor(time / 60);
  const seconds = Math.floor(time % 60);
  const formattedTime = `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
  return formattedTime;
};

bgMusic.addEventListener('loadedmetadata', () => {
  const duration = bgMusic.duration;
  songTime.textContent = formatTime(duration);
});

bgMusic.addEventListener('timeupdate', () => {
  const currentTime = bgMusic.currentTime;
  songTime.textContent = formatTime(currentTime);
});

playButton.addEventListener('click', function() {
  if (bgMusic.paused) {
    bgMusic.play();
    playButton.textContent = 'Pause Music';
    songName.textContent = 'Your Song Name'; // Replace with your song name
  } else {
    bgMusic.pause();
    playButton.textContent = 'Play Music';
  }
});

function toggleCard() {
  const card = document.querySelector('.card');
  card.classList.toggle('opened');
}