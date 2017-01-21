const {ObjectID} = require("mongodb");

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');


// var id = '5883cac1ae0f6006453480cf';
//
// if(!ObjectID.isValid(id)){
//   console.log("Id not valid");
// }
//
// //find all items in database (array)
// Todo.find({
//   _id: id
// }).then((todos)=>{
//   console.log("Todos", todos);
// });
//
// //returnes only one, even if there are multiple with the search criteria. (Object)
// Todo.findOne({
//   _id: id
// }).then((todo)=>{
//   console.log("Todo", todo);
// });
//
// Todo.findById(id).then((todobyid)=>{
//   if(!todobyid){
//     return console.log("ID not found");
//   }
//   console.log(JSON.stringify(todobyid, undefined, 2));
// }).catch((e)=> console.log(e));

var id = "58839e9f2e247b04e1a65e29";

User.findById(id).then((user)=>{
  if(!user){
    console.log("No user found");
  }
  console.log(JSON.stringify(user, undefined, 2));
}).catch((e)=> console.log(e));
