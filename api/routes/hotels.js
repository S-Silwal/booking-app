import express from "express";

import { createError } from "../../utlis/error.js";
import { createHotel } from "../../controllers/hotelController.js";
import { updateHotel } from "../../controllers/hotelController.js";
import { deleteHotel } from "../../controllers/hotelController.js";
import { getHotel } from "../../controllers/hotelController.js";
import { getHotels } from "../../controllers/hotelController.js";

import { verifyAdmin } from "../../utlis/verifyToken.js";

const router = express.Router();
router.post("/", verifyAdmin, createHotel);
//update by id
router.put("/:id",verifyAdmin, updateHotel)
//delete by id
router.delete("/:id",verifyAdmin, deleteHotel )
//get byid
router.get("/:id",getHotel );
//getall hotel/getHotels
router.get("/",getHotels);
router.get("/countByCity",getHotels);
router.get("/countByType",getHotels);

export default router;
