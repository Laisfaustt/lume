const products = {
  lavanda: {
    title: "Lavanda",
    category: "01 / CALMA",
    scent: "Leve, relaxante e tranquila.",
    description: "Traz calma, alivia o estresse e ajuda a relaxar. Ideal para uma noite mais leve e tranquila.",
    price: "R$ 15,00",
    image: "assets/lavanda.jpg"
  },
  baunilha: {
    title: "Baunilha",
    category: "02 / CONFORTO",
    scent: "Doce, envolvente e acolhedora.",
    description: "Aroma doce e envolvente, pensado para trazer conforto e tranquilidade. Perfeita para momentos de paz.",
    price: "R$ 17,00",
    image: "assets/baunilha.jpg"
  },
  cerejeira: {
    title: "Flor de Cerejeira",
    category: "03 / RENOVAÇÃO",
    scent: "Leve, delicada e renovadora.",
    description: "Traz uma sensação de renovação e leveza. Perfeita para quem busca equilíbrio e bem-estar.",
    price: "R$ 18,00",
    image: "assets/cerejeira.jpg"
  },
  madeira: {
    title: "Madeira",
    category: "04 / INTENSIDADE",
    scent: "Marcante, sofisticada e aconchegante.",
    description: "Aroma marcante e sofisticado, com um toque de aconchego. Ideal para quem gosta de intensidade e personalidade.",
    price: "R$ 20,00",
    image: "assets/madeira.jpg"
  }
};

const modal = document.querySelector("#productModal");
const modalImage = document.querySelector("#modalImage");
const modalTitle = document.querySelector("#modalTitle");
const modalCategory = document.querySelector("#modalCategory");
const modalScent = document.querySelector("#modalScent");
const modalDescription = document.querySelector("#modalDescription");
const modalPrice = document.querySelector("#modalPrice");

document.querySelectorAll(".product-card").forEach(card => {
  card.addEventListener("click", () => {
    document.querySelectorAll(".product-card").forEach(c => c.classList.remove("active"));
    card.classList.add("active");

    const product = products[card.dataset.product];
    modalImage.src = product.image;
    modalImage.alt = `Vela LUME ${product.title}`;
    modalTitle.textContent = product.title;
    modalCategory.textContent = product.category;
    modalScent.textContent = product.scent;
    modalDescription.textContent = product.description;
    modalPrice.textContent = product.price;

    modal.classList.add("open");
    modal.setAttribute("aria-hidden", "false");
    document.body.style.overflow = "hidden";
  });
});

document.querySelectorAll("[data-close]").forEach(el => {
  el.addEventListener("click", closeModal);
});

function closeModal() {
  modal.classList.remove("open");
  modal.setAttribute("aria-hidden", "true");
  document.body.style.overflow = "";
  document.querySelectorAll(".product-card").forEach(c => c.classList.remove("active"));
}

document.addEventListener("keydown", e => {
  if (e.key === "Escape") closeModal();
});

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("visible");
      observer.unobserve(entry.target);
    }
  });
}, { threshold: .12 });

document.querySelectorAll(".reveal").forEach(el => observer.observe(el));

const topbar = document.querySelector(".topbar");
window.addEventListener("scroll", () => {
  topbar.classList.toggle("scrolled", window.scrollY > 40);
});
