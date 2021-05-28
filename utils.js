function serverItemModelToClientItemModel (serverItemModel) {
  return new TodoItemModel(
    serverItemModel.title,
    serverItemModel.description,
    serverItemModel.date,
    serverItemModel.id
  )
}

function clientItemModelToServerItemModel (clientItemModel) {
  return {
    'title': clientItemModel.title,
    'description': clientItemModel.details,
    'date': clientItemModel.date,
    'id': clientItemModel.id
  }
}