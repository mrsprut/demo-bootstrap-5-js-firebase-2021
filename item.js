class TodoItemModel {
  static lastId = 0
  constructor(title, details, date, id) {
    if (!id) {
      this.id = ++TodoItemModel.lastId
    } else {
      this.id = id
    }
    this.title = title
    this.details = details
    this.date = date
    console.log(this)
  }
}