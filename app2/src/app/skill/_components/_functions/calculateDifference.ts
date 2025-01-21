import {
  ICareer,
  ICareerGroup,
} from "@/app/career/_components/_interfaces/career";
import { calculateDifference } from "@/app/_functions/calculateDifference";

export function calculateCareerDifference(career: ICareer) {
  return calculateDifference(
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
