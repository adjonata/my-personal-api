import mongoose, { Schema, Document } from "mongoose";

export interface IKnowledges extends Document {
  link?: string;
  title: string;
  image: string;
}

const Knowledges = new Schema({
  link: Schema.Types.String,
  title: Schema.Types.String,
  image: Schema.Types.String,
  createdIn: {
    type: Schema.Types.Date,
    default: Date.now
  }
});

export default mongoose.model<IKnowledges>("Knowledges", Knowledges);
