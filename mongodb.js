const { MongoClient, ObjectID } = require('mongodb');

const connectionURL = 'mongodb://127.0.0.1:27017';
const databaseName = 'task-manager';

const id = new ObjectID();
console.log(id.id.length);
console.log(id.toHexString().length)


MongoClient.connect(connectionURL, { useNewUrlParser: true, useUnifiedTopology: true }, (error, client) => {
  if (error) {
    return console.log('Unable to connect to database');
  }

  const db = client.db(databaseName)

    //   db.collection('users').insertOne({
    //       name: 'Sophie',
    //       age: 12
    //   }, (error, result) => {
    //     if (error) {
    //       return console.log('Unable to insert user')
    //     }
    //     console.log(result.ops)
    //   })

    //  db.collection('users').insertMany([
    //      {
    //         name: 'Mark',
    //         age: 42
    //      },
    //      {
    //         name: 'Sydney',
    //         age: 16 
    //      }
    //  ], (error, result) => {
    //    if (error) {
    //      return console.log('Unable to insert documents')    
    //    }
    //    console.log(result.ops)
    //  })

    // db.collection('tasks').insertMany([
    //     {
    //       description: 'Order items from discount dance',
    //       completed: false
    //     }, {
    //       description: 'Ordered 2 rompers for Sophie',
    //       completed: true
    //     }, {
    //       description: 'Finish action items on LinkedIn',
    //       completed: false    
    //     }
    // ], (error, result) => {
    //   if (error) {
    //     return console.log('Unable to insert documents')
    //   }
    //   console.log(result.ops)
    // })


})