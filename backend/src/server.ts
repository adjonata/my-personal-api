import * as dotenv from "dotenv";

dotenv.config({
  path: __dirname + "/../.env"
});

import mongoose from "mongoose";
import app from "./app";

mongoose
  .connect(process.env.CONNECTION!, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false
  })
  .then(() => {
    let port: number = 3333;

    if (process.env.NODE_ENV === "production") {
      port = parseInt(process.env.PRODUCTION_PORT);
    }
    app.listen(port, () => {
      console.log(`Server running on port ${port}!`);
    });
  })
  .catch(error => {
    console.log(error);
  });
