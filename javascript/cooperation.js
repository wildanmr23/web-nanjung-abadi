document.addEventListener("DOMContentLoaded", function () {
  const cards = document.querySelectorAll(".card");
  cards.forEach((card) => {
    setTimeout(() => {
      card.classList.add("show");
    }, 200);
  });
});

// KIRIM FORM
document
  .getElementById("travelForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    // Mengambil nilai dari input form
    let namaTravel = document.getElementById("namaTravel").value;
    let alamatTravel = document.getElementById("alamatTravel").value;

    // Membuat pesan yang akan dikirim ke WhatsApp
    let message = `Hallo Nanjung Abadi saya ingin bekerja sama dalam pengadaan alat ibadah atau bordir di travel kami. Berikut sedikit informasi terkait travel.\nNama Travel : ${namaTravel}\nAlamat : ${alamatTravel}`;

    // Mengencode pesan agar bisa dikirim via URL
    let encodedMessage = encodeURIComponent(message);

    // Nomor WhatsApp tujuan (ganti dengan nomor tujuan Anda)
    let whatsappNumber = "6282127312767";

    // Membuat URL WhatsApp API
    let whatsappURL = `https://api.whatsapp.com/send?phone=${whatsappNumber}&text=${encodedMessage}`;

    // Membuka URL WhatsApp di tab baru
    window.open(whatsappURL, "_blank");
  });
