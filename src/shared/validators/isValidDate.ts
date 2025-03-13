export const isValidDate = (value: string) => {
  /**
   * @example 2025/12/05
   */
  const dateFormatRegExp = /^\d{4}\/\d{2}\/\d{2}$/;

  if (typeof value === 'string') {
    const regex = new RegExp(dateFormatRegExp);
    return regex.test(value);
  }
  return false;
};
