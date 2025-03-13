import dayjs from 'dayjs';
import { ZodiacSign } from './types';
import { EZodiac } from './enums/zodiac.enum';

export class ZodiacSignDeterminantService {
  public getZodiacSign(birthdate: string): EZodiac {
    const DATE_FORMAT = 'YYYY/MM/DD';
    const date = dayjs(birthdate, DATE_FORMAT);

    // Массив знаков зодиака с диапазонами дат
    const zodiacSigns: ZodiacSign[] = [
      { start: [12, 22], end: [1, 19], sign: EZodiac.Capricorn }, // 22 дек - 19 янв
      { start: [1, 20], end: [2, 18], sign: EZodiac.Aquarius }, // 20 янв - 18 фев
      { start: [2, 19], end: [3, 20], sign: EZodiac.Pisces }, // 19 фев - 20 мар
      { start: [3, 21], end: [4, 19], sign: EZodiac.Aries }, // 21 мар - 19 апр
      { start: [4, 20], end: [5, 20], sign: EZodiac.Taurus }, // 20 апр - 20 май
      { start: [5, 21], end: [6, 20], sign: EZodiac.Gemini }, // 21 май - 20 июн
      { start: [6, 21], end: [7, 22], sign: EZodiac.Cancer }, // 21 июн - 22 июл
      { start: [7, 23], end: [8, 22], sign: EZodiac.Leo }, // 23 июл - 22 авг
      { start: [8, 23], end: [9, 22], sign: EZodiac.Virgo }, // 23 авг - 22 сен
      { start: [9, 23], end: [10, 22], sign: EZodiac.Libra }, // 23 сен - 22 окт
      { start: [10, 23], end: [11, 21], sign: EZodiac.Scorpio }, // 23 окт - 21 ноя
      { start: [11, 22], end: [12, 21], sign: EZodiac.Sagittarius }, // 22 ноя - 21 дек
    ];

    // Создаем даты для сравнения в одном году (2000 - невисокосный)
    const year = 2000;
    const birth = date.set('year', year);

    for (const { sign, start, end } of zodiacSigns) {
      const [startMonth, startDay] = start;
      const [endMonth, endDay] = end;

      // Для диапазонов, переходящих через год (Козерог)
      const startDate = dayjs(new Date(year, startMonth - 1, startDay));
      const endDate = dayjs(
        new Date(endMonth >= startMonth ? year : year + 1, endMonth - 1, endDay)
      );

      // Проверка вхождения в диапазон
      if (
        birth.isAfter(startDate.subtract(1, 'day')) &&
        birth.isBefore(endDate.add(1, 'day'))
      ) {
        return sign;
      }
    }

    throw new Error('Невалидная дата');
  }
}
