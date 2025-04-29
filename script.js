function expandQuest(e) {
  const el = e.currentTarget;
  el.classList.toggle("active");
}

const target = document.getElementById("title-typing");

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      target.classList.add("typing");
      observer.unobserve(target); // remove o observer após a primeira vez
    }
  });
});

observer.observe(target);
