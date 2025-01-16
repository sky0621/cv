import { ICareerGroup } from "@/app/_components/interfaces/CareerInterfaces";

type Props = {
  careerGroups: ICareerGroup[];
};

export default function CareerPage(props: Props) {
  return (
    <div>
      {props.careerGroups.map((careerGroup, i) => (
        <div key={i}>
          <div>label: {careerGroup.label}</div>
          <div>
            {careerGroup.careers.map((career, i) => (
              <div key={i}>
                <div>name: {career.name}</div>
                <div>
                  from:
                  {career.from.year}/{career.from.month}
                </div>
                <div>
                  to:
                  {career.to?.year}/{career.to?.month}
                </div>
                <div>
                  {career.description.map((desc, i) => (
                    <div key={i}>
                      <div>{desc}</div>
                    </div>
                  ))}
                </div>
                <div>
                  tasks
                  {career.tasks.map((task, i) => (
                    <div key={i}>
                      <div>name: {task.name}</div>
                      <div>
                        {task.description.map((desc, i) => (
                          <div key={i}>
                            <div>{desc}</div>
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
                <div>
                  skillGroups
                  {career.skillGroups.map((skillGroup, i) => (
                    <div key={i}>
                      <div>label: {skillGroup.label}</div>
                      <div>
                        {skillGroup.skills.map((skill, i) => (
                          <div key={i}>
                            <div>name: {skill.skill.name}</div>
                            <div>url: {skill.skill.url}</div>
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
