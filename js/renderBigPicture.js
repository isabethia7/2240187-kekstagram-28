import { isEscapeKey, isEnterKey } from './util.js';
import { thumbnailContainer } from './renderThumbnail.js';
import { renderComments, clearComment } from './renderComment.js';
import { thumbnailsData } from './main.js';

const bigPicture = document.querySelector('.big-picture');
const bigPictureImg = bigPicture.querySelector('.big-picture__img').querySelector('img');
const bigPictureLikes = bigPicture.querySelector('.likes-count');
//const bigPictureComments = bigPicture.querySelector('.comments-count');
const cancelBigPicture = bigPicture.querySelector('.big-picture__cancel');
const photoDescription = bigPicture.querySelector('.social__caption');
const commentsCount = bigPicture.querySelector('.social__comment-count');
const loadCommentsButton = bigPicture.querySelector('.comments-loader');
let commentsPostAll = '';
let commentShowCounter = 0;


const onDocumentKeydown = (evt) => {
  if (isEscapeKey(evt)) {
    evt.preventDefault();
    bigPicture.classList.add('hidden');
    document.body.classList.remove('modal-open');
  }
};

const commentCounterUpdate = () => {
  commentsCount.textContent = `${commentShowCounter} из ${commentsPostAll}`;
};

const commentsLoad = () => {
  const commentsArray = Array.from(bigPicture.querySelectorAll('.social__comment'));
  const commentsLoadCounter = () => {
    if ((commentsArray.length - commentShowCounter) < 5) {
      commentShowCounter = commentShowCounter + (commentsArray.length - commentShowCounter);
    } else {
      commentShowCounter = commentShowCounter + 5;
    }
  };

  const commentsShow = () => {
    for (const comments of commentsArray) {
      comments.classList.add('hidden');
    }
    const commentsHidden = commentsArray.slice(0, commentShowCounter);
    for (const commentHidden of commentsHidden) {
      commentHidden.classList.remove('hidden');
    }
  };

  commentsLoadCounter();

  if (commentShowCounter < commentsArray.length) {
    commentsShow();
  } else {
    commentsShow();
    loadCommentsButton.classList.add('hidden');
  }
};

const loadMoreComments = () => {
  commentsLoad();
  commentCounterUpdate();
};


const openBigPicture = (evt) => {
  if (evt.target.closest('.picture')) {
    const target = evt.target.closest('.picture');
    const currentThumbnailData = thumbnailsData.find((item) => item.id === Number(target.dataset.id));
    bigPicture.classList.remove('hidden');
    document.body.classList.add('modal-open');
    commentsCount.classList.remove('hidden');
    loadCommentsButton.classList.remove('hidden');
    bigPictureImg.src = currentThumbnailData.url;
    photoDescription.innerHTML = currentThumbnailData.description;
    bigPictureLikes.innerHTML = currentThumbnailData.likes;
    commentsPostAll = currentThumbnailData.comments.length;
    //bigPictureComments.innerHTML = currentThumbnailData.comments.length;
    renderComments(currentThumbnailData.comments);

    commentsLoad();
    commentCounterUpdate();

    loadCommentsButton.addEventListener('click', loadMoreComments);
    document.addEventListener('keydown', onDocumentKeydown);
  }
};

const closeBigPicture = () => {
  bigPicture.classList.add('hidden');
  document.body.classList.remove('modal-open');
  document.removeEventListener('keydown', onDocumentKeydown);
  commentShowCounter = 5;
  clearComment();
};

thumbnailContainer.addEventListener('click', openBigPicture);

thumbnailContainer.addEventListener('keydown', (evt) => {
  if (isEnterKey(evt)) {
    openBigPicture();
  }
});

cancelBigPicture.addEventListener('click', () => {
  closeBigPicture();
});

cancelBigPicture.addEventListener('keydown', (evt) => {
  if (isEnterKey(evt)) {
    closeBigPicture();
  }
});
