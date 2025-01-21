import { Typography } from "@mui/joy";

type Props = {
  description: string[];
};

export default function CareerDescription(props: Props) {
  return (
    <>
      {props.description.map((desc, i) => (
        <Typography key={i} level="body-sm">
          {desc}
        </Typography>
      ))}
    </>
  );
}
