const hidenBtn = document.querySelector('.template').content.querySelector('.deal__item');
const form = document.querySelector('.wish__form');
const toDoList = document.querySelector('.deal__list');
let wishItems = toDoList.children;
const title = document.getElementById('title')




form.addEventListener('submit', function (e) {
   let textField = document.querySelector('.wish__input').value;
   e.preventDefault();
   if (textField == '') {
      return false;
   }
   else {
      const newBtn = hidenBtn.cloneNode(true);
      newBtn.textContent = textField;
      toDoList.appendChild(newBtn);
      form.reset();
      check()
   }
})
toDoList.addEventListener('click', function name(event) {
   event.target.remove()
   check()
})


function check() {
   if (toDoList.children.length == 0) {
      title.innerHTML = 'Молодца, все дела выполнены!'
   }
   else {
      title.innerHTML = 'Ты еще не все сделал, поторопись'
   }
}

