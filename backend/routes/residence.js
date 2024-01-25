import express from "express";
import { Residence } from "../models/Residence.js";
const router = express.Router();
import { verifyUser } from "../middleware/verifyUser.js";

router.post("/add", verifyUser, async (req, res) => {
  try {
    const { name, price, description, imageUrl } = req.body;
    const newresidence = new Residence({
      name,
      price,
      description,
      imageUrl,
    });
    await newresidence.save();
    return res.json({ added: true });
  } catch (err) {
    return res.json({ message: "Error in adding residence" });
  }
});

router.get("/residence", async (req, res) => {
  try {
    const residence = await Residence.find();
    return res.json(residence);
  } catch (err) {
    return res.json(err);
  }
});

router.get("/residence/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const residence = await Residence.findById({ _id: id });
    return res.json(residence);
  } catch (err) {
    return res.json(err);
  }
});

router.put("/residence/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const residence = await Residence.findByIdAndUpdate({ _id: id }, req.body);
    return res.json({ updated: true, residence });
  } catch (err) {
    return res.json(err);
  }
});

router.delete("/residence/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const residence = await Residence.findByIdAndDelete({ _id: id });
    return res.json({ deleted: true, residence });
  } catch (err) {
    return res.json(err);
  }
});

export { router as residenceRouter };
