import mongoose from "mongoose";

const residenceSchema = new mongoose.Schema({
  name: { type: String },
  price: { type: String, required: true },
  description: { type: String, required: true },
  imageUrl: { type: String, required: true },
});

const residenceModel = mongoose.model("Residencie", residenceSchema);
export { residenceModel as Residence };
