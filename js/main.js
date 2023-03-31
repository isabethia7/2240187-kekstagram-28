import { renderThumbnail } from './renderThumbnail.js';
import { setUserFormSubmit } from './validation.js';
import { closeBigPicture, renderBigPicture } from './renderBigPicture.js';
import './uploadImage.js';
import { getData } from './api.js';
import { showAlert } from './util.js';

const PostsCount = 4;

getData()
  .then((postData) => {
    renderThumbnail(postData.slice(0, PostsCount));
    renderBigPicture(postData);
  })
  .catch(
    (err) => {
      showAlert(err.message);
    }
  );

setUserFormSubmit(closeBigPicture);

