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
  console.log(viewState.form)
  saveModal.hide()
})