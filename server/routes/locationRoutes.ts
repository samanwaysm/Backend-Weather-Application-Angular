import express from 'express';
const router = express.Router();
import locationController from '../controllers/locationController';
import verifyToken from "../middleware/authAdmin";

router.post('/addLocation', verifyToken, locationController.addLocation);
router.get('/getLocations', verifyToken, locationController.getAllLocations);
router.delete('/deleteLocation/:id', verifyToken, locationController.deleteLocation);

router.post('/checkCity', locationController.checkCity);

export default router;