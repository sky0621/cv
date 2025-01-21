import { ISkill } from "@/app/skill/_components/_interfaces/SkillInterfaces";
import {
  Accordion,
  AccordionDetails,
  AccordionGroup,
  AccordionSummary,
  Card,
  CardContent,
  Grid,
  Link,
  Stack,
  Typography,
} from "@mui/joy";
import { CardHeader } from "@mui/material";
import { convertMonthsToYearsMonths } from "@/app/skill/_components/_functions/convertMonthsToYearsMonths";
import { getVersion } from "@/app/skill/_components/_functions/getVersion";
import { getSkillVersionStartYm } from "@/app/skill/_components/_functions/getStartYm";
import { getSkillVersionEndYm } from "@/app/skill/_components/_functions/getEndYm";

type Props = {
  skills: ISkill[];
};

export default function Skill(props: Props) {
  return (
    <Stack spacing={2}>
      {props.skills.map((skill, i) => (
        <Card key={i}>
          <CardHeader
            title={skill.tagName}
            sx={{
              fontWeight: "bold",
              fontSize: "1.5rem",
            }}
          />
          <CardContent>
            <Grid
              container
              spacing={{ xs: 1, md: 2 }}
              columns={{ xs: 4, sm: 8, md: 12 }}
              sx={{
                marginLeft: "1rem",
                marginBottom: "1rem",
                flexGrow: 1,
              }}
            >
              {skill.skills.map((s, i) => (
                <Card
                  key={i}
                  sx={{ marginRight: "0.5rem", marginBottom: "0.5rem" }}
                >
                  <CardHeader
                    title={
                      s.url ? (
                        <Link target={"_blank"} href={s.url}>
                          {s.name}
                        </Link>
                      ) : (
                        s.name
                      )
                    }
                  />
                  <CardContent>
                    <AccordionGroup>
                      <Accordion>
                        <AccordionSummary>
                          <Typography level="body-sm">
                            <span
                              style={{
                                marginRight: "0.3rem",
                                fontSize: "0.8rem",
                              }}
                            >
                              経験:
                            </span>
                            {convertMonthsToYearsMonths(s.period)}
                          </Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                          {s.versions?.map((version, i) => (
                            <Stack key={i} sx={{ marginBottom: "0.5rem" }}>
                              <Typography>
                                version: {getVersion(version.version)}
                              </Typography>
                              <Typography level="title-sm">
                                <span>{getSkillVersionStartYm(version)}</span>
                                <span style={{ marginLeft: "0.5rem" }}>~</span>
                                <span style={{ marginLeft: "0.5rem" }}>
                                  {getSkillVersionEndYm(version)}
                                </span>
                                <span style={{ marginLeft: "0.5rem" }}>
                                  (
                                  {version.period
                                    ? convertMonthsToYearsMonths(version.period)
                                    : ""}
                                  )
                                </span>
                              </Typography>
                            </Stack>
                          ))}
                        </AccordionDetails>
                      </Accordion>
                    </AccordionGroup>
                  </CardContent>
                </Card>
              ))}
            </Grid>
          </CardContent>
        </Card>
      ))}
    </Stack>
  );
}
