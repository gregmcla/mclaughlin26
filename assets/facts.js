/* Syncs every [data-fact] element with facts.json so no number can drift.
   Pages carry the current value inline, so nothing flashes and the site
   still reads correctly if this script never runs. */
(function () {
  var root = document.documentElement.getAttribute('data-root') || '';
  function get(obj, path) {
    return path.split('.').reduce(function (o, k) { return o == null ? o : o[k]; }, obj);
  }
  fetch(root + 'facts.json', { cache: 'no-cache' })
    .then(function (r) { return r.ok ? r.json() : null; })
    .then(function (facts) {
      if (!facts) return;
      document.querySelectorAll('[data-fact]').forEach(function (el) {
        var v = get(facts, el.getAttribute('data-fact'));
        if (v == null) return;
        if (Array.isArray(v)) v = v.join(', ');
        if (String(v) !== el.textContent.trim()) el.textContent = v;
      });
      document.querySelectorAll('[data-fact-href]').forEach(function (el) {
        var v = get(facts, el.getAttribute('data-fact-href'));
        if (v) el.setAttribute('href', v.indexOf('@') > -1 && v.indexOf('http') !== 0 ? 'mailto:' + v : v);
      });
    })
    .catch(function () { /* inline values stand */ });
})();
