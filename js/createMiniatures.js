
//const userDialog = document.querySelector('.big-picture');
//userDialog.classList.remove('hidden');


const pictureContainer = document.querySelector('.pictures');
//pictureContainer.classList.remove('visually-hidden');
const pictureElement = document.querySelector('#picture').contant.querySelector('.picture');


const similarPhotoPosts = document.createDocumentFragment();

export function createElement(randomPostData) {
  randomPostData.forEach((item) => {
    const postElement = pictureElement.cloneNode(true);
    postElement.querySelector('.picture__img').src = item.url;
    postElement.querySelector('.picture__comments').textContent = item.comments;
    postElement.querySelector('.picture__likes').textContent = item.likes;
    similarPhotoPosts.appendChild(postElement);
  });
  pictureContainer.append(similarPhotoPosts);
}

