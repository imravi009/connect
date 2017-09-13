

var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var TaskSchema = new Schema({
name:{
type:String,
//equired:"enter task name"
},

created_date:{
type: Date,
defualt : Date.now

},

address:{
type: String ,
default : "India"
}

});

module.exports = mongoose.model("Tasks",TaskSchema);


