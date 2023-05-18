import mongoose from "mongoose";
import app from "./app";

const port: number = 5000;

// connected to the server
async function main() {
  try {
    await mongoose.connect("mongodb://127.0.0.1:27017/module-6");
    app.listen(port, () => {
      console.log(`Server is running on port ${port} successfully`);
    });
    console.log("Database connected successfully");
  } catch (err) {
    console.log("Database error", err);
  }
}

main();
