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
