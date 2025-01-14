import React from "react";
import { ISkillDetail } from "./interfaces/SkillInterfaces";

type SkillProps = {
  skills: ISkillDetail[];
};

export default function SkillSection({ skills }: SkillProps) {
  return (
    <section id="skill" style={{ marginTop: "2rem" }}>
      <h2>Skill</h2>

      {skills?.map((detail, idx) => (
        <div
          key={idx}
          style={{
            border: "1px solid #ccc",
            margin: "1rem 0",
            padding: "1rem",
          }}
        >
          <h4>{detail.name}</h4>
          <p>累計経験期間: {detail.period}ヶ月</p>
          {detail.url && (
            <p>
              <a href={detail.url} target="_blank" rel="noreferrer">
                {detail.url}
              </a>
            </p>
          )}

          <ul>
            {detail.versions?.map((ver, i) => {
              const fromStr = `${ver.from.year}/${String(
                ver.from.month
              ).padStart(2, "0")}`;
              const toStr = ver.to
                ? `${ver.to.year}/${String(ver.to.month).padStart(2, "0")}`
                : "Present";
              return (
                <li key={i}>
                  {fromStr} - {toStr}（{ver.period ?? "-"}ヶ月）
                  {ver.version && ` / バージョン: ${ver.version}`}
                </li>
              );
            })}
          </ul>
        </div>
      ))}
    </section>
  );
}
