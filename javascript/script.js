// Responsive Navbar
document.addEventListener("DOMContentLoaded", function () {
  const navbar = document.querySelector(".navbar");
  const navLinks = navbar.querySelectorAll("a");

  navLinks.forEach((link) => {
    link.addEventListener("click", function (e) {
      e.preventDefault();
      const targetSection = document.querySelector(this.getAttribute("href"));
      targetSection.scrollIntoView({ behavior: "smooth" });
    });
  });
});

// Simple Animation on Scroll
window.addEventListener("scroll", function () {
  const elements = document.querySelectorAll(".animate-on-scroll");
  elements.forEach((element) => {
    const position = element.getBoundingClientRect().top;
    const screenPosition = window.innerHeight / 1.3;
    if (position < screenPosition) {
      element.classList.add("active");
    }
  });
});

// JavaScript untuk animasi fade-in
window.addEventListener('scroll', function() {
  const elements = document.querySelectorAll('.fade-in');
  elements.forEach(element => {
    const position = element.getBoundingClientRect();
    if (position.top < window.innerHeight && position.bottom >= 0) {
      element.classList.add('show');
    } else {
      element.classList.remove('show');
    }
  });
});

// Memastikan elemen tampil saat pertama kali halaman dimuat
document.addEventListener('DOMContentLoaded', function() {
  const elements = document.querySelectorAll('.fade-in');
  elements.forEach(element => {
    const position = element.getBoundingClientRect();
    if (position.top < window.innerHeight && position.bottom >= 0) {
      element.classList.add('show');
    }
  });
});

// JavaScript untuk smooth scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();
    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
  });
});

function FirstNewProduct() {
  window.location.href = "https://shopee.co.id/NANJUNG-ABADI-Mukena-Anak-Perempuan-Resleting-6-12thn-Katun-Mikro-Motif-Bunga-Lucu-i.255690067.24080736509";
}

function SecondNewProduct() {
  window.location.href = "https://shopee.co.id/NANJUNG-ABADI-Mukena-Dewasa-Jumbo-Resleting-Motif-Bunga-Renda-Zipper-Dior-Silk-Premium-i.255690067.26358578395";
}

function FirstProduct() {
  window.location.href = "https://shopee.co.id/NANJUNG-ABADI-Mukena-Anak-Perempuan-Resleting-6-12thn-Katun-Mikro-Motif-Bunga-Lucu-i.255690067.24080736509?sp_atk=638cbe70-0288-4846-ab59-a7eb4e024998&xptdk=638cbe70-0288-4846-ab59-a7eb4e024998";
}

function SecondProduct() {
  window.location.href = "https://shopee.co.id/NANJUNG-ABADI-Mukena-Traveling-Dewasa-2in1-Resleting-Katun-Mikro-Polos-i.255690067.25530080276?sp_atk=75481115-741b-4c22-9fae-a4e6d4e6a72c&xptdk=75481115-741b-4c22-9fae-a4e6d4e6a72c";
}

function ThirdProduct() {
  window.location.href = "https://shopee.co.id/NANJUNG-ABADI-Mukena-Couple-Resleting-Ibu-dan-Anak-Motif-Etnic-Series-i.255690067.24632421535?sp_atk=ef997803-98ea-4c93-b656-b007dbc023a1&xptdk=ef997803-98ea-4c93-b656-b007dbc023a1";
}

function ForthProduct() {
  window.location.href = "https://shopee.co.id/NANJUNG-ABADI-Mukena-Traveling-Couple-Ibu-dan-Anak-2-in-1-Resleting-Katun-Mikro-Motif-Premium-i.255690067.27400075889?xptdk=170803c2-f231-44cf-b7c2-9ed60eaf18e2";
}
