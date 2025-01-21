import { Card, CardContent, Link, Typography } from "@mui/joy";
import { ISkillItem } from "@/app/career/_components/_interfaces/career";

type Props = {
  skillItem: ISkillItem;
};

export default function CareerSkillArea(props: Props) {
  return (
    <Link
      href={props.skillItem.skill.url}
      underline="none"
      color="neutral"
      target="_blank"
    >
      <Card variant="soft" sx={{ margin: "0.2rem" }}>
        <CardContent>
          <Typography level="body-sm">{props.skillItem.skill.name}</Typography>
          <Typography level="body-xs" sx={{ marginLeft: "0.5rem" }}>
            {props.skillItem.version}
          </Typography>
        </CardContent>
      </Card>
    </Link>
  );
}
