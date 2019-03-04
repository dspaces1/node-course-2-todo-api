const { ObjectID } = require('mongodb')
const { moongoose } = require('./../server/db/mongoose')
const { Todo } = require('./../server/models/todo')
const { User } = require('./../server/models/user')

var id = '5c783bb0ee5f1b6ccc3fc34c'

// if (!ObjectID.isValid(id)) {
//   console.log('ID not valid')
// }
// Todo.find({
//   _id: id
// }).then((todos) => {
//   console.log('Todos', todos)
// })

// Todo.findOne({
//   _id: id
// }).then((todo) => {
//   console.log('Todos', todo)
// })

// Todo.findById(id).then((todo) => {
//   if (!todo) {
//     return console.log('Id not found')
//   }
//   console.log('Todos by id', todo)
// }).catch((e) => console.log(e))

User.findById(id).then((user) => {
  if (!user) {
    return console.log('Id not found')
  }
  console.log('User by id', user)
}).catch((e) => console.log(e))
