import {
  ICareer,
  ICareerGroup,
} from "@/app/career/_components/_interfaces/career";

export function getCareerEndYm(career: ICareer) {
  if (career.to) {
    return `${career.to.year} / ${career.to.month}`;
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
