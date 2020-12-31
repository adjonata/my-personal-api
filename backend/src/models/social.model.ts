import mongoose, { Schema, Document } from "mongoose";

export interface ISocial extends Document {
  title: string;
  image?: string;
  link: string;
}

const Socials = new Schema({
  title: Schema.Types.String,
  image: Schema.Types.String,
  link: Schema.Types.String,
  createdIn: {
    type: Date,
    default: Date.now
  }
});

export default mongoose.model<ISocial>("Socials", Socials);
