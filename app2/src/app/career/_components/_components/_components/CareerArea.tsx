import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Divider,
  Typography,
} from "@mui/joy";
import { ICareer } from "@/app/career/_components/_interfaces/career";
import CareerNameArea from "@/app/career/_components/_components/_components/_components/CareerNameArea";
import CareerDescription from "@/app/career/_components/_components/_components/_components/CareerDescription";
import CareerTaskArea from "@/app/career/_components/_components/_components/_components/CareerTaskArea";
import CareerSkillGroupArea from "@/app/career/_components/_components/_components/_components/CareerSkillGroupArea";

type Props = {
  career: ICareer;
};

export default function CareerArea(props: Props) {
  return (
    <Accordion
      variant="outlined"
      sx={{
        marginTop: "0.5rem",
        borderRadius: "0.5rem",
      }}
    >
      <AccordionSummary>
        <Box>
          <CareerNameArea career={props.career} />
        </Box>
      </AccordionSummary>
      <AccordionDetails>
        <Box>
          <CareerDescription description={props.career.description} />
          <Divider sx={{ marginTop: "0.5rem", marginBottom: "0.5rem" }} />
          <Typography level="title-sm">・担当タスク</Typography>
          {props.career.tasks.map((task, i) => (
            <CareerTaskArea task={task} key={i} />
          ))}
          <Typography level="title-sm" sx={{ marginTop: "1rem" }}>
            ・使用技術
          </Typography>
          {props.career.skillGroups.map((skillGroup, i) => (
            <CareerSkillGroupArea skillGroup={skillGroup} key={i} />
          ))}
        </Box>
      </AccordionDetails>
    </Accordion>
  );
}
