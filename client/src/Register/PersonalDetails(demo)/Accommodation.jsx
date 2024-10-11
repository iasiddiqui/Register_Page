import React from "react";

const Accommodation = ({ accommodationData, handleFormDataChange }) => {
  const handleAccommodationChange = (type, checked) => {
    handleFormDataChange("accommodation", {
      ...accommodationData,
      [type]: checked,
    });
  };

  return (
    <div className="accommodation">
      <h2>Accommodation</h2>
      <table className="accommodation-table">
        <tbody>
          <tr className="accommodation-row">
            <td className="accommodation-category">For 2 Nights</td>
            <td className="accommodation-option">
              Single
              <input
                type="checkbox"
                checked={accommodationData.single2Nights}
                onChange={(e) =>
                  handleAccommodationChange("single2Nights", e.target.checked)
                }
              />
            </td>
            <td className="accommodation-option">
              Double
              <input
                type="checkbox"
                checked={accommodationData.double2Nights}
                onChange={(e) =>
                  handleAccommodationChange("double2Nights", e.target.checked)
                }
              />
            </td>
            <td className="accommodation-option">
              Triple
              <input
                type="checkbox"
                checked={accommodationData.triple2Nights}
                onChange={(e) =>
                  handleAccommodationChange("triple2Nights", e.target.checked)
                }
              />
            </td>
          </tr>
          {/* Add other accommodation options */}
        </tbody>
      </table>
    </div>
  );
};

export default Accommodation;
