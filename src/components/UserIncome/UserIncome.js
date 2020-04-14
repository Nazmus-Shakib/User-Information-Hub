import React from "react";
import "./UserIncome.css";

const UserIncome = (props) => {
  const addedPeople = props.userIncome;
  console.log(addedPeople);

  let total = 0;
  for (let i = 0; i < addedPeople.length; i++) {
    const people = addedPeople[i];
    total = total + people.yearlyIncome;
    console.log(total);
  }

  return (
    <div className="userIncome">
      <h1>User Details</h1>
      <h2>Total Added People: {addedPeople.length}</h2>
      <h3>Total Salary: $ {total}</h3>
    </div>
  );
};

export default UserIncome;
