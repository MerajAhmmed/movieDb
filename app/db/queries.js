import { userModel } from "../models/user-model";

export async function createUser(user) {
  return await userModel.create(user);
}
