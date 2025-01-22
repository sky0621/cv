import { ISkillVersion } from "@/app/skill/_components/_interfaces/SkillInterfaces";
import { Stack, Typography } from "@mui/joy";
import { convertMonthsToYearsMonths } from "@/app/skill/_components/_functions/convertMonthsToYearsMonths";
import { getVersion } from "@/app/skill/_components/_functions/getVersion";
import { getSkillVersionStartYm } from "@/app/skill/_components/_functions/getStartYm";
import { getSkillVersionEndYm } from "@/app/skill/_components/_functions/getEndYm";
import Period from "@/components/Period/Period";

type Props = {
  version: ISkillVersion;
};

export default function SkillVersionArea(props: Props) {
  const version = getVersion(props.version.version);
  const startYm = getSkillVersionStartYm(props.version);
  const endYm = getSkillVersionEndYm(props.version);
  const period = props.version.period
    ? convertMonthsToYearsMonths(props.version.period)
    : "";
  return (
    <Stack sx={{ marginBottom: "0.5rem" }}>
      <Typography>
        <span style={{ fontSize: "0.9rem", paddingRight: "0.5rem" }}>
          使用バージョン:
        </span>
        {version}
      </Typography>
      <Period startYm={startYm} endYm={endYm} period={period} />
    </Stack>
  );
}
