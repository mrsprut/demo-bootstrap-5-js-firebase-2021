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
const todoItemFormDateOutput = document.getElementById('todo-item-date-output')
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
let shouldDateInputChangeEmitting = true
todoItemFormDateInput.addEventListener('change', (ev) => {
  // console.log(ev.target.value)
  if (shouldDateInputChangeEmitting) {
    viewState.form.dateInput = ev.target.value
    todoItemFormDateInput.dataset.date =
      moment(viewState.form.dateInput, "YYYY-MM-DD").format(todoItemFormDateInput.dataset.dateFormat)
    const formDateInputChangeEvent = new Event('change', {'cancelable': true})
    shouldDateInputChangeEmitting = false
    todoItemFormDateOutput.setAttribute('z-index', 1000)
    console.log(todoItemFormDateInput.dispatchEvent(formDateInputChangeEvent))
  } else {
    shouldDateInputChangeEmitting = true 
  }
})
todoItemFormDateOutput.addEventListener('click', (ev) => {
  console.log('click')
  const formDateInputClickEvent = new Event('click', {'cancelable': true})
  console.log(todoItemFormDateInput.dispatchEvent(formDateInputClickEvent))
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