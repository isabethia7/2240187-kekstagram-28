import { isEscapeKey } from './util.js';

//export const photoForm = document.querySelector('.setup-picture-form');
const uploadPhotoSection = document.querySelector('.img-upload__overlay');
//const uploadPhotoTitle = document.querySelector('.img-upload__title');
//const upoadInput = document.querySelector('.upload__input');
const uploadTemplate = document.querySelector('#upload-file');
//const uploadTemplate = document.querySelector('#upload-file').content.querySelector('.upload-file');
//const uploadPreview = document.querySelector('.img-upload__preview');
//const uploadPictureImg = target.querySelector('img-upload__preview > img');
const cancelButton = document.querySelector('#upload-cancel');

uploadTemplate.onchange = function () {
  uploadPhotoSection.classList.remove('hidden');
  document.body.classList.add('modal-open');
};


const closephotoForm = () => {
  uploadPhotoSection.classList.add('hidden');
  document.body.classList.remove('modal-open');
};

cancelButton.addEventListener('click', () => {
  closephotoForm();
});

cancelButton.addEventListener('keydown', (evt) => {
  if (isEscapeKey(evt)) {
    closephotoForm();
  }
});

