import { DateTime } from "luxon";
import {
  ICareer,
  ICareerGroup,
} from "@/app/career/_components/_interfaces/career";

export function _calculateDifference(
  fromY: number,
  fromM: number,
  toY: number,
  toM: number
) {
  // 入力値をLuxonのDateTimeオブジェクトに変換
  const startDate = DateTime.local(Number(fromY), Number(fromM));
  const endDate = DateTime.local(Number(toY), Number(toM)).plus({ days: 1 }); // 終了月を含むよう調整

  // 差分を計算 (開始月と終了月を含める)
  const diff = endDate.diff(startDate, ["years", "months"]).toObject();

  // 年と月の期間を計算
  const totalYears = Math.abs(diff.years || 0);
  const totalMonths = Math.abs(diff.months || 0) + 1; // 開始月を含むため+1

  // 月が12以上の場合、年に繰り上げる
  const adjustedYears = totalYears + Math.floor(totalMonths / 12);
  const adjustedMonths = Math.round(totalMonths % 12);

  if (adjustedYears > 0) {
    return `${adjustedYears}年${adjustedMonths}ヶ月`;
  }
  return `${adjustedMonths}ヶ月`;
}

export function calculateCareerDifference(career: ICareer) {
  return _calculateDifference(
    career.from.year,
    career.from.month,
    career.to ? career.to.year : 0,
    career.to ? career.to.month : 0
  );
}

export function calculateCareerGroupDifference(careerGroup: ICareerGroup) {
  if (careerGroup.careers.length === 0) {
    return "0ヶ月";
  }
  const start = careerGroup.careers[careerGroup.careers.length - 1];
  const end = careerGroup.careers[0];
  return calculateCareerDifference({
    description: [],
    id: 0,
    name: "",
    skillGroups: [],
    tasks: [],
    from: start.from,
    to: end.to,
  });
}
