import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import "./UserData.css";

const UserData = (props) => {
  //console.log(props);
  const { id, name, img, email, phone, address, yearlyIncome } = props.UserData;

  return (
    <div className="user">
      <div className="userPic">
        <img src={img} alt="" />
      </div>

      <div className="userData">
        <h4>ID: {id}</h4>
        <h1>Name: {name}</h1>
        <h3>Email: {email}</h3>
        <h4>Phone No: {phone}</h4>
        <p>
          <small>
            <b>Address:</b>
            <i>
              Street: {address.street}, Suite: {address.suite}, City:
              {address.city}, Zipcode: {address.zipcode}, Geo-Lat:
              {address.geo.lat}
            </i>
          </small>
        </p>
        <h4>Yearly Income: $ {yearlyIncome}</h4>
        <button
          className="main-button"
          onClick={() => props.handlePerson(props.UserData)} //We can just access the left properties of(=), that we declare in User.js through props
        >
          <FontAwesomeIcon icon={faPlus} /> Add Person
        </button>
      </div>
    </div>
  );
};

export default UserData;
