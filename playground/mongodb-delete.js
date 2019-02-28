// const MongoClient = require('mongodb').MongoClient
const {MongoClient, ObjectID} = require('mongodb')

var obj = new ObjectID()

console.log(obj)

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
    if (err) {
        return console.log('Unable to connect to MongoDB server')
    }
    console.log('Connected to MongoDB server')

    // deleteMany
    // db.collection('Todos').deleteMany({text: 'Do homework'}).then((results) => {
    //     console.log(results)
    // })

    // delete one
    // db.collection('Todos').deleteOne({text: 'Walk the dog'}).then((results) => {
    //     console.log(results)
    // })

    // findOneAndDelete
    db.collection('Users').findOneAndDelete({_id: new ObjectID('5c76f122accfb4259e165c2b')}).then((result) => {
        console.log(result)
    })

    // db.close()
})