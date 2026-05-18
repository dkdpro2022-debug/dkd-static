(function () {
  document.documentElement.classList.add("dkd-enhanced");

  var body = document.body;
  if (!body) return;
  body.classList.add("dkd-redesign");

  document.querySelectorAll("img:not([loading])").forEach(function (img) {
    img.loading = "lazy";
  });

  document.querySelectorAll('a[href^="http"]').forEach(function (link) {
    if (link.hostname && link.hostname !== window.location.hostname) {
      link.rel = (link.rel ? link.rel + " " : "") + "noopener noreferrer";
    }
  });
})();

