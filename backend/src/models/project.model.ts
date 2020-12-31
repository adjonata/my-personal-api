import mongoose, { Schema, Document } from "mongoose";

export interface IProject extends Document {
  image: string;
  title: string;
  description?: string;
  link: string;
  spotlight: boolean;
  color?: string;
}

const Projects = new Schema({
  image: Schema.Types.String,
  title: Schema.Types.String,
  description: Schema.Types.String,
  link: Schema.Types.String,
  spotlight: Schema.Types.Boolean,
  color: Schema.Types.String,
  createdIn: {
    type: Date,
    default: Date.now
  }
});

export default mongoose.model<IProject>("Projects", Projects);
