import LocationType from '../interfaces/locationType';
import Location from '../models/location';

// Add Location
export const addLocation = async (location: LocationType): Promise<Location> => {
  try {
    const newLocation = await Location.create(location as any);
    return newLocation;
  } catch (error) {
    throw error;
  }
};

// Get All Locations
export const getAllLocations = async (): Promise<Location[]> => {
  try {
    const locations = await Location.findAll();
    return locations;
  } catch (error) {
    throw error;
  }
};

// Delete Location
export const deleteLocation = async (id: number): Promise<number> => {
  try {
    const result = await Location.destroy({ where: { id } });
    return result;
  } catch (error) {
    throw error;
  }
};

// Check City
export const checkCity = async (city: string): Promise<boolean> => {
  try {
    const count = await Location.count({ where: { city } });
    return count > 0;
  } catch (error) {
    throw error;
  }
};
