import { Typography } from "@mui/joy";
import { ICareer } from "@/app/career/_components/_interfaces/career";
import { getCareerStartYm } from "@/app/career/_components/_functions/getStartYm";
import { calculateCareerDifference } from "@/app/career/_components/_functions/calculateDifference";
import { getCareerEndYm } from "@/app/career/_components/_functions/getEndYm";
import Period from "@/components/Period/Period";

type Props = {
  career: ICareer;
};

export default function CareerNameArea(props: Props) {
  const startYm = getCareerStartYm(props.career);
  const endYm = getCareerEndYm(props.career);
  const period = calculateCareerDifference(props.career);
  return (
    <>
      Period
      <Period startYm={startYm} endYm={endYm} period={period} />
      <Typography level="title-lg">{props.career.name}</Typography>
    </>
  );
}
