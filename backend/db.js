const mongoose = require("mongoose");
const mongoURI =
  "mongodb+srv://panthinabin7:wg86pPSRKVMb2Aau@cluster0.9g3njsv.mongodb.net/?retryWrites=true&w=majority";

async function mongoDB() {
  // await mongoose.connect(mongoURI);
  mongoose.connect(mongoURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });

  console.log("connected ");
}

module.exports = mongoDB;
