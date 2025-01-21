import {
  Accordion,
  AccordionDetails,
  AccordionGroup,
  AccordionSummary,
  Box,
} from "@mui/joy";
import { ICareerGroup } from "@/app/career/_components/_interfaces/career";
import CareerArea from "@/app/career/_components/_components/_components/CareerArea";
import CareerGroupLabel from "@/app/career/_components/_components/_components/CareerGroupLabel";

type Props = {
  careerGroup: ICareerGroup;
};

export default function CareerGroupArea(props: Props) {
  return (
    <AccordionGroup
      variant="outlined"
      sx={{
        marginBottom: "0.5rem",
        padding: "0.3rem",
        borderRadius: "0.5rem",
      }}
    >
      <Accordion>
        <AccordionSummary>
          <Box>
            <CareerGroupLabel careerGroup={props.careerGroup} />
          </Box>
        </AccordionSummary>
        <AccordionDetails>
          {props.careerGroup.careers.map((career, i) => (
            <CareerArea career={career} key={i} />
          ))}
        </AccordionDetails>
      </Accordion>
    </AccordionGroup>
  );
}
