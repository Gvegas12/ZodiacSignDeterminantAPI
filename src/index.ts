import express, { Application } from 'express';
import dotenv from 'dotenv';
import { ZodiacSignDeterminantRouter } from './modules/zodiac-sign-determinant/zodiac-sign-determinant.router';

dotenv.config();

const app: Application = express();
const port = process.env.PORT || 3000;

app.use(express.json());

// Подключаем роутер
app.use('/api/v1/zodiac', ZodiacSignDeterminantRouter);

// Обработка 404
app.use((_req, res) => {
  res.status(404).json({
    success: false,
    error: 'Endpoint not found',
  });
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
