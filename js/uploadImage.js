import { isEscapeKey } from './util.js';
import { scaleImageReset, scaleDefault, scaleValueControl, scaleBigger, scaleSmaller, buttonBigger, buttonSmaller } from './scale.js';
import { imageUploadForm, pristine } from './validation.js';
import { effectChange, effectReset } from './filter.js';

const uploadPhotoSection = document.querySelector('.img-upload__overlay');
const imageUpload = document.querySelector('#upload-file');
const cancelButton = document.querySelector('#upload-cancel');

const onDocKeydown = (evt) => {
  if (isEscapeKey(evt)) {
    closeImageRedactor();
  }
};

function closeImageRedactor() {
  uploadPhotoSection.classList.add('hidden');
  document.body.classList.remove('modal-open');
  imageUploadForm.reset();
  pristine.reset();
  scaleImageReset();
  effectReset();

  scaleSmaller.removeEventListener('click', buttonSmaller);
  scaleBigger.removeEventListener('click', buttonBigger);
  cancelButton.removeEventListener('click', closeImageRedactor);
  imageUploadForm.removeEventListener('change', effectChange);
  document.removeEventListener('keydown', onDocKeydown);
}


function openImageRedactor() {
  uploadPhotoSection.classList.remove('hidden');
  document.body.classList.add('modal-open');
  scaleValueControl.value = `${scaleDefault}%`;

  scaleSmaller.addEventListener('click', buttonSmaller);
  scaleBigger.addEventListener('click', buttonBigger);
  cancelButton.addEventListener('click', closeImageRedactor);
  imageUploadForm.addEventListener('change', effectChange);
  document.addEventListener('keydown', onDocKeydown);
}

imageUpload.addEventListener('change', openImageRedactor);

//cancelButton.addEventListener('keydown', (evt) => {
//  if (isEscapeKey(evt)) {
//    closeImageRedactor();
//  }
//});

