import express from 'express';


const router = express.Router()
import { updateUser, deleteUser, getUser, getUsers } from '../../controllers/userController.js';

// router.get('/', (req,res)=>{
//     res.send("Hello, this is user endpoint")
// })



import { verifyAdmin, verifyToken } from '../../utlis/verifyToken.js';
import { verifyUser } from '../../utlis/verifyToken.js';
// router.get('/checkauthentication',verifyToken,(req,res,next)=>{
//     res.send("Hello user, you are logged in")
// })
// router.get('/checkuser/:id',verifyUser,(req,res,next)=>{
//     res.send("Hello user, you are logged in and you can delete yur account")
// })
// router.get('/checkadmin/:id',verifyAdmin,(req,res,next)=>{
//     res.send("Hello user, you are logged in and you can delete all account")
// })

router.put("/:id", verifyUser, updateUser)
//delete by id
router.delete("/:id",verifyUser, deleteUser )
//get byid
router.get("/:id",verifyUser, getUser );
//getall hotel/getUsers
router.get("/",verifyAdmin, getUsers);
router.get("/home")
export default router;