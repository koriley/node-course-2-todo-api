//const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');


MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
            if (err) {
                return console.log('Unable to connect to database server (mongodb)');
            }
            console.log('Connected to MongoDB server');
// db.collection('Todos').find({
//     _id: new ObjectID('587ec261fcf793137ab0bc70')
//
// }).toArray().then((docs) => {
//     console.log('Todos');
//     console.log(JSON.stringify(docs, undefined, 2));
// }, (err) => {
//     console.log('Unable to fetch todos', err);
// });
// db.collection('Todos').find().count().then((count) => {
//     console.log(`Todos Count: ${count}`);
//
// }, (err) => {
//     console.log('Unable to fetch todos', err);
// });

db.collection('Users').find({
  user:'KOR'
}).toArray().then((res)=>{
  //console.log(`Number of records: ${count}`)
  console.log(JSON.stringify(res, undefined, 2));
}, (err)=>{
  console.log("unable to fetch", err);
});

              // db.close();
           });
