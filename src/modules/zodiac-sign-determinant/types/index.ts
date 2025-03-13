import { EZodiac } from '../enums/zodiac.enum';

export type ZodiacSign = {
  start: [number, number];
  end: [number, number];
  sign: EZodiac;
};
