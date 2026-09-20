/*
 * Off-canvas / lightbox toggling for the static export.
 *
 * The exported markup keeps Flatsome's `data-open="#target"` triggers (mobile
 * menu, search lightbox) and the matching Magnific Popup styles, but the theme
 * JavaScript that wires them up is not part of this repository. This script
 * rebuilds the DOM structure those styles expect:
 *
 *   .mfp-bg                              <- backdrop
 *   .mfp-wrap > .mfp-container > .mfp-content > <target element>
 *
 * Adding `mfp-ready` one frame later lets the CSS transitions run, and
 * `mfp-removing` plays them backwards on close.
 */
(function () {
  'use strict';

  // Long enough for the slowest .mfp-content transition (0.5s) to finish.
  var CLOSE_DELAY_MS = 500;

  var current = null;

  function closeButtonMarkup() {
    var lightbox = window.flatsomeVars && window.flatsomeVars.lightbox;
    if (lightbox && lightbox.close_markup) {
      return lightbox.close_markup.replace(/%title%/g, 'Đóng');
    }
    return '<button title="Đóng" type="button" class="mfp-close">×</button>';
  }

  function element(tag, className) {
    var node = document.createElement(tag);
    node.className = className;
    return node;
  }

  function popupClasses(trigger) {
    var classes = ['mfp-close-btn-in', 'mfp-auto-cursor'];
    var position = trigger.getAttribute('data-pos');
    var color = trigger.getAttribute('data-color');

    if (position) {
      classes.push('off-canvas', 'off-canvas-' + position);
    }
    if (color) {
      classes.push(color);
    }
    return classes;
  }

  function open(trigger) {
    var target = document.querySelector(trigger.getAttribute('data-open'));
    if (!target) {
      return;
    }

    if (current) {
      close(true);
    }

    var classes = popupClasses(trigger);
    var backdropClass = trigger.getAttribute('data-bg');
    var position = trigger.getAttribute('data-pos');

    var backdrop = element('div', ['mfp-bg'].concat(classes, backdropClass || []).join(' '));
    var wrap = element('div', ['mfp-wrap'].concat(classes).join(' '));
    var container = element('div', 'mfp-container mfp-inline-holder');
    var content = element('div', 'mfp-content');

    wrap.setAttribute('tabindex', '-1');
    wrap.innerHTML = closeButtonMarkup();
    container.appendChild(content);
    wrap.appendChild(container);

    current = {
      trigger: trigger,
      target: target,
      backdrop: backdrop,
      wrap: wrap,
      parent: target.parentNode,
      nextSibling: target.nextSibling,
      hidden: target.classList.contains('mfp-hide'),
      overflow: document.documentElement.style.overflow
    };

    content.appendChild(target);
    target.classList.remove('mfp-hide');

    document.body.appendChild(backdrop);
    document.body.appendChild(wrap);
    document.documentElement.style.overflow = 'hidden';
    if (position) {
      document.documentElement.classList.add('has-off-canvas', 'has-off-canvas-' + position);
    }
    trigger.setAttribute('aria-expanded', 'true');

    // Force a reflow so the browser animates from the initial (hidden) state.
    void wrap.offsetHeight;
    backdrop.classList.add('mfp-ready');
    wrap.classList.add('mfp-ready');

    var focusSelector = trigger.getAttribute('data-focus');
    if (focusSelector) {
      var focusTarget = target.querySelector(focusSelector);
      if (focusTarget) {
        focusTarget.focus();
      }
    }
  }

  function close(immediate) {
    if (!current) {
      return;
    }

    var state = current;
    current = null;

    function restore() {
      if (state.hidden) {
        state.target.classList.add('mfp-hide');
      }
      state.parent.insertBefore(state.target, state.nextSibling);
      state.backdrop.remove();
      state.wrap.remove();
    }

    document.documentElement.style.overflow = state.overflow;
    document.documentElement.classList.remove(
      'has-off-canvas',
      'has-off-canvas-left',
      'has-off-canvas-right',
      'has-off-canvas-center'
    );
    state.trigger.setAttribute('aria-expanded', 'false');

    if (immediate) {
      restore();
      return;
    }

    state.backdrop.classList.add('mfp-removing');
    state.wrap.classList.add('mfp-removing');
    setTimeout(restore, CLOSE_DELAY_MS);
  }

  document.addEventListener('click', function (event) {
    var trigger = event.target.closest('[data-open]');
    if (trigger) {
      event.preventDefault();
      open(trigger);
      return;
    }

    if (!current) {
      return;
    }

    // Clicking the backdrop or the empty area around the panel closes it;
    // clicking a link inside the panel is left alone so navigation still works.
    if (event.target.closest('.mfp-close')) {
      event.preventDefault();
      close();
    } else if (!event.target.closest('.mfp-content') && current.wrap.contains(event.target)) {
      close();
    } else if (event.target === current.backdrop) {
      close();
    }
  });

  document.addEventListener('keydown', function (event) {
    if (event.key === 'Escape' && current) {
      close();
    }
  });
})();
