// https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/removeEventListener
// https://stackoverflow.com/questions/4770025/how-to-disable-scrolling-temporarily

const keys: { [key: string]: boolean } = {
  ArrowLeft: true,
  ArrowUp: true,
  ArrowRight: true,
  ArrowDown: true,
  PageUp: false,
  PageDown: false,
  End: false,
  Home: false,
  ' ': false,
};

function preventDefault(e: Event) {
  e.preventDefault();
}

function preventKeys(e: KeyboardEvent) {
  if (keys[e.key] || keys[e.code]) {
    preventDefault(e);
    return false;
  }
}

const wheelEvent =
  'onwheel' in document.createElement('div') ? 'wheel' : 'mousewheel';

export function disableScroll() {
  window.addEventListener('DOMMouseScroll', preventDefault, false); // older FF
  window.addEventListener(wheelEvent, preventDefault, { passive: false }); // modern desktop
  window.addEventListener('touchmove', preventDefault, { passive: false }); // mobile
  //window.addEventListener('keydown', preventKeys, false); // desktop key scrolling
}

export function enableScroll() {
  window.removeEventListener('DOMMouseScroll', preventDefault, false);
  window.removeEventListener(wheelEvent, preventDefault);
  window.removeEventListener('touchmove', preventDefault);
  //window.removeEventListener('keydown', preventKeys, false);
}
