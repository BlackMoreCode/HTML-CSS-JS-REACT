import { useParams } from "react-router-dom";

const data = {
  frontend: {
    name: "JOJO",
    description: "STANDO-POWAH",
  },
  backend: {
    name: "DIO",
    description: "ZA-WARUDO",
  },
  dba: {
    name: "PUCCI",
    description: "MADE-IN-HEAVEN",
  },
};

const Profile = () => {
  const params = useParams();
  const profile = data[params.username];

  return (
    <>
      <h1>사용자 프로필</h1>
      {profile ? (
        <>
          <h2>{profile.name}</h2>
          <p>{profile.description}</p>
        </>
      ) : (
        <p>존재하지 않는 프로필</p>
      )}
    </>
  );
};

export default Profile;
