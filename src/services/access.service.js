"use strict";

const UserService = require("./user.service");

class AccessService {
  static signUp = async (req, res) => {
    const { name, email, password} = req.body
    const foundUser = await UserService.findByEmail({ email });
    if(foundUser) {
        throw new BadRequestError("Error: User has already been registered");
    }

    const newUser = await UserService.createUser({
        name,
        email,
        password
    });

    if(newUser) {
        console.log("user created", newUser);
    }
  };

  static logIn = async (req, res) => {
    const { email, password} = req.body
    const foundUser = await UserService.findByEmail({ email });
    if(!foundUser) {
        throw new BadRequestError("Error: email or password is not correct");
    }
  };

//   static logout = async (res, { keyStore, refreshToken }) => {
//     await updateKeyToken({
//       userId: keyStore.userId,
//       refreshToken: keyStore.refreshToken.filter((rt) => rt !== refreshToken),
//       oldRefreshToken: refreshToken,
//     });

//     res.clearCookie("jwt", {
//       httpOnly: true,
//       sameSite: "None",
//       secure: true,
//     });

//     return {};
//   };
}

module.exports = AccessService;
