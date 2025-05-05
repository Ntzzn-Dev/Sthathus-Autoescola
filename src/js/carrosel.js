const carrossel = document.querySelector(".carrossel");
const sessoes = document.querySelectorAll(".carrossel section");
const prevBtn = document.querySelector(".prev");
const nextBtn = document.querySelector(".next");

let index = 0;

function updateCarrossel() {
  const largura = sessoes[0].clientWidth;
  carrossel.style.transform = `translateX(${-index * largura}px)`;
}

nextBtn.addEventListener("click", () => {
  if (index < sessoes.length - 1) {
    index++;
  } else {
    index = 0;
  }
  updateCarrossel();
  resetAutoplay();
});

prevBtn.addEventListener("click", () => {
  if (index > 0) {
    index--;
  } else {
    index = sessoes.length - 1;
  }
  updateCarrossel();
  resetAutoplay();
});

window.addEventListener("resize", updateCarrossel);

let intervalo = setInterval(() => {
  index = (index + 1) % sessoes.length;
  updateCarrossel();
}, 7000);

function resetAutoplay() {
  clearInterval(intervalo);
  intervalo = setInterval(() => {
    index = (index + 1) % sessoes.length;
    updateCarrossel();
  }, 7000);
}
