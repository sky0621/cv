import {
  IActivity,
  IAttribute,
  IQualification,
} from "./interfaces/AboutInterfaces";
import React from "react";

// Server Component (デフォルト)
type AboutProps = {
  attribute: IAttribute | null;
  activities: IActivity[];
  qualifications: IQualification[];
};

export default function AboutSection({
  attribute,
  activities,
  qualifications,
}: AboutProps) {
  return (
    <section id="about" style={{ marginTop: "2rem" }}>
      <h2>About</h2>
      {attribute && (
        <div
          style={{
            border: "1px solid #ccc",
            padding: "1rem",
            marginBottom: "1rem",
          }}
        >
          <img
            src={attribute.avatarUrl}
            alt={attribute.nickname}
            style={{ width: "120px", borderRadius: "8px" }}
          />
          <h3>
            {attribute.name} ({attribute.nickname})
          </h3>
          <p>所属: {attribute.belongTo}</p>
          <p>職種: {attribute.job}</p>
          <p>
            生年月日: {attribute.birthday.year}年{attribute.birthday.month}月
            {attribute.birthday.day}日
          </p>
          <pre style={{ whiteSpace: "pre-wrap" }}>{attribute.pr}</pre>
        </div>
      )}

      <div style={{ marginBottom: "1rem" }}>
        <h3>Activities</h3>
        <ul>
          {activities.map((act, idx) => (
            <li key={idx}>
              {act.icon}{" "}
              <a href={act.url} target="_blank" rel="noreferrer">
                {act.name}
              </a>
            </li>
          ))}
        </ul>
      </div>

      <div>
        <h3>Qualifications</h3>
        <ul>
          {qualifications.map((q, idx) => (
            <li key={idx}>
              <strong>{q.name}</strong> ({q.organization})
              <br />
              取得日: {q.gotDate}
              {q.memo && <p>メモ: {q.memo}</p>}
              <a href={q.url} target="_blank" rel="noreferrer">
                {q.url}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
