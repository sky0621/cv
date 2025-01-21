import {
  ICareer,
  ICareerGroup,
} from "@/app/career/_components/_interfaces/career";
import { formatYm } from "@/app/_functions/formatYm";

export function getCareerStartYm(career: ICareer) {
  return formatYm(career.from.year, career.from.month);
}

export function getCareerGroupStartYm(careerGroup: ICareerGroup) {
  if (careerGroup.careers.length === 0) {
    return " / ";
  }
  const career = careerGroup.careers[careerGroup.careers.length - 1];
  return getCareerStartYm(career);
}
