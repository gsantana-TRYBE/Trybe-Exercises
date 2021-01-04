let clickCount = 0;
let textNumberOfClicks = document.getElementById('text');

document.getElementById('btn').addEventListener('click', () => {
  textNumberOfClicks.innerHTML = clickCount += 1;
})