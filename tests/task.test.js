const request = require('supertest')
const app = require('../src/app')
const Task = require('../src/models/task')
const { user1, user2, taskOne, configureDatabase } = require('./fixtures/db')

beforeEach(configureDatabase)

test('Should create a task for user', async () => {
  const response = await request(app)
    .post('/tasks')
    .set('Authorization', `Bearer ${user1.tokens[0].token}`)
    .send({
        description: 'To do from the task test'
    })
    .expect(201)

    const task = await Task.findById(response.body._id)
    expect(task).not.toBeNull()
    expect(task.completed).toEqual(false)
})

test('Should fetch all tasks for a user', async () => {
  const response = await request(app)
    .get('/tasks')
    .set('Authorization', `Bearer ${user1.tokens[0].token}`)
    .send()
    .expect(200)
    
    expect(response.body.length).toEqual(2)
})

test('Should not delete other users tasks', async () => {
    await request(app)
      .delete(`/tasks/${taskOne._id}`)
      .set('Authorization', `Bearer ${user2.tokens[0].token}`)
      .send()
      .expect(404)
    
    const task = await Task.findById(taskOne._id)
    expect(task).not.toBeNull()  
})

test('Should fetch only completed tasks', async () => {
    const response = await request(app)
      .get('/tasks?completed=false')
      .set('Authorization', `Bearer ${user1.tokens[0].token}`)
      .send()
      .expect(200)
    
    expect(response.body.length).toEqual(1)  
})