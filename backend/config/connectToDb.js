import mongoose from "mongoose";

export default async function connectToDb() {
  try {
    await mongoose.connect(process.env.DB_URL);
    console.log("Database Connected");
  } catch (err) {
    console.log("Error :" + err);
  }
}
