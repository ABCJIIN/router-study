import React from "react";
import { useParams } from "react-router-dom";

const data = {
  jiin: {
    name: "정지인",
    description: "리액트 하는 중",
  },
  gildong: {
    name: "홍길동",
    description: "아버지를 아버지라 부르지 못하고",
  },
};

console.log(data);

function Profile() {
  const params = useParams();
  const Profile = data[params.username];
  return (
    <div>
      <h1>사용자 프로필</h1>
      {Profile ? (
        <div>
          <h2>{Profile.name}</h2>
          <p>{Profile.description}</p>
        </div>
      ) : (
        <p>존재하지 않는 프로필입니다.</p>
      )}
    </div>
  );
}

export default Profile;
