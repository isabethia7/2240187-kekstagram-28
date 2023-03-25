const sliderElement = document.querySelector('.img-upload__scale');
const scaleControlSmaller = document.querySelector('.scale__control--smaller');
const scaleControlBigger = document.querySelector('.scale__control--bigger');
let valueElementCurrent = document.querySelector('.scale__control--value');
const scaleStep = 25;
const scaleMin = 25;
const scaleMax = 100;
const scaleDefault = 100;

/*
2.1.Масштаб:

При нажатии на кнопки.scale__control--smaller и.scale__control--bigger должно изменяться значение поля.scale__control--value;
Значение должно изменяться с шагом в 25. Например, если значение поля установлено в 50 %, после нажатия на «+», значение должно стать равным 75 %.Максимальное значение — 100 %, минимальное — 25 %.Значение по умолчанию — 100 %;
При изменении значения поля.scale__control--value изображению внутри.img - upload__preview должен добавляться соответствующий стиль CSS, который с помощью трансформации scale задаёт масштаб.Например, если в поле стоит значение 75 %, то в стиле изображения должно быть написано transform: scale(0.75).

*/


export const scaleOnClick = () => {
  scaleControlSmaller.addEventListener('click', scaleOnClick);
  scaleControlBigger.addEventListener('click', scaleOnClick);
  while (scaleMax > valueElementCurrent > scaleMin) {
    if (scaleControlSmaller.onclick) {
      valueElementCurrent = valueElementCurrent - scaleStep;
    }
    if (scaleControlBigger.onclick) {
      valueElementCurrent = valueElementCurrent + scaleStep;
    }
  }
  if (valueElementCurrent === scaleMin) {
    scaleControlSmaller.disabled();
  }
  if (valueElementCurrent === scaleMax) {
    scaleControlBigger.disabled();
  }
  return scaleOnClick;
};


