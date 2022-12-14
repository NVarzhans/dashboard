let darkLayer = document.createElement("div"); // вставка слоя затемнения
let form = document.querySelector('#popupWin'); 

let initialButton = document.querySelector(".subscribe");
initialButton.onclick = function() {
  darkLayer.id = 'shadow'; // id чтобы подхватить стиль
  document.body.appendChild(darkLayer); // включаем затемнение

  form.style.display = 'block';   
  let email = document.querySelector(".form"); //сохранение почты, чобы не пришлось дваажды вводить.
  let emailEntered = document.querySelector("#email");
  emailEntered.setAttribute('value', email.value); 
 
  darkLayer.onclick = function() {  // при клике на слой затемнения все исчезнет
  darkLayer.parentNode.removeChild(darkLayer); // удаляем затемнение
  form.style.display = 'none'; // делаем окно невидимым
  return false;
  }
}


let fullName = form.querySelector('#name');
let feedback = form.querySelector('#yourfeedback');
let fields = form.querySelectorAll('.field');
let errors = form.querySelectorAll('.error');

function errorsRemove() {
        let errors = form.querySelectorAll('.error');
        for (let i = 0; i < errors.length; i++) {
          errors[i].remove();
        }
    }

function formValidation() {
      
      for (let i = 0; i < fields.length; i++) {
            if (!fields[i].value) {
              console.log('field is blank', fields[i]);
                let error = document.createElement('span');
                error.className = 'error';
                error.style.color = 'red';
                error.innerHTML = 'Cannot be blank';
                form[i].parentElement.insertBefore(error, fields[i]);
            } else {
              alert('Thanks for your feedback ' + fullName.value + ',' + ' you are subscribed');
              form.reset();
              form.style.display = 'none';
              break;
            }
      }
}

let submitButton = document.querySelector(".submitButton");
submitButton.onclick = function (e) {
  e.preventDefault();

        errorsRemove();

        formValidation();              
}


function showModalWinNote() {

    let darkLayer = document.createElement('div'); // вставка слоя затемнения 
    darkLayer.id = 'shadow'; // id чтобы подхватить стиль
    document.body.appendChild(darkLayer); // включаем затемнение

    let modalWinNote = document.getElementById('popupWinNote'); // находим наше "окно" в index.html
    modalWinNote.style.display = 'block'; // "включаем" его
  
    darkLayer.onclick = function () {  // при клике на слой затемнения все исчезнет
        darkLayer.parentNode.removeChild(darkLayer); // удаляем затемнение
        modalWinNote.style.display = 'none'; // делаем окно невидимым
        return false;
    };
}