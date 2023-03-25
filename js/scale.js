//const sliderElement = document.querySelector('.img-upload__scale');
const scaleControlSmaller = document.querySelector('.scale__control--smaller');
const scaleControlBigger = document.querySelector('.scale__control--bigger');
const valueElementCurrent = document.querySelector('.scale__control--value');
const scaleStep = 25;
const scaleMin = 25;
const scaleMax = 100;
//const scaleDefault = 100;

/*
2.1.Масштаб:

При нажатии на кнопки.scale__control--smaller и.scale__control--bigger должно изменяться значение поля.scale__control--value;
Значение должно изменяться с шагом в 25. Например, если значение поля установлено в 50 %, после нажатия на «+», значение должно стать равным 75 %.Максимальное значение — 100 %, минимальное — 25 %.Значение по умолчанию — 100 %;
При изменении значения поля.scale__control--value изображению внутри.img - upload__preview должен добавляться соответствующий стиль CSS, который с помощью трансформации scale задаёт масштаб.Например, если в поле стоит значение 75 %, то в стиле изображения должно быть написано transform: scale(0.75).

1) let valueElementCurrent = document.querySelector(".scale__control--value"); - ты получаешь весь элемент а тебе надо его атрибут value
2) valueElementCurrent.value = 10% - э то строка и ты ее стравниваешь больше меньше числа. Надо преобразовать valueElementCurrent.value - через parseInt(valueElementCurrent.value, 10);
*/


export const scaleOnClick = () => {

  while (scaleMax > valueElementCurrent > scaleMin) {
    if (scaleControlSmaller.onclick) {
      valueElementCurrent.value = parseInt(valueElementCurrent.value, 10) - scaleStep;
    }
    if (scaleControlBigger.onclick) {
      valueElementCurrent.value = parseInt(valueElementCurrent.value, 10) + scaleStep;
    }
  }
  if (parseInt(valueElementCurrent.value, 10) === scaleMin) {
    scaleControlSmaller.disabled();
  }
  if (parseInt(valueElementCurrent.value, 10) === scaleMax) {
    scaleControlBigger.disabled();
  }
};


scaleControlSmaller.addEventListener('click', scaleOnClick);
scaleControlBigger.addEventListener('click', scaleOnClick);
