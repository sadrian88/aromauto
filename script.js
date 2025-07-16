console.log("AromAuto încărcat 🚗");

document.querySelectorAll(".hero-btn, .header-right .buy-btn").forEach(btn => {
  btn.addEventListener("click", () => {
    window.location.href = "contact.html";
  });
});

