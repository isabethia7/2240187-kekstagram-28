
/*
3.4. Если отправка данных прошла успешно, показывается соответствующее сообщение. Разметку сообщения, которая находится в блоке #success внутри шаблона template, нужно разместить перед закрывающим тегом </body>. Сообщение должно исчезать после нажатия на кнопку .success__button, по нажатию на клавишу Esc и по клику на произвольную область экрана за пределами блока с сообщением.

3.5. Если при отправке данных произошла ошибка запроса, нужно показать соответствующее сообщение. Разметку сообщения, которая находится в блоке #error внутри шаблона template, нужно разместить перед закрывающим тегом </body>. Сообщение должно исчезать после нажатия на кнопку .error__button, по нажатию на клавишу Esc и по клику на произвольную область экрана за пределами блока с сообщением. В таком случае вся введённая пользователем информация сохраняется, чтобы у него была возможность отправить форму повторно.
*/

const uploadMessageContainer = document.querySelector('body');
const successTemplate = document.querySelector('#success').content.querySelector('.success');
//const successButton = document.querySelector('.success').content.querySelector('.success__button');
const errorTemplate = document.querySelector('#error').content.querySelector('.error');
const successMessage = document.createDocumentFragment();
const errorMessage = document.createDocumentFragment();

//const errorButton = document.querySelector('section').content.querySelector('.error__button');

const closeSuccessWindow = () => {
  document.querySelector('.success').remove();
};

const closeErrorWindow = () => {
  document.querySelector('.error').remove();
};

const renderSuccessMessage = () => {
  const newSuccessTemplate = successTemplate.cloneNode(true);
  const successButton = newSuccessTemplate.querySelector('.success__button');
  successButton.addEventListener('click', closeSuccessWindow);
  uploadMessageContainer.append(newSuccessTemplate);
};

const renderErrorMessage = () => {
  const newErrorTemplate = errorTemplate.cloneNode(true);
  const errorButton = newErrorTemplate.querySelector('.error__button');
  errorButton.addEventListener('click', closeErrorWindow);
  uploadMessageContainer.append(newErrorTemplate);
};

export { renderSuccessMessage, renderErrorMessage };
