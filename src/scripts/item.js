export default class TodoItemModel {
  constructor(title, details, date, userId, done, id) {
    this.id = id
    this.title = title
    this.details = details
    this.date = date
    this.userId = userId
    this.done = done
  }
}