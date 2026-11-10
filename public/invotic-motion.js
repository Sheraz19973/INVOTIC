/* INVOTIC motion layer v1.0
   Works on top of the built React site without changing it.
   Safe to remove: delete the two invotic-motion lines from index.html. */
(function () {
  'use strict';
  if (window.__invoticMotion) return;
  window.__invoticMotion = '1.0';

  var reduce = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  /* 01 — split the hero headline into words so each can rise in */
  function headline() {
    var h = document.querySelector('#home h1');
    if (!h || h.getAttribute('data-im')) return;
    h.setAttribute('data-im', '1');
    if (reduce) return;
    var i = 0;
    Array.prototype.slice.call(h.childNodes).forEach(function (n) {
      if (n.nodeType === 3) {
        if (!n.nodeValue.trim()) return;
        var frag = document.createDocumentFragment();
        n.nodeValue.split(/(\s+)/).forEach(function (part) {
          if (!part) return;
          if (/^\s+$/.test(part)) { frag.appendChild(document.createTextNode(part)); return; }
          var s = document.createElement('span');
          s.className = 'im-w';
          s.style.setProperty('--i', i++);
          s.textContent = part;
          frag.appendChild(s);
        });
        h.replaceChild(frag, n);
      } else if (n.nodeType === 1 && n.tagName === 'SPAN') {
        /* red words ("TIC", "YouTube") stay as they are; "TIC" moves together with "INVO" */
        var prev = n.previousSibling;
        var joined = prev && prev.nodeType === 1 && prev.className === 'im-w';
        n.classList.add('im-j');
        n.style.setProperty('--i', joined ? i - 1 : i++);
      }
    });
  }

  /* 03 — stat numbers count up when they come into view */
  var io = null;
  function run(p) {
    var d = p.__im;
    if (!d || d.done) return;
    d.done = true;
    var t0 = performance.now();
    (function step(t) {
      var k = Math.min(1, (t - t0) / 1500);
      var e = 1 - Math.pow(1 - k, 3);
      d.node.nodeValue = Math.round(d.from + (d.to - d.from) * e) + d.suffix;
      if (k < 1) requestAnimationFrame(step);
      else d.node.nodeValue = d.final;
    })(t0);
  }
  function counters() {
    var home = document.getElementById('home');
    if (!home || home.getAttribute('data-imc')) return;
    var ps = Array.prototype.filter.call(home.querySelectorAll('p'), function (p) {
      return p.childNodes.length === 1 && p.firstChild.nodeType === 3 &&
        /^\d{1,4}[+%]?$/.test(p.firstChild.nodeValue.trim());
    });
    if (!ps.length) return;
    home.setAttribute('data-imc', '1');
    if (reduce || !('IntersectionObserver' in window)) return;
    if (!io) {
      io = new IntersectionObserver(function (entries) {
        entries.forEach(function (en) {
          if (en.isIntersecting) { io.unobserve(en.target); run(en.target); }
        });
      }, { threshold: 0.6 });
    }
    ps.forEach(function (p) {
      var node = p.firstChild, final = node.nodeValue;
      var m = final.trim().match(/^(\d+)(.*)$/);
      var to = +m[1];
      var from = to > 1000 ? to - 16 : 0;   /* a year counts up from 16 years earlier, not from 0 */
      p.__im = { node: node, final: final, to: to, from: from, suffix: m[2], done: false };
      p.classList.add('im-count');
      /* the real number stays in the page until the count starts, so it can never get stuck at 0 */
      io.observe(p);
    });
  }

  /* 07 — tell each card where the cursor is so the glow can follow it */
  document.addEventListener('pointermove', function (e) {
    if (e.pointerType && e.pointerType !== 'mouse') return;
    var t = e.target;
    var card = t && t.closest ? t.closest('.immersive-card') : null;
    if (!card) return;
    var r = card.getBoundingClientRect();
    card.style.setProperty('--im-x', (e.clientX - r.left) + 'px');
    card.style.setProperty('--im-y', (e.clientY - r.top) + 'px');
  }, { passive: true });

  function init() {
    try { headline(); } catch (err) { /* headline stays as normal text */ }
    try { counters(); } catch (err) { /* numbers stay as they are */ }
  }

  /* the site is a single-page app: re-run whenever the home page is drawn again */
  var queued = false;
  function schedule() {
    if (queued) return;
    queued = true;
    /* setTimeout, not requestAnimationFrame: rAF is paused in background tabs */
    setTimeout(function () { queued = false; init(); }, 30);
  }
  function start() {
    init();
    if ('MutationObserver' in window) {
      new MutationObserver(schedule).observe(document.body, { childList: true, subtree: true });
    }
  }
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', start);
  else start();
})();
