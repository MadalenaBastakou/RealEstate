import mongoose from "mongoose";

const residenceSchema = new mongoose.Schema({
  user:{type: mongoose.Schema.Types.ObjectId, required: true, ref:'User'},
  name: { type: String, required: true },
  price: { type: String, required: true },
  description: { type: String, required: true },
  images: [{ type: String, required: true }],
});

const Residence = mongoose.model("Residence", residenceSchema);

export { Residence };
