import { ISkill } from "@/app/_components/interfaces/SkillInterfaces";

type Props = {
  skills: ISkill[];
};

export default function SkillPage(props: Props) {
  return (
    <div>
      {props.skills.map((skill, i) => (
        <div key={i}>
          <div>tagName: {skill.tagName}</div>
          <div>
            {skill.skills.map((s, i) => (
              <div key={i}>
                <div>name: {s.name}</div>
                <div>period: {s.period}</div>
                <div>url: {s.url}</div>
                <div>
                  {s.versions?.map((version, i) => (
                    <div key={i}>
                      <div>version: {version.version}</div>
                      <div>period: {version.period}</div>
                      <div>
                        from:
                        {version.from.year}/{version.from.month}
                      </div>
                      <div>
                        to:
                        {version.to?.year}/{version.to?.month}
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
