import {
  Accordion,
  AccordionDetails,
  AccordionGroup,
  AccordionSummary,
  Box,
  Card,
  CardContent,
  Divider,
  Grid,
  Link,
  Stack,
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
            padding: "0.3rem",
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
                <Typography level="h3">{careerGroup.label}</Typography>
              </Box>
            </AccordionSummary>
            <AccordionDetails>
              {careerGroup.careers.map((career, i) => (
                <Accordion
                  key={i}
                  variant="outlined"
                  sx={{
                    marginTop: "0.5rem",
                    borderRadius: "0.5rem",
                  }}
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
                      <Typography level="title-lg">{career.name}</Typography>
                    </Box>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Box>
                      {career.description.map((desc, i) => (
                        <Typography key={i} level="body-sm">
                          {desc}
                        </Typography>
                      ))}
                      <Divider
                        sx={{ marginTop: "0.5rem", marginBottom: "0.5rem" }}
                      />
                      <Typography level="title-sm">・担当タスク</Typography>
                      {career.tasks.map((task, i) => (
                        <Box key={i} sx={{ marginLeft: "1rem" }}>
                          {task.name !== "-" ? (
                            <Typography>【{task.name}】</Typography>
                          ) : (
                            ""
                          )}
                          {task.description.map((desc, i) => (
                            <Typography key={i} sx={{ marginLeft: "1rem" }}>
                              {desc}
                            </Typography>
                          ))}
                        </Box>
                      ))}
                      <Typography level="title-sm" sx={{ marginTop: "1rem" }}>
                        ・使用技術
                      </Typography>
                      {career.skillGroups.map((skillGroup, i) => (
                        <Stack key={i} sx={{ marginLeft: "1rem" }}>
                          {skillGroup.label !== "-" ? (
                            <Typography sx={{ marginBottom: "0.5rem" }}>
                              【{skillGroup.label}】
                            </Typography>
                          ) : (
                            ""
                          )}
                          <Grid
                            key={i}
                            container
                            spacing={{ xs: 1, md: 2 }}
                            columns={{ xs: 4, sm: 8, md: 12 }}
                            sx={{
                              marginLeft: "1rem",
                              marginBottom: "1rem",
                              flexGrow: 1,
                            }}
                          >
                            {skillGroup.skills.map((skill, i) => (
                              <Link
                                key={i}
                                href={skill.skill.url}
                                underline="none"
                                color="neutral"
                                target="_blank"
                              >
                                <Card variant="soft" sx={{ margin: "0.2rem" }}>
                                  <CardContent>
                                    <Typography level="body-sm">
                                      {skill.skill.name}
                                    </Typography>
                                    <Typography
                                      level="body-xs"
                                      sx={{ marginLeft: "0.5rem" }}
                                    >
                                      {skill.version}
                                    </Typography>
                                  </CardContent>
                                </Card>
                              </Link>
                            ))}
                          </Grid>
                        </Stack>
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
