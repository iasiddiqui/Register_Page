import React from "react";

const Sponsor = ({ sponsorData, handleFormDataChange }) => {
  const handleSponsorChange = (type, checked) => {
    handleFormDataChange("sponsor", {
      ...sponsorData,
      [type]: checked,
    });
  };

  return (
    <div className="sponsor-section">
      <h2>Sponsor Registration</h2>
      <table className="sponsor-table">
        <tbody>
          <tr className="sponsor-names">
            <td>Platinum Sponsor</td>
            <td>Gold Sponsor</td>
            <td>Silver Sponsor</td>
            <td>Exhibitor</td>
          </tr>
          <tr className="sponsor-prices">
            <td>
              <input
                type="checkbox"
                checked={sponsorData.platinum}
                onChange={(e) => handleSponsorChange("platinum", e.target.checked)}
              />
              $7500
            </td>
            <td>
              <input
                type="checkbox"
                checked={sponsorData.gold}
                onChange={(e) => handleSponsorChange("gold", e.target.checked)}
              />
              $6000
            </td>
            <td>
              <input
                type="checkbox"
                checked={sponsorData.silver}
                onChange={(e) => handleSponsorChange("silver", e.target.checked)}
              />
              $5000
            </td>
            <td>
              <input
                type="checkbox"
                checked={sponsorData.exhibitor}
                onChange={(e) => handleSponsorChange("exhibitor", e.target.checked)}
              />
              $3000
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Sponsor;
