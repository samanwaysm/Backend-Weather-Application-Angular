import express from "express";
const route = express.Router();
import adminController from '../controllers/adminController';

route.post('/login',adminController.login)


export default route;