import mongoose, {Schema} from "mongoose";

const residenceSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, required: true, ref: "User" },
  name: { type: String, required: true },
  category: { type: String, required: true },
  price: { type: String, required: true },
  location: { type: String, required: true },
  description: { type: String, required: true },
  favoriteBy: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }],
  image: {
    type: String,
    required: true,
  },
});

const Residence = mongoose.model("Residence", residenceSchema);

export { Residence };
