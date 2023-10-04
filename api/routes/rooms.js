import express from 'express';
import { verifyAdmin } from '../../utlis/verifyToken.js';
import { createRoom } from '../../controllers/roomController.js';
import { updateRoom } from '../../controllers/roomController.js';
import { deleteRoom } from '../../controllers/roomController.js';
import { getRoom } from '../../controllers/roomController.js';
import { getRooms } from '../../controllers/roomController.js';
const router = express.Router()




router.post("/:hotelid", verifyAdmin, createRoom);
//update by id
router.put("/:id",verifyAdmin, updateRoom)
//delete by id
router.delete("/:id",verifyAdmin, deleteRoom )
//get byid
router.get("/:id",getRoom );
//getall hotel/getHotels
router.get("/",getRooms);

export default router;

