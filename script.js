<script>
  console.log("AromAuto încărcat 🚗");

  document.querySelectorAll(".hero-btn, .header-right .buy-btn").forEach(btn => {
    btn.addEventListener("click", () => {
      window.location.href = "contact.html";
    });
  });

  // Închide meniul când se dă click pe un link din meniu
  document.querySelectorAll("#menu a").forEach(link => {
    link.addEventListener("click", function () {
      document.getElementById("menu").classList.remove("active");
      document.body.classList.remove("is-menu-visible");

      const href = this.getAttribute("href");
      if (href && !href.startsWith("#")) {
        setTimeout(() => {
          window.location.href = href;
        }, 100);
      }
    });
  });
</script>
