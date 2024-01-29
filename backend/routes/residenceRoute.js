import express from "express";
import { verifyUser } from "../middleware/verifyUser.js";
import residenceController from "../controllers/residenceControllers.js";

const residenceRouter = express.Router();

residenceRouter.post("/add", verifyUser, residenceController.add);

// fetch all the user's residences
residenceRouter.get("/", verifyUser, residenceController.fetchAll);
// fetch all the residences of all registered users
residenceRouter.get("/all", residenceController.fetchAllResidences);
residenceRouter.get("/forRent", residenceController.fetchForRent);
residenceRouter.get("/forSale", residenceController.fetchForSale);
residenceRouter.get("/:id", residenceController.fetchOne);


residenceRouter.put("/:id", verifyUser, residenceController.updateResidence);

residenceRouter.delete("/:id", verifyUser, residenceController.deleteResidence);

export { residenceRouter };
