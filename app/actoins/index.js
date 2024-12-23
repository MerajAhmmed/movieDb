"use server";

import { redirect } from "next/navigation";
import { createUser } from "../db/queries";
import { userModel } from "../models/user-model";
import { replaceMongoIdInObject } from "../utils/dataUtils";

async function registerUser(formData) {
  const user = Object.fromEntries(formData);
  const created = await createUser(user);

  redirect("/login");
}

async function fundUserByCredential(Credential) {
  const user = await userModel.findOne(Credential).lean();
  if (user) {
    return replaceMongoIdInObject(user);
  }
  return null;
}

async function performLogin(formData) {
  try {
    const Credential = {};
    Credential.email = formData.get("email");
    Credential.password = formData.get("password");
    const found = await fundUserByCredential(Credential);
    return found;
  } catch (err) {
    throw err;
  }
}

export { fundUserByCredential, performLogin, registerUser };
