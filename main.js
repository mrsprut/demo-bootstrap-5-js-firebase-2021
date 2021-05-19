/* state */
const viewState = {
  'items': [],
  'form': {
    'titleInput': '',
    'detailsInput': '',
    'dateInput': new Date().toISOString()
  },
  'fabSubmitInit': false
}

/* init */
const todoItemFormTitleInput = document.getElementById('todo-item-title')
const todoItemFormDetailsInput = document.getElementById('todo-item-details')
const todoItemFormDateInput = document.getElementById('todo-item-date')
const todoItemFormDateOutput = document.getElementById('todo-item-date-output')
const todoItemSaveButton = document.getElementById('todo-item-save')
const todoItemForm = document.querySelector('#saveModal form')
const todoItemsContainerRow = document.getElementById('todo-items-container-row')

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
  const formDateInputClickEvent = new Event('click', {'cancelable': true})
  console.log(todoItemFormDateInput.dispatchEvent(formDateInputClickEvent))
})
todoItemSaveButton.addEventListener('click', (ev) => {
  const formSubmitEvent = new Event('submit', {'cancelable': true})
  // todoItemFormClone = todoItemForm.cloneNode(true)
  // todoItemForm.parentNode.replaceChild(todoItemFormClone, todoItemForm)
  // todoItemForm = todoItemFormClone
  if (!viewState.fabSubmitInit) {
    todoItemForm.addEventListener('submit', (ev) => {
      ev.preventDefault()
      ev.stopPropagation()
      if (!todoItemForm.checkValidity()) {
        console.log('invalid')
      } else {        
        console.log('before', viewState.items)
        viewState.items.unshift(
          new TodoItemModel(
            viewState.form.titleInput,
            viewState.form.detailsInput,
            viewState.form.dateInput
          )
        )
        console.log('after', viewState.items)
        fillItems()
        saveModal.hide()
      }
      todoItemForm.classList.add('was-validated')
    })
    viewState.fabSubmitInit = true
  }
  console.log(todoItemForm.dispatchEvent(formSubmitEvent))
  
})

function fillItems () {
  // todoItemsContainerRow.innerHTML = ''
  const itemViews = viewState.items.map(item =>
      `<div class="col-sm-1 col-md-6 col-lg-4 col-lg-3">
        <div class="card mb-3">
          <div class="row g-0">
            <div class="col-md-8">
              <div class="card-body">
                <h5 class="card-title">${item.title}</h5>
                <p class="card-text ellipsed-text">
                  ${item.details}
                </p>
              </div>
            </div>
            <div class="col-md-4 d-flex align-items-center justify-content-sm-start justify-content-md-center">
              <div class="card-item-date-time-block">
                <div>
                  <span>Date: </span><span>${item.date}</span>
                </div>
                <div>
                  <span>Time: </span><span>12:00</span>
                </div>
              </div>
            </div>
          </div>
          <div class="row g-0">
            <div class="col-md-12">
              <div class="card-item-block">
                <button class="btn btn-outline-secondary" data-bs-toggle="modal" data-bs-target="#detailsModal">Details</button>
                <button class="btn btn-outline-secondary">Done</button>
                <button class="btn btn-outline-secondary" data-bs-toggle="modal" data-bs-target="#saveModal">Edit</button>
                <button class="btn btn-outline-danger" data-bs-toggle="modal" data-bs-target="#deleteModal">Delete</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    `
  ).reduce((resultView, currentView) => resultView += currentView, '')
  todoItemsContainerRow.innerHTML = itemViews
  console.log('fillItems')
  
}