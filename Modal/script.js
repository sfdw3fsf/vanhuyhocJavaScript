'use strict';
const show = document.querySelectorAll('.show-modal');
const close = document.querySelector('.close-modal');
const hidden = document.querySelector('.hidden');
const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const openModal = function () {
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
}
const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
}

console.log(show);
console.log(show[0]);

for (let i = 0; i < show.length; i++) {
  // console.log(show[i]);

  show[i].addEventListener('click', openModal)
}

close.addEventListener('click', closeModal)
overlay.addEventListener('click', closeModal)

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape') {
    if (!modal.classList.contains('hidden')) {
      closeModal();
    }
  }
})