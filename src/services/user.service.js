"use strict";

const userModel = require("../models/user.model");

const selectOptions = {
  email: 1,
  password: 1,
  name: 1,
};

class UserService {
  static findByEmail = async ({ email, select = selectOptions }) => {
    return await userModel
      .findOne({ email: email })
      .select(select)
      .lean()
      .exec();
  };

  static findByUserId = async ({ userId, select = selectOptions }) => {
    return await userModel
      .findOne({ _id: userId })
      .select(select)
      .lean()
      .exec();
  };

  static createUser = async ({
    name,
    email,
    password,
  }) => {
    return await userModel.create({
      name,
      email,
      password,
    });
  };

}

module.exports = UserService;
