import { ISkillDetail } from "@/app/skill/_components/_interfaces/SkillInterfaces";
import {
  Accordion,
  AccordionDetails,
  AccordionGroup,
  AccordionSummary,
  Card,
  CardContent,
  Link,
  Typography,
} from "@mui/joy";
import { CardHeader } from "@mui/material";
import { convertMonthsToYearsMonths } from "@/app/skill/_components/_functions/convertMonthsToYearsMonths";
import SkillVersionArea from "@/app/skill/_components/_components/_components/SkillVersionArea";

type Props = {
  skillDetail: ISkillDetail;
};

export default function SkillDetailArea(props: Props) {
  return (
    <Card sx={{ marginRight: "0.5rem", marginBottom: "0.5rem" }}>
      <CardHeader
        title={
          props.skillDetail.url ? (
            <Link target={"_blank"} href={props.skillDetail.url}>
              {props.skillDetail.name}
            </Link>
          ) : (
            props.skillDetail.name
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
                {convertMonthsToYearsMonths(props.skillDetail.period)}
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              {props.skillDetail.versions?.map((version, i) => (
                <SkillVersionArea version={version} key={i} />
              ))}
            </AccordionDetails>
          </Accordion>
        </AccordionGroup>
      </CardContent>
    </Card>
  );
}
