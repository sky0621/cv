import { ICareerGroup } from "@/app/career/_components/_interfaces/career";
import CareerGroupArea from "@/app/career/_components/_components/CareerGroupArea";

type Props = {
  careerGroups: ICareerGroup[];
};

export default function Career(props: Props) {
  return (
    <>
      {props.careerGroups.map((careerGroup, i) => (
        <CareerGroupArea careerGroup={careerGroup} key={i} />
      ))}
    </>
  );
}
