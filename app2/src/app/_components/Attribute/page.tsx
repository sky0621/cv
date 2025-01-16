import {
  IActivity,
  IAttribute,
  IQualification,
} from "@/app/_components/interfaces/AboutInterfaces";

type Props = {
  attribute: IAttribute;
  activities: IActivity[];
  qualifications: IQualification[];
};

export default function AttributePage(props: Props) {
  return (
    <div>
      <div>
        <div>Attribute</div>
        <div>nickname: {props.attribute.nickname}</div>
        <div>
          <img src={props.attribute.avatarUrl} alt={props.attribute.nickname} />
        </div>
        <div>
          birthday:
          {props.attribute.birthday.year}/{props.attribute.birthday.month}/
          {props.attribute.birthday.day}
        </div>
        <div>job: {props.attribute.job}</div>
        <div>belongTo: {props.attribute.belongTo}</div>
        <div>pr: {props.attribute.pr}</div>
      </div>
      <div>
        <div>Activities</div>
        <div>
          {props.activities.map((activity, i) => (
            <div key={i}>
              <div>name: {activity.name}</div>
              <div>icon: {activity.icon}</div>
              <div>url: {activity.url}</div>
            </div>
          ))}
        </div>
      </div>
      <div>
        <div>Qualification</div>
        <div>
          {props.qualifications.map((qualification, i) => (
            <div key={i}>
              <div>name: {qualification.name}</div>
              <div>url: {qualification.url}</div>
              <div>organization: {qualification.organization}</div>
              <div>memo: {qualification.memo}</div>
              <div>gotDate: {qualification.gotDate}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
