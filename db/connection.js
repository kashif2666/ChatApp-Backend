const mongoose = require("mongoose");

const url =
  "mongodb+srv://kashifjsr7:TT8Uh04mrxp1PeEm@cluster0.dzt84d8.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

mongoose
  .connect(url, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("Connected to Db"))
  .catch((e) => console.log("Error", e));
