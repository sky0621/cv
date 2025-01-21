import {
  ICareer,
  ICareerGroup,
} from "@/app/career/_components/_interfaces/career";
import { formatYm } from "@/app/_functions/formatYm";

export function getCareerEndYm(career: ICareer) {
  if (career.to) {
    return formatYm(career.to.year, career.to.month);
  }
  return " / ";
}

export function getCareerGroupEndYm(careerGroup: ICareerGroup) {
  if (careerGroup.careers.length === 0) {
    return " / ";
  }
  const career = careerGroup.careers[0];
  return getCareerEndYm(career);
}
