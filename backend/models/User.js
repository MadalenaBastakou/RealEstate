import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  username: { type: String, required: true },
  email: { type: String, required: true },
  password: { type: String, required: true },
  residencies: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Residence'
  }]
});

const User = mongoose.model("User", userSchema);

export { User };
