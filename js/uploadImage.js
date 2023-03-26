import { isEscapeKey } from './util.js';
import './scale.js';
import { imageUploadForm, pristine } from './validation.js';


const uploadPhotoSection = document.querySelector('.img-upload__overlay');
const imageUpload = document.querySelector('#upload-file');
const cancelButton = document.querySelector('#upload-cancel');

imageUpload.onchange = function () {
  uploadPhotoSection.classList.remove('hidden');
  document.body.classList.add('modal-open');
};


const closephotoForm = () => {
  uploadPhotoSection.classList.add('hidden');
  document.body.classList.remove('modal-open');
  imageUploadForm.reset();
  pristine.reset();
};

cancelButton.addEventListener('click', () => {
  closephotoForm();
});

cancelButton.addEventListener('keydown', (evt) => {
  if (isEscapeKey(evt)) {
    closephotoForm();
  }
});

