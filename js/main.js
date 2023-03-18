//import './user-modal.js';
import { photoDescriptionArray } from './data.js';
import { renderThumbnail } from './renderMainPage.js';

const mainPage = photoDescriptionArray();
renderThumbnail(mainPage);

console.log(mainPage);

export { mainPage };
