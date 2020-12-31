import mongoose, { Schema, Document } from "mongoose";

export interface IAbout extends Document {
  description: string;
  knowledges: string;
}

const About = new Schema({
  description: Schema.Types.String,
  knowledges: Schema.Types.String,
  createdIn: {
    type: Date,
    default: Date.now
  }
});

export default mongoose.model<IAbout>("About", About);
