import { Box, Typography } from "@mui/joy";
import { ICareerTask } from "@/app/career/_components/_interfaces/career";

type Props = {
  task: ICareerTask;
};

export default function CareerTaskArea(props: Props) {
  return (
    <Box sx={{ marginLeft: "1rem" }}>
      {props.task.name !== "-" ? (
        <Typography>【{props.task.name}】</Typography>
      ) : (
        ""
      )}
      {props.task.description.map((desc, i) => (
        <Typography key={i} sx={{ marginLeft: "1rem" }}>
          {desc}
        </Typography>
      ))}
    </Box>
  );
}
