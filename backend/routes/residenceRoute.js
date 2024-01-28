import express from "express";
import { verifyUser } from "../middleware/verifyUser.js";
import residenceController from "../controllers/residenceControllers.js"

const residenceRouter = express.Router();

residenceRouter.post("/add", verifyUser, residenceController.add);

residenceRouter.get("/", verifyUser, residenceController.fetchAll);
residenceRouter.get("/forRent", verifyUser, residenceController.fetchForRent);
residenceRouter.get("/forSale", verifyUser, residenceController.fetchForSale);

residenceRouter.get("/:id", verifyUser, residenceController.fetchOne);

residenceRouter.put("/:id", verifyUser, residenceController.updateResidence);

residenceRouter.delete("/:id", verifyUser, residenceController.deleteResidence);

export { residenceRouter };
