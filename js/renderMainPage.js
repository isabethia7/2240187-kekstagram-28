export const thumbnailContainer = document.querySelector('.pictures');
const thumbnailTemplate = document.querySelector('#picture').content.querySelector('.picture');
const thumbnail = document.createDocumentFragment();

const renderThumbnail = (thumbnailData) => {
  if (Array.isArray(thumbnailData)) {
    thumbnailData.forEach((dataItem) => {
      const thumbnailElement = thumbnailTemplate.cloneNode(true);
      thumbnailElement.dataset.id = dataItem.id;
      thumbnailElement.querySelector('.picture__img').src = dataItem.url;
      thumbnailElement.querySelector('.picture__img').alt = dataItem.description;
      thumbnailElement.querySelector('.picture__comments').textContent = dataItem.comments.length;
      thumbnailElement.querySelector('.picture__likes').textContent = dataItem.likes;
      thumbnail.appendChild(thumbnailElement);
    });
    thumbnailContainer.append(thumbnail);
  }
};

export { renderThumbnail };
