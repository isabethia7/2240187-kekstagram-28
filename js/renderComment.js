const commentsContainer = document.querySelector('.social__comments');
const commentTemplate = document.querySelector('#social__comment').content.querySelector('.social__comment');
const comment = document.createDocumentFragment();

const renderComment = (randomCommentData) => {
  if (Array.isArray(randomCommentData)) {
    randomCommentData.forEach((dataItem) => {
      const postElement = commentTemplate.cloneNode(true);
      commentsContainer.dataset.id = dataItem.id;
      commentsContainer.querySelector('.social__picture').src = dataItem.avatar;
      commentsContainer.querySelector('.social__picture').alt = dataItem.name;
      commentsContainer.querySelector('.social__text').innerHTML = dataItem.message;
      comment.appendChild(postElement);
    });
    commentsContainer.append(comment);
  }
};

export { renderComment };
