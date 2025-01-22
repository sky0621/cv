import { Typography } from "@mui/joy";

type Props = {
  startYm: string;
  endYm: string;
  period: string;
};

export default function Period(props: Props) {
  const space = "0.5rem";
  return (
    <Typography level="title-sm">
      <span>{props.startYm}</span>
      <span style={{ marginLeft: space }}>~</span>
      <span style={{ marginLeft: space }}>{props.endYm}</span>
      <span style={{ marginLeft: space }}>({props.period})</span>
    </Typography>
  );
}
