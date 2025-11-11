// Simula el cursor parpadeante en el prompt del footer
const prompt = document.getElementById('prompt');
let show = true;
setInterval(() => {
  prompt.style.visibility = show ? 'hidden' : 'visible';
  show = !show;
}, 600);
