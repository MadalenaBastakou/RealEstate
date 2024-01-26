import { Residence } from "../models/Residence.js";

const add = async (req, res) => {
  const { name, price, description, image} = req.body;
  try {
 await Residence.create({
    name,
    price,
    description,
    image,
    user: req.user._id
  });
    return res.status(200).json({ added: true });
  } catch (err) {
    console.log(err);
    return res.status(500).json({ message: "Error in adding residence"});
  }
};

const fetchAll = async (req, res) => {
  try {
    const residence = await Residence.find({ user: req.user._id });
    return res.json(residence);
  } catch (err) {
    console.log(err);
    return res.json(err);
  }
};

const fetchOne = async (req, res) => {
  try {
    const id = req.params.id;
    const residence = await Residence.findById({ _id: id , user: req.user._id});
    return res.json(residence);
  } catch (err) {
    return res.json(err);
  }
};

const updateResidence = async (req, res) => {
  try {
    const id = req.params.id;
    const residence = await Residence.findOneAndUpdate({ _id: id, user:req.user._id }, req.body, {new: true});
    return res.json({ updated: true, residence });
  } catch (err) {
    return res.json(err);
  }
};

const deleteResidence = async (req, res) => {
  try {
    const id = req.params.id;
    const residence = await Residence.deleteOne({ _id: id, user: req.user._id });
    return res.json({ deleted: true});
  } catch (err) {
    return res.json(err);
  }
};

export default { add, fetchAll, fetchOne, updateResidence, deleteResidence };
