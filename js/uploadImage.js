import { isEscapeKey } from './util.js';
import { scaleImageReset, scaleDefault, scaleValueControl, scaleBigger, scaleSmaller, buttonBigger, buttonSmaller } from './scale.js';
import { imageUploadForm, pristine } from './validation.js';

const uploadPhotoSection = document.querySelector('.img-upload__overlay');
const imageUpload = document.querySelector('#upload-file');
const cancelButton = document.querySelector('#upload-cancel');


function closeImageRedactor() {
  uploadPhotoSection.classList.add('hidden');
  document.body.classList.remove('modal-open');
  imageUploadForm.reset();
  pristine.reset();
  scaleImageReset();


  scaleSmaller.removeEventListener('click', buttonSmaller);
  scaleBigger.removeEventListener('click', buttonBigger);
  cancelButton.removeEventListener('click', closeImageRedactor);
}

function openImageRedactor() {
  uploadPhotoSection.classList.remove('hidden');
  document.body.classList.add('modal-open');
  scaleValueControl.value = `${scaleDefault}%`;


  scaleSmaller.addEventListener('click', buttonSmaller);
  scaleBigger.addEventListener('click', buttonBigger);
  cancelButton.addEventListener('click', closeImageRedactor);
}

imageUpload.addEventListener('change', openImageRedactor);

//cancelButton.addEventListener('keydown', (evt) => {
//  if (isEscapeKey(evt)) {
//    closeImageRedactor();
//  }
//});

