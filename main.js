/* state */
const viewState = {
  'form': {
    'titleInput': '',
    'detailsInput': '',
    'dateInput': new Date().toISOString()
  }
}

/* init */
const todoItemFormTitleInput = document.getElementById('todo-item-title')
const todoItemFormDetailsInput = document.getElementById('todo-item-details')
const todoItemFormDateInput = document.getElementById('todo-item-date')
const todoItemSaveButton = document.getElementById('todo-item-save')
const todoItemForm = document.querySelector('#saveModal form')

/* bootstrap init */
const saveModal =
  new bootstrap.Modal(document.getElementById('saveModal'), {})

// console.log(viewState.form.dateInput)

// todoItemFormDateInput.min = viewState.form.dateInput

todoItemFormTitleInput.addEventListener('change', (ev) => {
  viewState.form.titleInput = ev.target.value
})
todoItemFormDetailsInput.addEventListener('change', (ev) => {
  viewState.form.detailsInput = ev.target.value
})
todoItemFormDateInput.addEventListener('change', (ev) => {
  // console.log(ev.target.value)
  viewState.form.dateInput = ev.target.value
})
todoItemSaveButton.addEventListener('click', (ev) => {
  const formSubmitEvent = new Event('submit', {'cancelable': true})
  todoItemForm.addEventListener('submit', (ev) => {
    ev.preventDefault()
    ev.stopPropagation()
    if (!todoItemForm.checkValidity()) {
      console.log('invalid')
    } else {
      console.log(viewState.form)
      saveModal.hide()
    }
    todoItemForm.classList.add('was-validated')
  })
  console.log(todoItemForm.dispatchEvent(formSubmitEvent))
  
})