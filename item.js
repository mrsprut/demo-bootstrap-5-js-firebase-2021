class TodoItemModel {
  static lastId = 0
  constructor(title, details, date) {
    this.id = ++TodoItemModel.lastId
    this.title = title
    this.details = details
    this.date = date
    console.log(this)
  }
}