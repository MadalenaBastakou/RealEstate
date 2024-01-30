import { Residence } from "../models/Residence.js";

//add new residence
const add = async (req, res) => {
  const { name, price, category, description, image, location, favoriteBy } =
    req.body;
  if (!name || !price || !category || !description || !image || !location) {
    return res.status(400).json({ msg: "Please enter all the fields" });
  }
  try {
    await Residence.create({
      name,
      price,
      category,
      description,
      location,
      image,
      favoriteBy,
      user: req.user._id,
    });
    return res.status(200).json({ added: true });
  } catch (err) {
    console.log(err);
    res.json(err);
  }
};

// get all the user's residences
const fetchAll = async (req, res) => {
  try {
    const residence = await Residence.find({ user: req.user._id });
    return res.json(residence);
  } catch (err) {
    console.log(err);
    return res.json(err);
  }
};

// get the residences of all the users
const fetchAllResidences = async (req, res) => {
  try {
    const residence = await Residence.find({});
    return res.json(residence);
  } catch (err) {
    console.log(err);
    return res.json(err);
  }
};

// get one residence based on its id
const fetchOne = async (req, res) => {
  try {
    const id = req.params.id;
    const residence = await Residence.findOne({ _id: id });
    return res.json(residence);
  } catch (err) {
    return res.json(err);
  }
};

// get and update selected residence
const updateResidence = async (req, res) => {
  try {
    const id = req.params.id;
    const residence = await Residence.findOneAndUpdate(
      { _id: id, user: req.user._id },
      req.body,
      { new: true }
    );
    return res.json({ updated: true, residence });
  } catch (err) {
    return res.json(err);
  }
};

// delete a selected residence
const deleteResidence = async (req, res) => {
  try {
    const id = req.params.id;
    const residence = await Residence.deleteOne({
      _id: id,
      user: req.user._id,
    });
    return res.json({ deleted: true });
  } catch (err) {
    return res.json(err);
  }
};

export default {
  add,
  fetchAll,
  fetchAllResidences,
  fetchOne,
  updateResidence,
  deleteResidence,
};
