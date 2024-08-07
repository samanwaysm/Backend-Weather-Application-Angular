import connection from '../config/connection';
import Location from '../interfaces/location';
import { RowDataPacket } from 'mysql2';

// Define an interface for the expected result
interface CountResult extends RowDataPacket {
  count: number;
}

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

// Check City
// export const checkCity = (city: string): Promise<boolean> => {
//   return new Promise((resolve, reject) => {
//     const query = 'SELECT COUNT(*) AS count FROM locations WHERE city = ?';
//     connection.query(query, [city], (error, results) => {
//       if (error) {
//         return reject(error);
//       }
//       const exists = results[0].count > 0;
//       resolve(exists);
//     });
//   });
// };

export const checkCity = (city: string): Promise<boolean> => {
  return new Promise((resolve, reject) => {
    const query = 'SELECT COUNT(*) AS count FROM locations WHERE city = ?';
    connection.query(query, [city], (error, results: CountResult[]) => {
      if (error) {
        return reject(error);
      }
      // Check if results are in the expected format
      if (results.length > 0 && results[0].count !== undefined) {
        const exists = results[0].count > 0;
        resolve(exists);
      } else {
        resolve(false);
      }
    });
  });
};

