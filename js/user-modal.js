import { isEscapeKey, isEnterKey } from './util.js';
import { createElement } from './createMiniatures.js';
//import './user-form.js';


const userModalElement = document.querySelector('.big-picture');
const userModalTitle = document.querySelector('.big-picture__title');

const userModalOpenElement = document.querySelector('.pictures').querySelector('.picture');
const userModalCloseElement = userModalElement.querySelector('.big-picture__cancel');

const onDocumentKeydown = (evt) => {
  if (isEscapeKey(evt)) {
    evt.preventDefault();
    closeUserModal();
  }
};

function userModalOpen() {
  userModalElement.classList.remove('hidden');
  userModalTitle.classList.remove('visually-hidden');

  document.addEventListener('keydown', onDocumentKeydown);
}

function closeUserModal() {
  userModalElement.classList.add('hidden');
  userModalTitle.classList.add('visually-hidden');

  document.removeEventListener('keydown', onDocumentKeydown);
}

userModalOpenElement.addEventListener('click', () => {
  userModalOpen();
});

userModalOpenElement.addEventListener('keydown', (evt) => {
  if (isEnterKey(evt)) {
    userModalOpen();
  }
});

userModalCloseElement.addEventListener('click', () => {
  closeUserModal();
});

userModalCloseElement.addEventListener('keydown', (evt) => {
  if (isEnterKey(evt)) {
    closeUserModal();
  }
});
