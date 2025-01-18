import { Card, CardContent, Grid, Typography } from "@mui/joy";

export default function DashboardContent() {
  return (
    <Grid container spacing={2}>
      <Grid xs={12} sm={6} md={4}>
        <Card>
          <CardContent>
            <Typography level="h4">Card 1</Typography>
            <Typography>Description of card 1</Typography>
          </CardContent>
        </Card>
      </Grid>
      <Grid xs={12} sm={6} md={4}>
        <Card>
          <CardContent>
            <Typography level="h4">Card 2</Typography>
            <Typography>Description of card 2</Typography>
          </CardContent>
        </Card>
      </Grid>
      <Grid xs={12} sm={6} md={4}>
        <Card>
          <CardContent>
            <Typography level="h4">Card 3</Typography>
            <Typography>Description of card 3</Typography>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  );
}
