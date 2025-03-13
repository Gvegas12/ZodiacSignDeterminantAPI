import { Router } from 'express';
import { ZodiacSignDeterminantController } from './zodiac-sign-determinant.controller';

const controller = new ZodiacSignDeterminantController();
const router = Router();

// Регистрируем обработчики
router.post('/', controller.postZodiacSignDeterminant);

export const ZodiacSignDeterminantRouter = router;
