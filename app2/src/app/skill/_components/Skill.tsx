import { ISkill } from "@/app/skill/_components/_interfaces/SkillInterfaces";
import { Card, CardContent, Grid, Stack } from "@mui/joy";
import { CardHeader } from "@mui/material";
import SkillDetailArea from "@/app/skill/_components/_components/SkillDetailArea";

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
                <SkillDetailArea skillDetail={s} key={i} />
              ))}
            </Grid>
          </CardContent>
        </Card>
      ))}
    </Stack>
  );
}
