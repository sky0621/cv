import {
  Accordion,
  AccordionDetails,
  AccordionGroup,
  AccordionSummary,
  Box,
  Typography,
} from "@mui/joy";
import { ICareerGroup } from "@/app/career/_components/_interfaces/career";
import {
  getCareerGroupStartYm,
  getCareerStartYm,
} from "@/app/career/_components/_functions/getStartYm";
import {
  calculateCareerDifference,
  calculateCareerGroupDifference,
} from "@/app/career/_components/_functions/calculateDifference";
import {
  getCareerEndYm,
  getCareerGroupEndYm,
} from "@/app/career/_components/_functions/getEndYm";

type Props = {
  careerGroups: ICareerGroup[];
};

export default function Career(props: Props) {
  return (
    <>
      {props.careerGroups.map((careerGroup, i) => (
        <AccordionGroup
          key={i}
          variant="outlined"
          sx={{
            marginBottom: "0.5rem",
            padding: "0.5rem",
            borderRadius: "0.5rem",
          }}
        >
          <Accordion>
            <AccordionSummary>
              <Box>
                <Typography level="title-sm">
                  <span>{getCareerGroupStartYm(careerGroup)}</span>
                  <span style={{ marginLeft: "0.5rem" }}>~</span>
                  <span style={{ marginLeft: "0.5rem" }}>
                    {getCareerGroupEndYm(careerGroup)}
                  </span>
                  <span style={{ marginLeft: "0.5rem" }}>
                    ({calculateCareerGroupDifference(careerGroup)})
                  </span>
                </Typography>
                <Typography level="title-lg">{careerGroup.label}</Typography>
              </Box>
            </AccordionSummary>
            <AccordionDetails>
              {careerGroup.careers.map((career, i) => (
                <Accordion
                  key={i}
                  sx={{ marginTop: "0.5rem", marginBottom: "0.5rem" }}
                >
                  <AccordionSummary>
                    <Box>
                      <Typography level="title-sm">
                        <span>{getCareerStartYm(career)}</span>
                        <span style={{ marginLeft: "0.5rem" }}>~</span>
                        <span style={{ marginLeft: "0.5rem" }}>
                          {getCareerEndYm(career)}
                        </span>
                        <span style={{ marginLeft: "0.5rem" }}>
                          ({calculateCareerDifference(career)})
                        </span>
                      </Typography>
                      <Typography level="title-md">{career.name}</Typography>
                    </Box>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Box>
                      {career.description.map((desc, i) => (
                        <Typography key={i} level="body-sm">
                          {desc}
                        </Typography>
                      ))}
                    </Box>
                  </AccordionDetails>
                </Accordion>
              ))}
            </AccordionDetails>
          </Accordion>
        </AccordionGroup>
      ))}
    </>
  );
}
