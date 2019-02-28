// const MongoClient = require('mongodb').MongoClient
const {MongoClient, ObjectID} = require('mongodb')

var obj = new ObjectID()

console.log(obj)

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
    if (err) {
        return console.log('Unable to connect to MongoDB server')
    }
    console.log('Connected to MongoDB server')

    // findOneAndDelete
    db.collection('Users').findOneAndUpdate({_id: new ObjectID('5c76fa661361a42df732e38e')}, {
        $set: {
            name: "Diego Urquiza3"
        }, 
        $inc: {
            "age": 2
        }
        }, {
            returnOriginal: false
        })
        .then((result) => {
        console.log(JSON.stringify(result, undefined, 2))
    })

    // db.close()
})