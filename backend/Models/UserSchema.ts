import { Document, Schema, model } from "mongoose";

interface IPodcast {
  title: string;
  description: string;
  thumbnail: string;
  audio: string;
  video: string;
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

  podcasts: [
    {
      title: { type: String, required: true },
      description: { type: String, required: true },
      thumbnail: { type: String, required: true },
      audio: { type: String, required: true },
      video: { type: String, required: true },
    },
  ],
});

const User = model<IUser>("User", UserSchema);

export default User;
