import { Request, Response } from 'express';
import { addLocation, deleteLocation, editLocation, getAllLocations} from '../models/locationModel';
import Location from '../interfaces/location';

export default {
  addLocation: async (req: Request, res: Response): Promise<void> => {
    try {
      const location: Location = req.body;
      const result = await addLocation(location);
      res.status(201).json({ message: 'Location added successfully', data: result });
    } catch (error) {
      res.status(500).json({ message: 'Failed to add location', error });
    }
  },

  getAllLocations: async (req: Request, res: Response): Promise<void> => {
    try {
    
      const locationData = await getAllLocations();
      res.status(200).json({locationData});
    } catch (error) {
      res.status(500).json({ message: 'Failed to retrieve locations', error });
    }
  },
  editLocation: async (req: Request, res: Response): Promise<void> => {
    try {
      const { id } = req.params;
      const location: Location = req.body;
      const result = await editLocation(Number(id), location);
      res.status(200).json({ message: 'Location updated successfully', data: result });
    } catch (error) {
      res.status(500).json({ message: 'Failed to update location', error });
    }
  },
  
  deleteLocation: async (req: Request, res: Response): Promise<void> => {
    try {
      const { id } = req.params;
      const result = await deleteLocation(Number(id));
      res.status(200).json({ message: 'Location deleted successfully', data: result });
    } catch (error) {
      res.status(500).json({ message: 'Failed to delete location', error });
    }
  }
}
