import React from "react";


const AdditionalInfo = ({ checkInDate, handleFormDataChange }) => {
  const handleDateChange = (e) => {
    handleFormDataChange("checkInDate", e.target.value);
  };

  return (
    <div className="additional-info">
      <label>Check-in Date:</label>
      <input type="date" value={checkInDate} onChange={handleDateChange} />
    </div>
  );
};

export default AdditionalInfo;
