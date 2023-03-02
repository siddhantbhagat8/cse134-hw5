const logo = document.querySelector('.logo');

logo.addEventListener('mousemove', (event) => {
  const x = event.clientX - event.target.offsetLeft;
  const y = event.clientY - event.target.offsetTop;

  logo.style.transform = `rotateX(${y / 5}deg) rotateY(${x / 5}deg)`;
});

logo.addEventListener('mouseleave', () => {
  logo.style.transform = 'rotateX(0) rotateY(0)';
});