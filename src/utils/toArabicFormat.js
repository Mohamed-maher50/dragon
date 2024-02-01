export const toArabicFormat = (number) => {
  const formatter = new Intl.NumberFormat("ar-EG");
  return formatter.format(number);
};
