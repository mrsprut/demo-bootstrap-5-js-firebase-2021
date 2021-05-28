function serverItemModelToClientItemModel (serverItemModel) {
  return new TodoItemModel(
    serverItemModel.title,
    serverItemModel.description,
    serverItemModel.date,
    serverItemModel.id
  )
}