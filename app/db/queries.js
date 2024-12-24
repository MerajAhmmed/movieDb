import { userModel } from "../models/user-model";
import { dbConnect } from "../services/mongo";

export async function createUser(user) {
  await dbConnect();
  return await userModel.create(user);
}
