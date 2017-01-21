const expect = require('expect');
const request = require('supertest');

const {app} = require('./../server');
const {Todo} = require('./../models/todo');

//this seedin an array to populate the database for GET testing
const todos = [{
  text: 'first test todo'
},{
  text: 'Second test todo'
}];

//this errases all data in the todos data base for POST testing
beforeEach((done) =>{
  Todo.remove({}).then(()=>{
    return Todo.insertMany(todos); //we insert the seeded array
  }).then(() => done());
});

//POST testing
describe('POST /todos', () => {
    it ('should create a new todo', (done) => {
        var text = 'Test todo text';

        request(app)
        .post('/todos')
        .send({text})
        .expect(200)
        .expect((res) => {
            expect(res.body.text).toBe(text);
        })
        .end((err, res) => {
            if (err) {
                return done(err);
            }
            Todo.find({text}).then((todos) => {
                expect(todos.length).toBe(1);
                expect(todos[0].text).toBe(text);
                done();
            }).catch((e) => done(e));

        });
    });
    it('should not create todo with invalid body data', (done)=>{
      var text = "";

      request(app)
      .post('/todos')
      .send({text})
      .expect(400)
      .end((err, res)=>{
        if(err){
          return done(err);
        }
        Todo.find().then((todos)=>{
          expect(todos.length).toBe(2);
        done();
      }).catch((e)=>done(e));
    });
    });
  });
  
//getting all the todos in the data base
//we seed this above with two fields so length should be 2
  describe('GET /todos', ()=> {
    it('should return todos from the database', (done)=>{

      request(app)
      .get('/todos')
      .expect(200)
      .expect((res)=>{
          expect(res.body.todos.length).toBe(2)
      })
      .end(done);
    });
  });
