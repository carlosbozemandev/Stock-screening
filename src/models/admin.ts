import mongoose, { Schema, Document, Model } from "mongoose";

// Define an interface for the user document
interface IUser extends Document {
  fname: string;
  lname: string;
  username: string;
  email: string;
  password: string;
  blocked: boolean;
  token: string;
}

// Define the schema for the user model
const userSchema = new Schema<IUser>(
  {
    fname: { type: String, required: true },
    lname: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    blocked: { type: Boolean, required: true, default: true },
    token: { type: String },
  },
  {
    timestamps: true,
  }
);

// Create the user model if it doesn't exist already
const User: Model<IUser> =
  mongoose.models.User || mongoose.model<IUser>("User", userSchema);

export default User;
