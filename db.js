const Mongoose = require("mongoose");

const localDB = `mongodb+srv://Anusha:NAnusha@cluster0.easlpd6.mongodb.net/Register?retryWrites=true&w=majority`;

const connectDB = async () => {
  await Mongoose.connect(localDB, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });

  console.log("MongoDB Connected");
};

module.exports = connectDB;
