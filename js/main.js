import './user-modal.js';
import { photoDescriptionArray } from './data.js';
import { createElement } from './createMiniatures.js';

const finalPosts = photoDescriptionArray;
createElement(finalPosts);
console.log(finalPosts);
export { finalPosts };
