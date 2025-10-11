let texto = document.querySelector('h1');
let  hero = document.querySelector('.hero');

hero.addEventListener('mousemove', (e) => {
  let x = e.offsetX;
  let y = e.offsetY;
  let { offsetWidth: width, offsetHeight: height } = hero;
  let moveX = Math.round((x / width * 100) - 50);
  let moveY = Math.round((y / height * 100) - 50);

  texto.style.textShadow = `${moveX}px ${moveY}px 5px rgba(38, 6, 248, 0.7)`;
});