// import React, { useState } from 'react';

// const RegistrationType = () => {
//   const [selected, setSelected] = useState('poster');

//   return (
//     <div className="registration-type">
//       <h2>Registration Type</h2>
//       <div>
//         <label>
//           <input 
//             type="radio" 
//             name="registration" 
//             value="speaker" 
//             checked={selected === 'speaker'}
//             onChange={() => setSelected('speaker')}
//           />
//           Speaker Registration - $799
//         </label>
//         <label>
//           <input 
//             type="radio" 
//             name="registration" 
//             value="poster" 
//             checked={selected === 'poster'}
//             onChange={() => setSelected('poster')}
//           />
//           Poster Presentation - $499
//         </label>
//         {/* Add other registration types similarly */}
//       </div>
//     </div>
//   );
// }

// export default RegistrationType;






























import React, { useState, useEffect } from "react";
import "./RegistrationForm.css";

const RegistrationForm = () => {
  // State to keep track of selected prices for registration and accommodation
  const [registrationPrice, setRegistrationPrice] = useState(0);
  const [accommodationPrice, setAccommodationPrice] = useState(0);
  const [numParticipants, setNumParticipants] = useState(1);

  // Function to handle registration selection and update the price
  const handleRegistrationChange = (price, checked) => {
    if (checked) {
      setRegistrationPrice((prev) => prev + price);
    } else {
      setRegistrationPrice((prev) => prev - price);
    }
  };

  // Function to handle accommodation selection and update the price
  const handleAccommodationChange = (price, checked) => {
    if (checked) {
      setAccommodationPrice((prev) => prev + price);
    } else {
      setAccommodationPrice((prev) => prev - price);
    }
  };

  // Function to handle participants change
  const handleParticipantsChange = (e) => {
    setNumParticipants(parseInt(e.target.value));
  };

  // Calculate total price
  const totalPrice = (registrationPrice + accommodationPrice) * numParticipants;

  return (
    <div className="registration-container">
      <div className="registration-type">
        {/* Registration section */}
        <div className="registration-section">
          <table className="registration-table">
            <tbody>
              <tr className="registration-row">
                <td className="registration-category-head">
                  Registration Type
                </td>
                <td className="registration-option-head" colSpan="2">
                  Early Bird On/Before September 25, 2024
                </td>
              </tr>
              <tr className="registration-row">
                <td className="registration-category">Speaker Registration</td>
                <td className="registration-option">
                  Academia
                  <input
                    type="checkbox"
                    className="registration-checkbox"
                    onChange={(e) => handleRegistrationChange(799, e.target.checked)}
                  />{" "}
                  $799
                </td>
                <td className="registration-option">
                  Business
                  <input
                    type="checkbox"
                    className="registration-checkbox"
                    onChange={(e) => handleRegistrationChange(699, e.target.checked)}
                  />{" "}
                  $699
                </td>
              </tr>
              <tr className="registration-row">
                <td className="registration-category">Delegate</td>
                <td className="registration-option">
                  Academia
                  <input
                    type="checkbox"
                    className="registration-checkbox"
                    onChange={(e) => handleRegistrationChange(699, e.target.checked)}
                  />{" "}
                  $699
                </td>
                <td className="registration-option">
                  Business
                  <input
                    type="checkbox"
                    className="registration-checkbox"
                    onChange={(e) => handleRegistrationChange(799, e.target.checked)}
                  />{" "}
                  $799
                </td>
              </tr>
              {/* Additional registration options omitted for brevity */}
            </tbody>
          </table>
        </div>
        {/* Accommodation section */}
        <div className="accommodation">
          <table className="accommodation-table">
            <tbody>
              <tr className="accommodation-row">
                <td className="accommodation-category-head">
                  Accommodation Registration
                </td>
                <td className="accommodation-option-head">Single Occupancy</td>
                <td className="accommodation-option-head">Double Occupancy</td>
                <td className="accommodation-option-head">Triple Occupancy</td>
              </tr>
              <tr className="accommodation-row">
                <td className="accommodation-category">For 2 Nights</td>
                <td className="accommodation-option">
                  <input
                    type="checkbox"
                    className="accommodation-checkbox"
                    onChange={(e) => handleAccommodationChange(799, e.target.checked)}
                  />{" "}
                  $799
                </td>
                <td className="accommodation-option">
                  <input
                    type="checkbox"
                    className="accommodation-checkbox"
                    onChange={(e) => handleAccommodationChange(699, e.target.checked)}
                  />{" "}
                  $699
                </td>
                <td className="accommodation-option">
                  <input
                    type="checkbox"
                    className="accommodation-checkbox"
                    onChange={(e) => handleAccommodationChange(599, e.target.checked)}
                  />{" "}
                  $599
                </td>
              </tr>
              {/* Additional accommodation options omitted for brevity */}
            </tbody>
          </table>
        </div>
      </div>

      {/* Participants and Check-in Date */}
      <div className="additional-info">
        <div className="participants">
          <label className="participants-label">No. Of Participants.</label>
          <select className="participants" onChange={handleParticipantsChange}>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            {/* More options */}
          </select>
        </div>
        <div className="checkin-date">
          <label className="participants-date">Checkin Date:</label>
          <input type="date" className="checkin-date" />
        </div>
      </div>

      {/* Total Price Calculation */}
      <div className="registration-details">
        <table className="registration-details-table">
          <tbody>
            <tr className="registration-details">
              <td className="registration-details-label">Registration Price:</td>
              <td className="registration-details-value">${registrationPrice}</td>
            </tr>
            <tr className="registration-details">
              <td className="registration-details-label">Accommodation Price:</td>
              <td className="registration-details-value">${accommodationPrice}</td>
            </tr>
            <tr className="registration-details">
              <td className="registration-details-label">No. Of Participants:</td>
              <td className="registration-details-value">{numParticipants}</td>
            </tr>
            <tr className="registration-details">
              <td className="registration-details-label-total">Total Price:</td>
              <td className="registration-details-value-total">${totalPrice}</td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* Payment Section */}
      <div className="payment-type">
        <h2>Payment Method</h2>
        <h3>Pay with Paypal</h3>
      </div>

      <button className="registration-button" type="submit">
        Proceed to Payment
      </button>
    </div>
  );
};

export default RegistrationForm;
