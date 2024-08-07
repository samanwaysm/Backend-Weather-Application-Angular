import connection from '../config/connection';
import Location from '../interfaces/location';

// Add Location
export const addLocation = (location: Location): Promise<any> => {
  return new Promise((resolve, reject) => {
    const { country, state, district, city } = location;
    const query = 'INSERT INTO locations (country, state, district, city) VALUES (?, ?, ?, ?)';
    connection.query(query, [country, state, district, city], (error, results) => {
      if (error) {
        return reject(error);
      }
      resolve(results);
    });
  });
};

// Get All Locations
export const getAllLocations = (): Promise<any> => {
  return new Promise((resolve, reject) => {
    const query = 'SELECT * FROM locations';
    connection.query(query, (error, results) => {
      if (error) {
        return reject(error);
      }
      resolve(results);
    });
  });
};

// Edit Location
export const editLocation = (id: number, location: Location): Promise<any> => {
  return new Promise((resolve, reject) => {
    const { country, state, district, city } = location;
    const query = 'UPDATE locations SET country = ?, state = ?, district = ?, city = ? WHERE id = ?';
    connection.query(query, [country, state, district, city, id], (error, results) => {
      if (error) {
        return reject(error);
      }
      resolve(results);
    });
  });
};

// Delete Location
export const deleteLocation = (id: number): Promise<any> => {
  return new Promise((resolve, reject) => {
    const query = 'DELETE FROM locations WHERE id = ?';
    connection.query(query, [id], (error, results) => {
      if (error) {
        return reject(error);
      }
      resolve(results);
    });
  });
};