let darkLayer = document.createElement("div"); // вставка слоя затемнения
let form = document.querySelector('#popupWin'); 

let initialButton = document.querySelector("#subscribe");
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

let errorsRemove = function() {
        let errors = form.querySelectorAll('.error');
        for (let i = 0; i < errors.length; i++) {
          errors[i].remove();
        }
    }

let formValidation = function() {
      
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


let formNote = document.querySelector('#popupWinNote');
let darkLayerNote = document.createElement('div'); // вставка слоя затемнения 

let postButton = document.querySelector('#postNote');
postButton.onclick = function() {
  darkLayerNote.id = 'shadow'; // id чтобы подхватить стиль
  document.body.appendChild(darkLayerNote); // включаем затемнение

  formNote.style.display = 'block';  

  darkLayerNote.onclick = function() {  // при клике на слой затемнения все исчезнет
  darkLayerNote.parentNode.removeChild(darkLayerNote); // удаляем затемнение
  formNote.style.display = 'none'; // делаем окно невидимым
  return false;
  }
}

let nameNote = formNote.querySelector('#nameNote');
let emailNote= formNote.querySelector('#emailNote');
let dateNote= formNote.querySelector('#datePicker');
let headerNote= formNote.querySelector('#headerNote');
let yourPost= formNote.querySelector('#yourPost');
let fieldsNote = formNote.querySelectorAll('.fieldNote');
let errorsNote = formNote.querySelectorAll('.error');

let errorsNoteRemove = function() {
        let errorsNote = formNote.querySelectorAll('.errorNote');
        for (let i = 0; i < errorsNote.length; i++) {
          errorsNote[i].remove();
        }
    }

let formNoteValidation = function() {
      
      for (let i = 0; i < fieldsNote.length; i++) {
            if (!fieldsNote[i].value) {
              console.log('field is blank', fieldsNote[i]);
                let errorNote = document.createElement('span');
                errorNote.className = 'errorNote';
                errorNote.style.color = 'red';
                errorNote.innerHTML = 'Cannot be blank';
                formNote[i].parentElement.insertBefore(errorNote, fieldsNote[i]);
            } else {
              alert('Thanks ' + nameNote.value + ',' + ' your post was created');
              formNote.reset();
              formNote.style.display = 'none';
              break;
            }
      }
}

let submitNoteButton = document.querySelector(".submitNote");
submitNoteButton.onclick = function (e) {
  e.preventDefault();

        errorsNoteRemove();

        formNoteValidation();  
  
  let obj = {
    "fullName": nameNote.value,
    "email": emailNote.value,
    "date": dateNote.value,
    "headerNote": headerNote.value,
    "post": yourPost.value,
  };
  
  let jsonString = JSON.stringify(obj);
  console.log(jsonString);
}