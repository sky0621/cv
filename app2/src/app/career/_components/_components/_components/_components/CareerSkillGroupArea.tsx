import { Grid, Stack, Typography } from "@mui/joy";
import { ISkillGroup } from "@/app/career/_components/_interfaces/career";
import CareerSkillArea from "@/app/career/_components/_components/_components/_components/_components/CareerSkillArea";

type Props = {
  skillGroup: ISkillGroup;
};

export default function CareerSkillGroupArea(props: Props) {
  return (
    <Stack sx={{ marginLeft: "1rem" }}>
      {props.skillGroup.label !== "-" ? (
        <Typography sx={{ marginBottom: "0.5rem" }}>
          【{props.skillGroup.label}】
        </Typography>
      ) : (
        ""
      )}
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
        {props.skillGroup.skills.map((skill, i) => (
          <CareerSkillArea skillItem={skill} key={i} />
        ))}
      </Grid>
    </Stack>
  );
}
