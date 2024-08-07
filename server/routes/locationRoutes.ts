import express from 'express';
const router = express.Router();
import locationController from '../controllers/locationController';

router.post('/addLocation', locationController.addLocation);
router.get('/getLocations', locationController.getAllLocations);
router.put('/editLocation/:id', locationController.editLocation);
router.delete('/deleteLocation/:id', locationController.deleteLocation);

export default router;