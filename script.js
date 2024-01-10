'use strict';

// it is modal hidden
const modal = document.querySelector('.modal');
const showModal = document.querySelectorAll('.show-modal');
const closeModal = document.querySelector('.close-modal');
const overLay = document.querySelector('.overlay');

const removeClassList = function () {
  modal.classList.remove('hidden');
  overLay.classList.remove('hidden');
};

const addClassList = function () {
  modal.classList.add('hidden');
  overLay.classList.add('hidden');
};

for (let i = 0; i < showModal.length; i++) {
  showModal[i].addEventListener('click', removeClassList);
}

closeModal.addEventListener('click', addClassList);
overLay.addEventListener('click', addClassList);

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    addClassList();
  }
});
