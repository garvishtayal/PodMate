import mongoose, { Document, Schema, Types, model } from "mongoose";

interface IPodcast extends Document {
  owner: Types.ObjectId;
  title: string;
  description: string;
  thumbnail: string;
  audio: string;
  video: string;
}

const PodcastSchema = new Schema<IPodcast>({
  owner: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  title: { type: String, required: true },
  description: { type: String, required: true },
  thumbnail: { type: String, required: true },
  audio: { type: String, required: true },
  video: { type: String, required: true },
});

const Podcast = model<IPodcast>("Podcast", PodcastSchema);
export default Podcast;
