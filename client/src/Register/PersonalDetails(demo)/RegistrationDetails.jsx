import React from "react";

const RegistrationDetails = ({ registrationData, accommodationData, participants }) => {
  const totalRegistrationPrice = Object.values(registrationData).filter(Boolean).length * 200;
  const totalAccommodationPrice = Object.values(accommodationData).filter(Boolean).length * 100;
  const totalPrice = totalRegistrationPrice + totalAccommodationPrice;

  return (
    <div className="registration-details">
      <h2>Registration Details</h2>
      <p>Total Participants: {participants}</p>
      <p>Total Registration Price: ${totalRegistrationPrice}</p>
      <p>Total Accommodation Price: ${totalAccommodationPrice}</p>
      <p>Total Price: ${totalPrice}</p>
    </div>
  );
};

export default RegistrationDetails;
