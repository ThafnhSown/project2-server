"user strict";

const mongoose = require("mongoose");

const connectString = 'mongodb://127.0.0.1:27017/compileweb';

class Database {
  constructor() {
    this.connect();
  }

  connect(type = "mongodb") {
    mongoose.set("debug", { color: true });
    console.log("Connecting")
    mongoose
      .connect(connectString, {
        maxPoolSize: 50,
      })
      .then((_) => {
        console.log("Connect database successfully!");
        // count number of connections ->
        // countConnect();
      })
      .catch((err) => console.log("Error connecting: ", err));
  }

  static getInstance() {
    if (!Database.instance) {
      Database.instance = new Database();
    }
    return Database.instance;
  }
}

const instanceMongodb = Database.getInstance();

module.exports = instanceMongodb;
