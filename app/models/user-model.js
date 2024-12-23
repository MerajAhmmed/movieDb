import mongoose, { Schema } from "mongoose";

const schema = new Schema({
  fname: {
    required: true,
    type: String,
  },
  lname: {
    required: true,
    type: String,
  },
  email: {
    required: true,
    type: String,
  },
  password: {
    required: true,
    type: String,
  },
  cpassword: {
    required: true,
    type: String,
  },
});

export const userModel =
  mongoose.models.users ?? mongoose.model("users", schema);
