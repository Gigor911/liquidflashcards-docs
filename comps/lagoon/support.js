// Shim for exported design comps (<x-dc>/<helmet> wrappers). Works opened directly or inside an iframe.
(function () {
  function unwrapDc(doc) {
    var helmet = doc.querySelector('helmet');
    if (helmet) {
      while (helmet.firstChild) doc.head.appendChild(helmet.firstChild);
      helmet.remove();
    }
    var dc = doc.querySelector('x-dc');
    if (dc) {
      while (dc.firstChild) dc.parentNode.insertBefore(dc.firstChild, dc);
      dc.remove();
    }
    var scripts = doc.querySelectorAll('script[type="text/x-dc"]');
    for (var i = 0; i < scripts.length; i++) scripts[i].remove();
  }
  if (typeof module !== 'undefined' && module.exports) module.exports = { unwrapDc: unwrapDc };
  if (typeof document !== 'undefined') {
    var run = function () { unwrapDc(document); };
    if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', run);
    else run();
  }
})();
