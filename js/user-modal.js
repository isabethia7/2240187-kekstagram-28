import { isEscapeKey, isEnterKey } from './util.js';
import { pictureContainer, fillComment } from './createMiniatures.js';
import { finalPosts } from './main.js'; // ДОБАВИЛ забираем данные сгенерированой кортинки из main


const modalElement = document.querySelector('.big-picture');
const modalElementTitle = document.querySelector('.big-picture__title');
const modalCloseElement = modalElement.querySelector('.big-picture__cancel');


const onDocumentKeydown = (evt) => {
  if (isEscapeKey(evt)) {
    evt.preventDefault();
    modalElement.classList.add('hidden');
    modalElementTitle.classList.add('visually-hidden');
    document.body.classList.remove('modal-open');
  }
};

const userModalOpen = (evt) => {
  if (evt.target.closest('.picture')) {
    const target = evt.target.closest('.picture'); //выбираем из pictures - picture
    const currentData = finalPosts.find((item) => item.id === Number(target.dataset.id)); //ищем в нашем массиве с картинками тот элемент который равен по ID картинке по которой мы клинкули. ID картинки мы присваивали в createMiniatures.js строка 10
    console.log(currentData.commentText);
    modalElement.classList.remove('hidden');
    modalElementTitle.classList.remove('visually-hidden');
    document.body.classList.add('modal-open');
    modalElement.querySelector('.big-picture__img').querySelector('img').src = currentData.urlAdress; //выбираем в big-picture - big-picture__img а в нем тэг img и меняяем ему значение src на адрес кортинки из нашего массива который получили ранее.
    modalElement.querySelector('.big-picture__social').querySelector('.social__caption').innerHTML = currentData.description;
    modalElement.querySelector('.big-picture__social').querySelector('.likes-count').innerHTML = currentData.likes;
    modalElement.querySelector('.big-picture__social').querySelector('.comments-count').innerHTML = currentData.commentText.length;
    fillComment(currentData.commentText);

    document.addEventListener('keydown', onDocumentKeydown);
  }
};

//<li class="social__comment">
//  <img
//    class="social__picture"
//    src="{{аватар}}"
//    alt="{{имя комментатора}}"
//    width="35" height="35">
//    <p class="social__text">{{ текст комментария }}</p>
//</li>


const closeModal = () => {
  modalElement.classList.add('hidden');
  modalElementTitle.classList.add('visually-hidden');
  document.body.classList.remove('modal-open');
  //modalElement.querySelector('.big-picture__social').querySelector('.social__picture').removeAttribute('name');

  document.removeEventListener('keydown', onDocumentKeydown);
};

pictureContainer.addEventListener('click', userModalOpen);

pictureContainer.addEventListener('keydown', (evt) => {
  if (isEnterKey(evt)) {
    userModalOpen();
  }
});

modalCloseElement.addEventListener('click', () => {
  closeModal();
});

modalCloseElement.addEventListener('keydown', (evt) => {
  if (isEnterKey(evt)) {
    closeModal();
  }
});
