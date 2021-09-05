const mongoose = require("mongoose");
const URI = process.env.MONGO_URI;

const connectDB = async () => {
  // await mongoose.connect(process.env.MONGO_URI, {
  //   useNewUrlParser: true,
  //   useCreateIndex: true,
  //   useUnifiedTopology: true,
  //   useFindAndModify: true,
  // });

  // console.log("MongoDB Connected");

  try {
    const conn = await mongoose.connect(URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      // useCreateIndex: true,
      // useFindAndModify: true,
    });

    console.log(
      `MongoDB Connected: ${conn.connection.host}`.cyan.underline.bold
    );
  } catch (err) {
    console.log(`Error: ${err.message}`.red);
    // process.exit(1);
  }
};

module.exports = connectDB;
