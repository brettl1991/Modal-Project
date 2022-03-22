'use strict';
const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.close-modal');
const btnsShowModal = document.querySelectorAll('.show-modal');

const showModal = function () {
  console.log('Button clicked');
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

for (let i = 0; i < btnsShowModal.length; i++)
  btnsShowModal[i].addEventListener('click', showModal);

btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

//how to find out when the esc key been pressed, js call this function when a keydown event happens and when you do so please pass in the event object as an argument
document.addEventListener('keydown', function (e) {
  //e stands for event
  console.log(e); //creating this object: KeyboardEvent {isTrusted: true, key: 'Enter', code: 'Enter', location: 0, ctrlKey: false, …}
  console.log(e.key); //getting back the key name that we pressed
  ////we can check if an element has a certain class with .contains
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});
