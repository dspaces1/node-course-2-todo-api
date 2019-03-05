const { ObjectID } = require('mongodb')

const { moongoose } = require('./../server/db/mongoose')
const { Todo } = require('./../server/models/todo')
const { User } = require('./../server/models/user')

// Todo.remove({}).then((result) => {
//   console.log(result)
// })

// Todo.findOneAndRemove
// Todo.findByIdAndRemove

Todo.findByIdAndRemove('5c7ecdd30feb7e4fb99174c4').then((todo) => {
  console.log(todo)
})
