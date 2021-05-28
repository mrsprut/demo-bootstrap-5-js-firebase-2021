const BASE_URL = 'http://localhost:4000/api'

async function fetchTodoItems () {
  return await fetch(`${BASE_URL}/items`)
}