import { isEscapeKey, isEnterKey } from './util.js';
import { createElement } from './createMiniatures.js';
//import './user-form.js';


const userModalElement = document.querySelector('.big-picture');
const userModalTitle = document.querySelector('.big-picture__title');

const userModalOpenElement = document.querySelector('.pictures');
const userModalCloseElement = userModalElement.querySelector('.big-picture__cancel');

const onDocumentKeydown = (evt) => {
  if (isEscapeKey(evt)) {
    evt.preventDefault();
    closeUserModal();
  }
};

const userModalOpen = () => {
  userModalElement.classList.remove('hidden');
  userModalTitle.classList.remove('visually-hidden');

  document.addEventListener('keydown', onDocumentKeydown);
};

userModalOpenElement.addEventListener('click', () => {
  userModalOpen();
});

function openUserModal() {
  userModalElement.classList.remove('hidden');
  //createElement();
}

function closeUserModal() {
  userModalElement.classList.add('hidden');

  document.removeEventListener('keydown', onDocumentKeydown);
}

userModalOpenElement.addEventListener('click', () => {
  openUserModal();
});

userModalOpenElement.addEventListener('keydown', (evt) => {
  if (isEnterKey(evt)) {
    openUserModal();
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
