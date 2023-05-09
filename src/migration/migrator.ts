import UserModel from "../model/user.model";

// import fs from "fs";
const fs = require("fs");

const migrate = async () => {
  try {
    let data = fs.readFileSync("./user.json");
    let result = await UserModel.create(JSON.stringify(data));
    if (result) {
      console.log("created");
    }
  } catch (e) {
    console.log(e);
  }
};

migrate();
