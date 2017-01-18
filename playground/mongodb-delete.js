//const MongoClient = require('mongodb').MongoClient;
const {
    MongoClient,
    ObjectID
} = require('mongodb');


MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
    if (err) {
        return console.log('Unable to connect to database server (mongodb)');
    }
    console.log('Connected to MongoDB server');
    //deleteMany

    // db.collection('Todos').deleteMany({text:"eat lunch"}).then((res)=>{
    //   console.log(res);
    // })

    //deleteOne
    // db.collection('Todos').deleteOne({text: 'eat lunch'}).then((res)=>{
    //   console.log(res);
    // });
    //findOneAndDelete
    // db.collection('Todos').findOneAndDelete({completed:false}).then((res)=>{
    //   console.log(res);
    // });

    db.collection('Users').deleteMany({
        user: "KOR"
    }).then((res) => {
        console.log(res);
    });

    db.collection('Users').deleteOne({
        user: "Mark"
    }).then((res) => {
        console.log(res);
    });

    db.collection('Users').findOneAndDelete({
        _id: new ObjectID('587ec38aec67c71381dfb6e7')
    }).then((res) => {
        console.log(res);

    });

    // db.close();
});
