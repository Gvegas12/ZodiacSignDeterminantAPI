import { Request, Response } from 'express';
import { ZodiacSignDeterminantService } from './zodiac-sign-determinant.service';
import { isValidDate } from '../../shared/validators/isValidDate';

const zsdService = new ZodiacSignDeterminantService();

export class ZodiacSignDeterminantController {
  public postZodiacSignDeterminant(req: Request, res: Response) {
    try {
      // Получаем данные из запроса
      const { dateOfBirth } = req.body;

      // Проверяем корректность даты рождения
      if (!isValidDate(dateOfBirth)) {
        throw new Error('Invalid date of birth. Valid format: YYYY/MM/DD');
      }

      // Получаем знак зодиака по дате рождения
      const zodiacSign = zsdService.getZodiacSign(dateOfBirth);

      // Возвращаем результат в виде объекта
      res.status(200).json({
        success: true,
        data: { zodiacSign },
      });
    } catch (error) {
      if (error instanceof Error) {
        // Возвращаем ошибку в виде объекта
        res.status(400).json({
          success: false,
          error: error.message,
        });

        return;
      }
    }
  }
}
