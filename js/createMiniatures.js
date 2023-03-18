export const pictureContainer = document.querySelector('.pictures');
const pictureElement = document.querySelector('#picture').content.querySelector('.picture');

const similarPhotoPosts = document.createDocumentFragment();

const createElement = (randomPostData) => {
  if (Array.isArray(randomPostData)) {
    randomPostData.forEach((item) => {
      const postElement = pictureElement.cloneNode(true);
      postElement.dataset.id = item.id;
      postElement.querySelector('.picture__img').src = item.urlAdress;
      postElement.querySelector('.picture__comments').textContent = item.comment;
      postElement.querySelector('.picture__likes').textContent = item.likes;
      similarPhotoPosts.appendChild(postElement);
    });
    pictureContainer.append(similarPhotoPosts);
  }
};

export { createElement };


const commentsContainer = document.querySelector('.social__comments');
const commentElement = document.querySelector('#social__comment').content.querySelector('.social__comment');

const similarComments = document.createDocumentFragment();

const fillComment = (randomCommentData) => {
  if (Array.isArray(randomCommentData)) {
    randomCommentData.forEach((item) => {
      const postElement = commentElement.cloneNode(true);
      commentElement.querySelector('.social__picture').src = item.avatar;
      commentElement.querySelector('.social__picture').alt = item.ProfileName;
      commentElement.querySelector('.social__text').innerHTML = item.commentText;
      similarComments.appendChild(postElement);
    });
    commentsContainer.append(similarComments);
  }
};

export { fillComment };
