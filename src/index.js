import './styles.css';

const startBtnRef = document.querySelector('.start');
const stopBtnRef = document.querySelector('.stop');

const randomIntegerFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};
const colors = [
  '#FFFFFF',
  '#2196F3',
  '#4CAF50',
  '#FF9800',
  '#009688',
  '#795548',
];

let intervalId = null;
const start = () => {
  if (intervalId) {
    return;
  }
  intervalId = setInterval(() => {
    const colorId = randomIntegerFromInterval(0, colors.length - 1);
    document.body.style.background = colors[colorId];
  }, 1000);
};

const stop = () => {
  clearInterval(intervalId);
  intervalId = null;
};

startBtnRef.addEventListener('click', start);
stopBtnRef.addEventListener('click', stop);
