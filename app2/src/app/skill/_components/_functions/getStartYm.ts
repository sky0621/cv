import { formatYm } from "@/app/_functions/formatYm";
import { ISkillVersion } from "@/app/skill/_components/_interfaces/SkillInterfaces";

export function getSkillVersionStartYm(skillVersion: ISkillVersion) {
  return formatYm(skillVersion.from.year, skillVersion.from.month);
}
