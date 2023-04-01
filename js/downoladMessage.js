
/*
3.4. Если отправка данных прошла успешно, показывается соответствующее сообщение. Разметку сообщения, которая находится в блоке #success внутри шаблона template, нужно разместить перед закрывающим тегом </body>. Сообщение должно исчезать после нажатия на кнопку .success__button, по нажатию на клавишу Esc и по клику на произвольную область экрана за пределами блока с сообщением.

3.5. Если при отправке данных произошла ошибка запроса, нужно показать соответствующее сообщение. Разметку сообщения, которая находится в блоке #error внутри шаблона template, нужно разместить перед закрывающим тегом </body>. Сообщение должно исчезать после нажатия на кнопку .error__button, по нажатию на клавишу Esc и по клику на произвольную область экрана за пределами блока с сообщением. В таком случае вся введённая пользователем информация сохраняется, чтобы у него была возможность отправить форму повторно.
*/
/*
export const thumbnailContainer = document.querySelector('.pictures');
const thumbnailTemplate = document.querySelector('#picture').content.querySelector('.picture');
const thumbnail = document.createDocumentFragment();

const renderThumbnail = (thumbnailData) => {
  if (Array.isArray(thumbnailData)) {
    thumbnailData.forEach((item) => {
      const thumbnailElement = thumbnailTemplate.cloneNode(true);
      thumbnailElement.dataset.id = item.id;
      thumbnailElement.querySelector('.picture__img').src = item.url;
      thumbnailElement.querySelector('.picture__img').alt = item.description;
      thumbnailElement.querySelector('.picture__comments').textContent = item.comments.length;
      thumbnailElement.querySelector('.picture__likes').textContent = item.likes;
      thumbnail.appendChild(thumbnailElement);
    });
    thumbnailContainer.append(thumbnail);
    thumbnailContainer.classList.remove('hidden');
  }
};

export { renderThumbnail };
*/
const uploadMessageContainer = document.querySelector('body');
const successTemplate = document.querySelector('#success').content.querySelector('.success');
const successButton = document.querySelector('.success').querySelector('.success__button');
const errorTemplate = document.querySelector('#error').content.querySelector('.error');
const successMessage = document.createDocumentFragment();
const errorMessage = document.createDocumentFragment();

//const errorButton = document.querySelector('section').content.querySelector('.error__button');

const closeSuccessWindow = () => {
  console.log('хуй');
  successTemplate.classList.add('hidden');
};

const renderSuccessMessage = () => {
  const newSuccessTemplate = successTemplate.cloneNode(true);
  successMessage.appendChild(newSuccessTemplate);
  uploadMessageContainer.append(successMessage);
  console.log(successButton);
  //successButton.addEventListener('click', closeSuccessWindow);
};

//successButton.addEventListener('click', closeSuccessWindow);

const renderErrorMessage = () => {
  const newErrorTemplate = errorTemplate.cloneNode(true);
  errorMessage.appendChild(newErrorTemplate);
  uploadMessageContainer.append(errorMessage);
};

export { renderSuccessMessage, renderErrorMessage };


/*
thumbnailContainer.addEventListener('click', openBigPicture);

thumbnailContainer.addEventListener('keydown', (evt) => {
  if (isEnterKey(evt)) {
    openBigPicture();
  }
});
*/

