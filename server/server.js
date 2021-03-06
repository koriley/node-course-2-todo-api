const {ObjectID} = require("mongodb");
var express = require('express');
var bodyParser = require('body-parser');

var {mongoose} = require("./db/mongoose.js");
var {Todo} = require("./models/todo.js");
var {User} = require("./models/user.js");

var app = express();
app.use(bodyParser.json())
//route to create a new todo
app.post('/todos', (req, res) => {
    var todo = new Todo({text: req.body.text});

    todo.save().then((doc) => {
        res.send(doc);
    }, (e) => {
        res.status(400).send(e);
    });
});

//route to see all todos
app.get('/todos', (req, res) => {
    Todo.find().then((todos) => {
        res.send({todos});
    }, (e) => {
        res.status(400).send(e);
    });
});

app.get('/todos/:id', (req, res) => {
    var id = req.params.id;
    if (!ObjectID.isValid(id)) {
        res.status(404).send();
        return
    }
    Todo.findById(id).then((foundTodo) => {
        if (!foundTodo) {
            return res.status(404).send();
        }
         res.send({foundTodo});
    }, (e)=>{
      res.status(400).send();
    });

});

//start the express serveron port 3000 (this should be changed later for heroku)
app.listen(3000, () => {
    console.log("Started on port 3000");
});

module.exports = {
    app
};
