const stickyTop = document.querySelector('.sticky-top');
const offcanvas = document.querySelector('.offcanvas');

offcanvas.addEventListener('show.bs.offcanvas', function () {
  setOverflowVisible(stickyTop);
});

offcanvas.addEventListener('hidden.bs.offcanvas', function () {
  setOverflowHidden(stickyTop);
});

function setOverflowVisible(element) {
  element.style.overflow = 'visible';
}

function setOverflowHidden(element) {
  element.style.overflow = 'hidden';
}
``
