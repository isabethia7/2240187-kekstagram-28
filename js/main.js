
import './renderBigPicture.js';
import { photoDescriptionArray } from './data.js';
import { renderThumbnail } from './renderThumbnail.js';
import './uploadImage.js';

const thumbnailsData = photoDescriptionArray();
renderThumbnail(thumbnailsData);

export { thumbnailsData };


fetch('https://28.javascript.pages.academy/kekstagram/data')
  .then((response) => response.json())
  .then((postData) => {
    console.log(postData);
  });

