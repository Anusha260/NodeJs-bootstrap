
const Mongoose = require("mongoose");

const UserSchema = new Mongoose.Schema({
  name:{
    type:String
  },
  phone:{
    type:Number
  },
  username: {
    type: String,
    unique: true,
    required: true,
  },
  password: {
    type: String,
    minlength: 6,
    required: true,
  },
  role: {
    type: String,
    default: "Basic",
    required: true,
  }
});

const User = Mongoose.model("user", UserSchema);

module.exports = User;






// const Mongoose = require("mongoose");

// const UserSchema = new Mongoose.Schema({
//   name:{
//     type:String,
//     required:true
//   },
//   password: {
//     type: String,
//     minlength: 6,
//     required: true,
//   },
//   email: {
//     type: String,
//     unique: true,
//     required: true,
//   },
//   Phonenumber:{
//     type:Number,
//     required:true,
//     unique:true

//   },
//   Profession:{
//     type:String,
//     required:true
//   },

//   role: {
//     type: String,
//     default: "Basic",
//     required: true,
//   },
// });

// const User = Mongoose.model("user", UserSchema);

// module.exports = User;
