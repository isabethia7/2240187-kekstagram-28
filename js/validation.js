const imageUploadForm = document.querySelector('.img-upload__form');
const hashtagRegexp = /^#[a-zа-яё0-9]{1,19}$/i;
const maxHashtagNumber = 5;

const pristine = new Pristine(imageUploadForm, {
  classTo: 'img-upload__text',
  errorClass: 'img-upload__text--invalid',
  successClass: 'img-upload__text--valid',
  errorTextParent: 'img-upload__text',
  errorTextTag: 'span',
  errorTextClass: 'img-upload__error'
});

const hashtagValidation = function (validateString) {
  const hashtagByWord = validateString.split(' ');
  if (hashtagByWord.length <= maxHashtagNumber) {
    for (const hashtagWord of hashtagByWord) {
      if (hashtagRegexp.test(hashtagWord) === true) {
        continue;
      } else {
        return false;
      }
    }
    return true;
  } else {
    return false;
  }
};

function validateHashtagCount(value) {
  const hashArray = value.split(' ');
  return hashArray.length <= HASHTAG_MAX_COUNT;
}

//imgUploadForm.addEventListener('submit', (evt) => {
//  if (!pristine.validate()) {
//    evt.preventDefault();
//  }
//});

const submitImageUpload = (evt) => {
  //const hashtagString = document.querySelector('text__hashtags').value;
  //if (hashtagValidation(hashtagString) === false) {
  //}
  const valid = false;
  if (valid === false) {
    evt.preventDefault();
  }
};

pristine.addValidator(
  imageUploadForm.querySelector('.text__hashtags'),
  validateHashtagCount,
  'Неверный хештег. хештеги должны разделяться пробелом'
);

//imageUploadForm.addEventListener('submit', submitImageUpload);
imageUploadForm.addEventListener('submit', (event) => {
  event.preventDefault();
  alert('submitting');
});
/*
console.log(hashtagValidation("#1234 #qwerty #asdfg #zxcvb")); // менше 5 и все хэштэги - будет true
console.log(hashtagValidation("#1234 #qwerty #asdfg #zxcvb #bnmn")); // ровно 5 и все хэштэги - будет true
console.log(hashtagValidation("#1234 #qwerty #asdfg #zxcvb bnmn")); // ровно 5 и есть не хэштэг - будет false
console.log(hashtagValidation("#1234 #qwerty #asdfg #zxcvb #bnmn #bnmn2")); //болььше 5 и все - будет false

*/

/*
Как привязать функцию к кнопке

  < form >
  a: <input type="number" name="a" id="a"><br>
    b: <input type="number" name="b" id="b"><br>
      <button onclick="add()">Add</button>
    </>


        function add() {
    var a = document.getElementById('a').value;
        var b = document.getElementById('b').value;

        var sum = parseInt(a) + parseInt(b);
        alert(sum);
  }
      </script>
*/

//image-upload__submit
