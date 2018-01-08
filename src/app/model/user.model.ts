import { Schema, model } from "mongoose";
import { IUser } from "../viewmodel";

const UserSchema = new Schema({
  name: { type: String },
  email: { type: String }
});

export const User = model<IUser>("User", UserSchema);
