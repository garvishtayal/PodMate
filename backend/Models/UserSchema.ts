import mongoose, { Document, Schema, Types, model } from "mongoose";

interface IPodcast {
  _id: Types.ObjectId;
}

interface IUser extends Document {
  name: string;
  email: string;
  password: string;
  pic: string;
  podcasts: IPodcast[];
}

const UserSchema = new Schema<IUser>({
  name: { type: String, required: true },
  email: { type: String, required: true },
  password: { type: String, required: true },
  pic: { type: String, default: "a default pic" },

  podcasts: [{ _id: { type: mongoose.Schema.Types.ObjectId, ref: "Podcast" } }],
});

const User = model<IUser>("User", UserSchema);

export default User;
