const jwt = require('jsonwebtoken')
const mongoose = require('mongoose')
const User = require('../../src/models/user')
const Task = require('../../src/models/task')

const user1Id = new mongoose.Types.ObjectId()
const user1 = {
  _id: user1Id,
  name: 'Sophie',
  email: 'sophie@example.com',
  password: 'Sophie123!',
  tokens: [{
    token: jwt.sign({ _id: user1Id }, process.env.JWT_SECRET)
  }]
}

const user2Id = new mongoose.Types.ObjectId()
const user2 = {
    _id: user2Id,
    name: 'Mark',
    email: 'mark@example.com',
    password: 'Mark123!',
    tokens: [{
        token: jwt.sign({ _id: user2Id }, process.env.JWT_SECRET)
    }]
}

const taskOne = {
    _id: new mongoose.Types.ObjectId(),
    description: 'First task',
    completed: false,
    owner: user1._id
}

const taskTwo = {
    _id: new mongoose.Types.ObjectId(),
    description: 'Second task',
    completed: true,
    owner: user1._id
}

const taskThree = {
    _id: new mongoose.Types.ObjectId(),
    description: 'Third task',
    completed: true,
    owner: user2._id
}

const configureDatabase = async () => {
    await User.deleteMany()
    await Task.deleteMany()
    await new User(user1).save()
    await new User(user2).save()
    await new Task(taskOne).save()
    await new Task(taskTwo).save()
    await new Task(taskThree).save()
}

module.exports = {
    user1Id,
    user1,
    user2Id,
    user2,
    taskOne,
    configureDatabase
}