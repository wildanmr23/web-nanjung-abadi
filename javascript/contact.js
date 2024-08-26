document.getElementById("contactForm").addEventListener("submit", function (e) {
  e.preventDefault();
  var name = document.getElementById("name").value;
  var email = document.getElementById("email").value;
  var message = document.getElementById("message").value;

  var whatsappMessage = `Hallo, nama saya ${name}.Email saya ${email}. ${message}`;

  var whatsappUrl = `https://wa.me/6282127312767?text=${encodeURIComponent(
    whatsappMessage
  )}`;
  window.open(whatsappUrl, "_blank");
});
