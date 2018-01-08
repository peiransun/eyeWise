import { model } from "mongoose";
import { UserSchema } from "../schema";
import { IUser } from "../interface";

export const User = model<IUser>("User", UserSchema);

