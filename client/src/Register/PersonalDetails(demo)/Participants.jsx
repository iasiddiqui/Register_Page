import React from "react";

const Participants = ({ participants, handleFormDataChange }) => {
  const handleParticipantsChange = (e) => {
    handleFormDataChange("participants", parseInt(e.target.value));
  };

  return (
    <div className="participants-section">
      <label className="participants-label">Number of Participants</label>
      <select className="participants" value={participants} onChange={handleParticipantsChange}>
        {[...Array(10).keys()].map((i) => (
          <option key={i} value={i + 1}>
            {i + 1}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Participants;
