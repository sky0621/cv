import { Typography } from "@mui/joy";
import { ICareerGroup } from "@/app/career/_components/_interfaces/career";
import { getCareerGroupStartYm } from "@/app/career/_components/_functions/getStartYm";
import { calculateCareerGroupDifference } from "@/app/career/_components/_functions/calculateDifference";
import { getCareerGroupEndYm } from "@/app/career/_components/_functions/getEndYm";

type Props = {
  careerGroup: ICareerGroup;
};

export default function CareerGroupLabel(props: Props) {
  const startYm = getCareerGroupStartYm(props.careerGroup);
  const endYm = getCareerGroupEndYm(props.careerGroup);
  const period = calculateCareerGroupDifference(props.careerGroup);
  return (
    <>
      <Typography level="title-sm">
        <span>{startYm}</span>
        <span style={{ marginLeft: "0.5rem" }}>~</span>
        <span style={{ marginLeft: "0.5rem" }}>{endYm}</span>
        <span style={{ marginLeft: "0.5rem" }}>({period})</span>
      </Typography>
      <Typography level="h3">{props.careerGroup.label}</Typography>
    </>
  );
}
