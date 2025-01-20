import {
  ICareer,
  ICareerGroup,
} from "@/app/career/_components/_interfaces/career";

export function getCareerStartYm(career: ICareer) {
  return `${career.from.year} / ${career.from.month}`;
}

export function getCareerGroupStartYm(careerGroup: ICareerGroup) {
  if (careerGroup.careers.length === 0) {
    return " / ";
  }
  const career = careerGroup.careers[careerGroup.careers.length - 1];
  return getCareerStartYm(career);
}
