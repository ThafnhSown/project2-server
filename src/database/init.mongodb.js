"user strict";

const mongoose = require("mongoose");
const mongoosePaginate = require("mongoose-paginate-v2");
const {
  db: { host, port, name },
} = require("../config/config.mongodb");
const connectString = `mongodb://${host}:${port}/${name}`;

class Database {
  constructor() {
    this.connect();
  }

  connect(type = "mongodb") {
    mongoose.set("debug", { color: true });
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
