import mongoose, { Schema, Document } from "mongoose";

export interface IAuth extends Document {
  email: string;
  password: string;
}

const Auth = new Schema({
  email: Schema.Types.String,
  password: Schema.Types.String,
  createdIn: {
    type: Date,
    default: Date.now
  }
});

export default mongoose.model<IAuth>("Auth", Auth);
