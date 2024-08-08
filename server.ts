import express, { Application } from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import dotenv from 'dotenv';
import adminRoutes from '../backend/server/routes/adminRoutes'
import locationRoutes from '../backend/server/routes/locationRoutes';
import sequelize from '../backend/server/config/sequelize';

dotenv.config();

const app: Application = express();

app.use(cors(
  {
    origin: 'http://localhost:4200'
  }
));
app.use(express.json({limit:"30mb"}));
app.use(express.urlencoded({ extended: true }));

app.use('/api/admin', adminRoutes);
app.use('/api/locations', locationRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, async () => {
  console.log(`Server is running on port http://localhost:${PORT}`);

  try {
    await sequelize.sync();
    console.log('Database synchronized successfully.');
  } catch (error) {
    console.error('Error synchronizing the database:', error);
  }
});

export default app;
