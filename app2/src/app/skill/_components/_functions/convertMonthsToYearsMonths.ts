export function convertMonthsToYearsMonths(months: number): string {
  if (months < 0) {
    throw new Error("月数は0以上である必要があります。");
  }

  const years = Math.floor(months / 12);
  const remainingMonths = months % 12;

  if (years > 0 && remainingMonths > 0) {
    return `${years}年${remainingMonths}ヶ月`;
  } else if (years > 0) {
    return `${years}年`;
  } else {
    return `${remainingMonths}ヶ月`;
  }
}
