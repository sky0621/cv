import React from "react";
import { ICareerGroup } from "./interfaces/CareerInterfaces";

type CareerProps = {
  careerGroups: ICareerGroup[];
};

export default function CareerSection({ careerGroups }: CareerProps) {
  return (
    <section id="career" style={{ marginTop: "2rem" }}>
      <h2>Career</h2>
      {careerGroups.map((group) => (
        <div key={group.id} style={{ margin: "1rem 0" }}>
          <h3>{group.label}</h3>

          {group.careers.map((career) => {
            const fromStr = `${career.from.year}/${String(
              career.from.month
            ).padStart(2, "0")}`;
            const toStr = career.to
              ? `${career.to.year}/${String(career.to.month).padStart(2, "0")}`
              : "Present";

            return (
              <div
                key={career.id}
                style={{
                  border: "1px solid #ccc",
                  margin: "1rem 0",
                  padding: "1rem",
                }}
              >
                <h4>{career.name}</h4>
                <p>
                  <strong>期間:</strong> {fromStr} - {toStr}
                </p>

                {/* description */}
                {career.description.length > 0 && (
                  <ul>
                    {career.description.map((desc, idx) => (
                      <li key={idx}>{desc}</li>
                    ))}
                  </ul>
                )}

                {/* tasks */}
                <div style={{ marginTop: "1rem" }}>
                  <strong>Tasks:</strong>
                  <ul>
                    {career.tasks.map((task, idx) => (
                      <li key={idx}>
                        <span style={{ fontWeight: "bold" }}>
                          {task.name}：
                        </span>
                        <ul>
                          {task.description.map((d, i) => (
                            <li key={i}>{d}</li>
                          ))}
                        </ul>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* skillGroups */}
                <div style={{ marginTop: "1rem" }}>
                  <strong>Skills:</strong>
                  {career.skillGroups.map((sg, i) => (
                    <div key={i}>
                      <h5>{sg.label}</h5>
                      <ul>
                        {sg.skills.map((s, j) => (
                          <li key={j}>
                            {s.skill.name}
                            {s.version && <>（{s.version}）</>}
                            {s.skill.url && (
                              <>
                                {" "}
                                -{" "}
                                <a
                                  href={s.skill.url}
                                  target="_blank"
                                  rel="noreferrer"
                                >
                                  {s.skill.url}
                                </a>
                              </>
                            )}
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      ))}
    </section>
  );
}
