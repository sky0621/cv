import { DateTime } from "luxon";

export default function calculateAge(year: number, month: number, day: number) {
  const birthDate = DateTime.local(Number(year), Number(month), Number(day));
  if (!birthDate.isValid) {
    alert("無効な日付です。正しい値を入力してください");
    return -1;
  }
  const today = DateTime.now();
  const calculatedAge = today.diff(birthDate, "years").years;
  return Math.floor(calculatedAge);
}
