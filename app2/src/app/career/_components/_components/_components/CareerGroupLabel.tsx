import { Typography } from "@mui/joy";
import { ICareerGroup } from "@/app/career/_components/_interfaces/career";
import { getCareerGroupStartYm } from "@/app/career/_components/_functions/getStartYm";
import { calculateCareerGroupDifference } from "@/app/career/_components/_functions/calculateDifference";
import { getCareerGroupEndYm } from "@/app/career/_components/_functions/getEndYm";
import Period from "@/components/Period/Period";

type Props = {
  careerGroup: ICareerGroup;
};

export default function CareerGroupLabel(props: Props) {
  const startYm = getCareerGroupStartYm(props.careerGroup);
  const endYm = getCareerGroupEndYm(props.careerGroup);
  const period = calculateCareerGroupDifference(props.careerGroup);
  return (
    <>
      <Period startYm={startYm} endYm={endYm} period={period} />
      <Typography level="h3">{props.careerGroup.label}</Typography>
    </>
  );
}
