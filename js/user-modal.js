import { isEscapeKey, isEnterKey } from './util.js';
import { pictureContainer } from './createMiniatures.js';
//import './user-form.js';


const modalElement = document.querySelector('.big-picture');
const modalElementTitle = document.querySelector('.big-picture__title');
const modalCloseElement = modalElement.querySelector('.big-picture__cancel');

const onDocumentKeydown = (evt) => {
  if (isEscapeKey(evt)) {
    evt.preventDefault();
    modalElement.classList.add('hidden');
    modalElementTitle.classList.add('visually-hidden');
    document.body.classList.remove('modal-open');
  }
};

const userModalOpen = (evt) => {
  if (evt.target.closest('.picture')) {
    modalElement.classList.remove('hidden');
    modalElementTitle.classList.remove('visually-hidden');
    document.body.classList.add('modal-open');
    document.addEventListener('keydown', onDocumentKeydown);
  }
};

const closeModal = () => {
  modalElement.classList.add('hidden');
  modalElementTitle.classList.add('visually-hidden');

  document.removeEventListener('keydown', onDocumentKeydown);
};

pictureContainer.addEventListener('click', userModalOpen);

pictureContainer.addEventListener('keydown', (evt) => {
  if (isEnterKey(evt)) {
    userModalOpen();
  }
});

modalCloseElement.addEventListener('click', () => {
  closeModal();
  document.body.classList.remove('modal-open');
});

modalCloseElement.addEventListener('keydown', (evt) => {
  if (isEnterKey(evt)) {
    closeModal();
  }
  document.body.classList.remove('modal-open');
});
