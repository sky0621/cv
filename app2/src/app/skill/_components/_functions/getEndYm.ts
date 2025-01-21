import { formatYm } from "@/app/_functions/formatYm";
import { ISkillVersion } from "@/app/skill/_components/_interfaces/SkillInterfaces";

export function getSkillVersionEndYm(career: ISkillVersion) {
  if (career.to) {
    return formatYm(career.to.year, career.to.month);
  }
  return " / ";
}
