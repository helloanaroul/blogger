(function(){
  const e = document.getElementById("whatsappFab"),
        t = document.getElementById("waLabel"),
        n = (e.getAttribute("data-position") || "right").toLowerCase();

  if (n === "left") {
    document.documentElement.style.setProperty("--wa-right", "auto");
    document.documentElement.style.setProperty("--wa-bottom", getComputedStyle(document.documentElement).getPropertyValue("--wa-bottom") || "28px");
    e.style.left = "28px";
    t.style.right = "auto";
    t.style.left = "calc(28px + var(--wa-size) + 12px)";
  }

  function a(t) { return (t || "").replace(/\D+/g, ""); }
  function o(t, n) {
    const e = a(t),
          o = encodeURIComponent(n || "Hello");
    return `https://wa.me/${e}?text=${o}`;
  }

  e.addEventListener("click", function(){
    const t = e.getAttribute("data-phone"),
          n = e.getAttribute("data-text");
    if (!t) return console.warn("[WA] Missing data-phone");
    const a = o(t, n);
    window.open(a, "_blank", "noopener");
  });

  window.WhatsAppFab = {
    setPhone: t => { e.setAttribute("data-phone", t); },
    setText: t => { e.setAttribute("data-text", t); },
    setPosition: t => { e.setAttribute("data-position", t); location.reload(); }
  };
})();
