const { MongoClient, ObjectID } = require('mongodb');

const connectionURL = 'mongodb://127.0.0.1:27017';
const databaseName = 'task-manager';

MongoClient.connect(connectionURL, { useNewUrlParser: true, useUnifiedTopology: true }, (error, client) => {
  if (error) {
    return console.log('Unable to connect to database');
  }

  const db = client.db(databaseName)

  // db.collection('users').findOne( { _id: new ObjectID('5ec99c09088e810e837edb24') }, (error, user) => {
  //   if (error) {
  //     return console.log('Unable to fetch user')
  //   }

  //   console.log(user)
  // })

  db.collection('users').find( { age: 40 } ).toArray((error, users) => {
    if (error) {
      return console.log('Unable to fetch users')
    }

    console.log(users)
  })
})