



//  WE CAN ONLY AND WE WILL USE MONGOOSE



const { MongoClient, ObjectID } = require('mongodb');

const connectionURL = "mongodb://127.0.0.1:27017";
const databaseName = "task-manager";

const id = new ObjectID();

MongoClient.connect(
  connectionURL,
  { useNewUrlParser: true },
  (error, client) => {
    if (error) {
      return console.log("Unable to connect to database!");
    }

    const db = client.db(databaseName);

    // db.collection("tasks").findOne({ _id: new ObjectID("5e947d256af87e209907178d")}, (error, task) => {
    //   if(error){
    //     return console.log('Unable to fetch');
    //   }
    //   console.log(task);
    // })

    // db.collection("tasks").find({ completed: false }).toArray( (error, taskArr) => {
    //   if(error){
    //     return console.log('Unable to fetch');
    //   }
    //   console.log(taskArr);
    // })
    
    // db.collection("users").updateOne({
    //   _id: new ObjectID("5e908f697046a749c6251769")
    // },{
    //   $set:{
    //     name: "Tom"
    //   }
    // }).then((result) => {
    //   console.log(result);
    // }).catch((error) => {
    //   console.log(error);
    // })

    db.collection("tasks").updateMany({
      completed: false
    },{
      $set:{
        completed: true
      }
    }).then( (result) => {
      console.log(result);
    }).catch( (error) => {
      console.log(error);
    })
  }
);
