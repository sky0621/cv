import { Typography } from "@mui/joy";
import { ICareer } from "@/app/career/_components/_interfaces/career";
import { getCareerStartYm } from "@/app/career/_components/_functions/getStartYm";
import { calculateCareerDifference } from "@/app/career/_components/_functions/calculateDifference";
import { getCareerEndYm } from "@/app/career/_components/_functions/getEndYm";

type Props = {
  career: ICareer;
};

export default function CareerNameArea(props: Props) {
  const startYm = getCareerStartYm(props.career);
  const endYm = getCareerEndYm(props.career);
  const period = calculateCareerDifference(props.career);
  return (
    <>
      <Typography level="title-sm">
        <span>{startYm}</span>
        <span style={{ marginLeft: "0.5rem" }}>~</span>
        <span style={{ marginLeft: "0.5rem" }}>{endYm}</span>
        <span style={{ marginLeft: "0.5rem" }}>({period})</span>
      </Typography>
      <Typography level="title-lg">{props.career.name}</Typography>
    </>
  );
}
