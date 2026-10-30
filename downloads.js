// Refresh the Hugging Face download counts. The numbers written in the HTML are the
// fallback, so the page still reads correctly if the request fails.
(function () {
  var models = ['Sivasuthan/fovea-4b', 'mradermacher/fovea-4b-GGUF'];

  function show(key, n) {
    document.querySelectorAll('[data-hf="' + key + '"]').forEach(function (el) {
      el.textContent = n.toLocaleString('en');
    });
  }

  Promise.all(models.map(function (m) {
    return fetch('https://huggingface.co/api/models/' + m + '?expand%5B%5D=downloadsAllTime')
      .then(function (r) { return r.json(); })
      .then(function (d) { return d.downloadsAllTime; });
  })).then(function (counts) {
    if (!counts.every(function (n) { return typeof n === 'number'; })) return;
    var total = 0;
    counts.forEach(function (n, i) { show(models[i], n); total += n; });
    show('total', total);
    document.querySelectorAll('[data-hf="asof"]').forEach(function (el) {
      el.textContent = 'live from Hugging Face';
    });
  }).catch(function () {});
})();
