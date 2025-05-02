const target = document.getElementById("title-typing");

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      target.classList.add("typing");
      observer.unobserve(target);
    }
  });
});

observer.observe(target);

const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);

document.getElementById("contactForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const nome = document.getElementById("nome").value;
  const email = document.getElementById("email").value;
  const telefone = document.getElementById("telefone").value;
  const mensagem = document.getElementById("mensagem").value;

  const emailDestino = "newpescaartedapesca@gmail.com";
  const assunto =
    document.getElementById("assunto").value || "Mensagem do site";
  const corpo = `Nome: ${nome} \nEmail: ${email} \nTelefone: ${telefone} \n\n${mensagem}`;

  if (isMobile) {
    window.location.href = `mailto:${emailDestino}?subject=${encodeURIComponent(
      assunto
    )}&body=${encodeURIComponent(corpo)}`;
  } else {
    window.open(
      `https://mail.google.com/mail/?view=cm&fs=1&to=${emailDestino}&su=${encodeURIComponent(
        assunto
      )}&body=${encodeURIComponent(corpo)}`,
      "_blank"
    );
  }
});

const checkbox = document.getElementById("consentimento");
const botao = document.getElementById("enviar");

checkbox.addEventListener("change", function () {
  botao.disabled = !checkbox.checked;
});

const link = document.getElementById("emailtag");

if (isMobile) {
  link.href = "mailto:newpescaartedapesca@gmail.com";
} else {
  link.href =
    "https://mail.google.com/mail/?view=cm&fs=1&to=newpescaartedapesca@gmail.com";
}
