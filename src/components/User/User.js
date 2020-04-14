import React from "react";
import fakeData from "../../fakeData";
import { useState } from "react";
import "./User.css";
import UserData from "../UserData/UserData";
import UserIncome from "../UserIncome/UserIncome";

const User = () => {
  const first15 = fakeData.slice(0, 15);
  const [users, setUser] = useState(first15);

  const [count, setCount] = useState([]);

  const handlePerson = (person) => {
    const newCount = [...count, person];
    setCount(newCount);
  };

  return (
    <div className="userContainer">
      <div className="userDetails">
        {users.map((ur) => (
          <UserData handlePerson={handlePerson} UserData={ur}></UserData>
        ))}
      </div>

      <div className="userCount">
        <UserIncome userIncome={count}></UserIncome>
      </div>
    </div>
  );
};

export default User;
