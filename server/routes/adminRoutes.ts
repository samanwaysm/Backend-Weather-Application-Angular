import express from "express";
const route = express.Router();
import adminController from '../controllers/adminController';

route.post('/login',adminController.login)

route.get('/verifyToken', adminController.verifyAdmin);

export default route;