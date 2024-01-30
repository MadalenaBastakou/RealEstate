import express from "express";
import { verifyUser } from "../middleware/verifyUser.js";
import residenceController from "../controllers/residenceControllers.js";

const residenceRouter = express.Router();

// add a new residence
residenceRouter.post("/add", verifyUser, residenceController.add);

// fetch all the user's residences
residenceRouter.get("/", verifyUser, residenceController.fetchAll);
// fetch all the residences of all registered users
residenceRouter.get("/all", residenceController.fetchAllResidences);
// fetch the user's selected residence
residenceRouter.get("/:id", residenceController.fetchOne);
// update the user's selected residence
residenceRouter.put("/:id", verifyUser, residenceController.updateResidence);
// delete the user's selected residence
residenceRouter.delete("/:id", verifyUser, residenceController.deleteResidence);

export { residenceRouter };
