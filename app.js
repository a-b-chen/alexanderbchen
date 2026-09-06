(function () {
  // KaTeX (same delimiters as the original site; no SRI so the CDN loads cleanly)
  if (window.renderMathInElement) {
    renderMathInElement(document.body, {
      delimiters: [
        { left: "\\[", right: "\\]", display: true },
        { left: "\\(", right: "\\)", display: false }
      ],
      throwOnError: false
    });
  }

  // Band reveal (numbered aside + underline + content fade), same as original
  var bands = document.querySelectorAll(".band");
  if ("IntersectionObserver" in window) {
    var reveal = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        if (e.isIntersecting) { e.target.classList.add("in"); reveal.unobserve(e.target); }
      });
    }, { rootMargin: "0px 0px -12% 0px", threshold: 0.1 });
    bands.forEach(function (b) { reveal.observe(b); });
  } else {
    bands.forEach(function (b) { b.classList.add("in"); });
  }
})();
