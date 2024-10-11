import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

import "./RegistrationForm.css";

const RegistrationForm = () => {
  const [registrationPrice, setRegistrationPrice] = useState(0);
  const [sponsorshipPrice, setSponsorshipPrice] = useState(0);
  const [accommodationPrice, setAccommodationPrice] = useState(0);
  const [numParticipants, setNumParticipants] = useState(1);
  const [totalPrice, setTotalPrice] = useState(0);

  // Function to calculate total price
  const calculateTotalPrice = () => {
    setTotalPrice(
      (registrationPrice + sponsorshipPrice + accommodationPrice) * numParticipants
    );
  };

  const handleRegistrationChange = (price, isChecked) => {
    if (isChecked) {
      setRegistrationPrice(price);
    } else {
      setRegistrationPrice(0);
    }
  };

  const handleSponsorshipChange = (price, isChecked) => {
    if (isChecked) {
      setSponsorshipPrice(prevPrice => prevPrice + price);
    } else {
      setSponsorshipPrice(prevPrice => prevPrice - price);
    }
  };

  const handleAccommodationChange = (price, isChecked) => {
    if (isChecked) {
      setAccommodationPrice(prevPrice => prevPrice + price);
    } else {
      setAccommodationPrice(prevPrice => prevPrice - price);
    }
  };

  const handleParticipantsChange = (e) => {
    const num = parseInt(e.target.value);
    setNumParticipants(num);
  };

 


  useEffect(() => {
    calculateTotalPrice();
  }, [registrationPrice, sponsorshipPrice, accommodationPrice, numParticipants]);
  const handleProceedToPayment = async (e) => {
    e.preventDefault();
    try {
      const paymentData = {
        total: totalPrice,
        registrationPrice,
        sponsorshipPrice,
        accommodationPrice,
        numParticipants,
      };

      const res = await axios.post(
        "http://localhost:8000/payment",
        paymentData
      );

      if (res && res.data) {
        const approvalUrl = res.data.approvalUrl;
        window.location.href = approvalUrl; 
      }
    } catch (error) {
      console.error("Error during the payment request", error);
    }
    if (registrationPrice === 0) {
      window.alert('Please choose any one registration type.');
    } else {
      // Proceed to payment logic here
      console.log('Proceeding to payment...');
    }
  };


  return (
    <div className="registration-container">
      <div className="registration-type">
        <div className="registration-section">
          <table className="registration-table">
            <tbody className="registration-table-body">
              <tr className="registration-row">
                <td className="registration-category-head">
                  Registration Type
                </td>

                <td className="registration-option-head" colSpan="2">
                  Early Bird On/Before September <br />
                  25, 2024
                </td>
              </tr>
              <tr className="registration-row">
                <td className="registration-category">Speaker Registration</td>
                <td className="registration-option">
                  Academia
                  <input
                    type="checkbox"
                    className="registration-checkbox"
                    onChange={(e) =>
                      handleRegistrationChange(799, e.target.checked)
                    }
                  />{" "}
                  $799
                </td>
                <td className="registration-option">
                  {" "}
                  Business
                  <input
                    type="checkbox"
                    className="registration-checkbox"
                    onChange={(e) =>
                      handleRegistrationChange(699, e.target.checked)
                    }
                  />{" "}
                  $699
                </td>
              </tr>
              <tr className="registration-row">
                <td className="registration-category">Delegate</td>
                <td className="registration-option">
                  {" "}
                  Academia
                  <input
                    type="checkbox"
                    className="registration-checkbox"
                    onChange={(e) =>
                      handleRegistrationChange(699, e.target.checked)
                    }
                  />{" "}
                  $699
                </td>
                <td className="registration-option">
                  Business
                  <input
                    type="checkbox"
                    className="registration-checkbox"
                    onChange={(e) =>
                      handleRegistrationChange(799, e.target.checked)
                    }
                  />{" "}
                  $799
                </td>
              </tr>
              <tr className="registration-row">
                <td className="registration-category">Student</td>
                <td className="registration-option" colSpan="2">
                  <input
                    type="checkbox"
                    className="registration-checkbox"
                    onChange={(e) =>
                      handleRegistrationChange(599, e.target.checked)
                    }
                  />{" "}
                  $599
                </td>
              </tr>
              <tr className="registration-row">
                <td className="registration-category">Poster Presentation</td>
                <td className="registration-option" colSpan="2">
                  <input
                    type="checkbox"
                    className="registration-checkbox"
                    onChange={(e) =>
                      handleRegistrationChange(499, e.target.checked)
                    }
                  />{" "}
                  $499
                </td>
              </tr>
              <tr className="registration-row">
                <td className="registration-category">Online</td>
                <td className="registration-option" colSpan="2">
                  <input
                    type="checkbox"
                    className="registration-checkbox"
                    onChange={(e) =>
                      handleRegistrationChange(200, e.target.checked)
                    }
                  />{" "}
                  $200
                </td>
              </tr>
              <tr className="registration-row">
                <td className="registration-category">Accompanying Person</td>
                <td className="registration-option" colSpan="2">
                  <input
                    type="checkbox"
                    className="registration-checkbox"
                    onChange={(e) =>
                      handleRegistrationChange(300, e.target.checked)
                    }
                  />{" "}
                  $300
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="registration-section">
          <table className="registration-table">
            <tbody>
              <tr className="registration-row">
                <td className="registration-category-head">
                  Registration Type
                </td>

                <td className="registration-option-head" colSpan="2">
                  Next Round Registration Date: <br />
                  August 29, 2024
                </td>
              </tr>
              <tr className="registration-row">
                <td className="registration-category">Speaker Registration</td>

                <td className="registration-option">
                  Academia
                  <input
                    type="checkbox"
                    className="registration-checkbox"
                    onChange={(e) =>
                      handleRegistrationChange(899, e.target.checked)
                    }
                  />{" "}
                  $899
                </td>

                <td className="registration-option">
                  Business
                  <input
                    type="checkbox"
                    className="registration-checkbox"
                    onChange={(e) =>
                      handleRegistrationChange(999, e.target.checked)
                    }
                  />{" "}
                  $999
                </td>
              </tr>
              <tr className="registration-row">
                <td className="registration-category">Delegate</td>
                <td className="registration-option">
                  {" "}
                  Academia
                  <input
                    type="checkbox"
                    className="registration-checkbox"
                    onChange={(e) =>
                      handleRegistrationChange(799, e.target.checked)
                    }
                  />{" "}
                  $799
                </td>
                <td className="registration-option">
                  Business
                  <input
                    type="checkbox"
                    className="registration-checkbox"
                    onChange={(e) =>
                      handleRegistrationChange(899, e.target.checked)
                    }
                  />{" "}
                  $899
                </td>
              </tr>
              <tr className="registration-row">
                <td className="registration-category">Student</td>
                <td className="registration-option" colSpan="2">
                  <input
                    type="checkbox"
                    className="registration-checkbox"
                    onChange={(e) =>
                      handleRegistrationChange(699, e.target.checked)
                    }
                  />{" "}
                  $699
                </td>
              </tr>
              <tr className="registration-row">
                <td className="registration-category">Poster Presentation</td>
                <td className="registration-option" colSpan="2">
                  <input
                    type="checkbox"
                    className="registration-checkbox"
                    onChange={(e) =>
                      handleRegistrationChange(599, e.target.checked)
                    }
                  />{" "}
                  $599
                </td>
              </tr>
              <tr className="registration-row">
                <td className="registration-category">Online</td>
                <td className="registration-option" colSpan="2">
                  <input
                    type="checkbox"
                    className="registration-checkbox"
                    onChange={(e) =>
                      handleRegistrationChange(300, e.target.checked)
                    }
                  />{" "}
                  $300
                </td>
              </tr>
              <tr className="registration-row">
                <td className="registration-category">Accompanying Person</td>
                <td className="registration-option" colSpan="2">
                  <input
                    type="checkbox"
                    className="registration-checkbox"
                    onChange={(e) =>
                      handleRegistrationChange(350, e.target.checked)
                    }
                  />{" "}
                  $350
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="registration-section">
          <table className="registration-table">
            <tbody>
              <tr className="registration-row">
                <td className="registration-category-head">
                  Registration Type
                </td>

                <td className="registration-option-head" colSpan="2">
                  Spot Registrations on: <br />
                  July 14, 2024
                </td>
              </tr>
              <tr className="registration-row">
                <td className="registration-category">Speaker Registration</td>
                <td className="registration-option">
                  {" "}
                  Academia
                  <input
                    type="checkbox"
                    className="registration-checkbox"
                    onChange={(e) =>
                      handleRegistrationChange(999, e.target.checked)
                    }
                  />{" "}
                  $999
                </td>
                <td className="registration-option">
                  Business
                  <input
                    type="checkbox"
                    className="registration-checkbox"
                    onChange={(e) =>
                      handleRegistrationChange(1099, e.target.checked)
                    }
                  />{" "}
                  $1099
                </td>
              </tr>
              <tr className="registration-row">
                <td className="registration-category">Delegate</td>
                <td className="registration-option">
                  {" "}
                  Academia
                  <input
                    type="checkbox"
                    className="registration-checkbox"
                    onChange={(e) =>
                      handleRegistrationChange(899, e.target.checked)
                    }
                  />{" "}
                  $899
                </td>
                <td className="registration-option">
                  Business
                  <input
                    type="checkbox"
                    className="registration-checkbox"
                    onChange={(e) =>
                      handleRegistrationChange(999, e.target.checked)
                    }
                  />{" "}
                  $999
                </td>
              </tr>
              <tr className="registration-row">
                <td className="registration-category">Student</td>
                <td className="registration-option" colSpan="2">
                  <input
                    type="checkbox"
                    className="registration-checkbox"
                    onChange={(e) =>
                      handleRegistrationChange(799, e.target.checked)
                    }
                  />{" "}
                  $799
                </td>
              </tr>
              <tr className="registration-row">
                <td className="registration-category">Poster Presentation</td>
                <td className="registration-option" colSpan="2">
                  <input
                    type="checkbox"
                    className="registration-checkbox"
                    onChange={(e) =>
                      handleRegistrationChange(699, e.target.checked)
                    }
                  />{" "}
                  $699
                </td>
              </tr>
              <tr className="registration-row">
                <td className="registration-category">Online</td>
                <td className="registration-option" colSpan="2">
                  <input
                    type="checkbox"
                    className="registration-checkbox"
                    onChange={(e) =>
                      handleRegistrationChange(400, e.target.checked)
                    }
                  />{" "}
                  $400
                </td>
              </tr>
              <tr className="registration-row">
                <td className="registration-category">Accompanying Person</td>
                <td className="registration-option" colSpan="2">
                  <input
                    type="checkbox"
                    className="registration-checkbox"
                    onChange={(e) =>
                      handleRegistrationChange(400, e.target.checked)
                    }
                  />{" "}
                  $400
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      {/* Sponsor Selection */}
      <div className="sponsor-div">
        <h2 className="sponsor-title">Sponsor Registration</h2>
        <div className="sponsor-section">
          <table className="sponsor-table">
            <tbody>
              <tr className="sponsor-names">
                <td className="sponsor-name">
                  <span className="sponsor-label">Platinum Sponsor</span>
                </td>
                <td className="sponsor-name">
                  <span className="sponsor-label">Gold Sponsor</span>
                </td>
                <td className="sponsor-name">
                  <span className="sponsor-label">Silver Sponsor</span>
                </td>
                <td className="sponsor-name">
                  <span className="sponsor-label">Exhibitor</span>
                </td>
              </tr>
              <tr className="sponsor-prices">
                <td className="sponsor-price">
                  <input
                    type="checkbox"
                    className="sponsor-checkbox"
                    onChange={(e) =>
                      handleSponsorshipChange(7500, e.target.checked)
                    }
                  />
                  <span className="price-amount">$7500</span>
                </td>
                <td className="sponsor-price">
                  <input
                    type="checkbox"
                    className="sponsor-checkbox"
                    onChange={(e) =>
                      handleSponsorshipChange(6000, e.target.checked)
                    }
                  />
                  <span className="price-amount">$6000</span>
                </td>
                <td className="sponsor-price">
                  <input
                    type="checkbox"
                    className="sponsor-checkbox"
                    onChange={(e) =>
                      handleSponsorshipChange(5000, e.target.checked)
                    }
                  />
                  <span className="price-amount">$5000</span>
                </td>
                <td className="sponsor-price">
                  <input
                    type="checkbox"
                    className="sponsor-checkbox"
                    onChange={(e) =>
                      handleSponsorshipChange(3000, e.target.checked)
                    }
                  />
                  <span className="price-amount">$3000</span>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      {/* accommodation */}

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
                  onChange={(e) =>
                    handleAccommodationChange(400, e.target.checked)
                  }
                />
                $400
              </td>
              <td className="accommodation-option">
                <input
                  type="checkbox"
                  className="accommodation-checkbox"
                  onChange={(e) =>
                    handleAccommodationChange(500, e.target.checked)
                  }
                />
                $500
              </td>
              <td className="accommodation-option">
                <input
                  type="checkbox"
                  className="accommodation-checkbox"
                  onChange={(e) =>
                    handleAccommodationChange(600, e.target.checked)
                  }
                />
                $600
              </td>
            </tr>

            <tr className="accommodation-row">
              <td className="accommodation-category">For 3 Nights</td>
              <td className="accommodation-option">
                <input
                  type="checkbox"
                  className="accommodation-checkbox"
                  onChange={(e) =>
                    handleAccommodationChange(650, e.target.checked)
                  }
                />
                $650
              </td>
              <td className="accommodation-option">
                <input
                  type="checkbox"
                  className="accommodation-checkbox"
                  onChange={(e) =>
                    handleAccommodationChange(750, e.target.checked)
                  }
                />
                $750
              </td>
              <td className="accommodation-option">
                <input
                  type="checkbox"
                  className="accommodation-checkbox"
                  onChange={(e) =>
                    handleAccommodationChange(850, e.target.checked)
                  }
                />
                $850
              </td>
            </tr>

            <tr className="accommodation-row">
              <td className="accommodation-category">For 5 Nights</td>
              <td className="accommodation-option">
                <input
                  type="checkbox"
                  className="accommodation-checkbox"
                  onChange={(e) =>
                    handleAccommodationChange(900, e.target.checked)
                  }
                />
                $900
              </td>
              <td className="accommodation-option">
                <input
                  type="checkbox"
                  className="accommodation-checkbox"
                  onChange={(e) =>
                    handleAccommodationChange(1000, e.target.checked)
                  }
                />
                $1000
              </td>
              <td className="accommodation-option">
                <input
                  type="checkbox"
                  className="accommodation-checkbox"
                  onChange={(e) =>
                    handleAccommodationChange(1100, e.target.checked)
                  }
                />
                $1100
              </td>
            </tr>
          
          </tbody>
        </table>
      </div>

      <div className="additional-info">
        <div className="participants">
          <label className="participants-label">No. Of Participants</label>
          <select className="participants" onChange={handleParticipantsChange}>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
            <option value="6">6</option>
            <option value="7">7</option>
            <option value="8">8</option>
            <option value="9">9</option>
            <option value="10">10</option>
          </select>
        </div>

        <div className="checkin-date">
          <label className="participants-date">Checkin Date:</label>
          <input type="date" className="checkin-date" />
        </div>
      </div>

      {/* Registration Details */}
      <div className="registration-details">
        <table className="registration-details-table">
          <tbody>
            <tr className="registration-details">
              <td className="registration-details-label">
                Registration Price:
              </td>
              <td className="registration-details-value">
                ${registrationPrice}
              </td>
            </tr>
            <tr className="registration-details">
              <td className="registration-details-label">Sponsorship Price:</td>
              <td className="registration-details-value">
                ${sponsorshipPrice}
              </td>
            </tr>
            <tr className="registration-details">
              <td className="registration-details-label">
                Accommodation Price:
              </td>
              <td className="registration-details-value">
                ${accommodationPrice}
              </td>
            </tr>
            <tr className="registration-details">
              <td className="registration-details-label">
                No. Of Participants:
              </td>
              <td className="registration-details-value">{numParticipants}</td>
            </tr>
            <tr className="registration-details">
              <td className="registration-details-label">Total Price:</td>
              <td className="registration-details-value">${totalPrice}</td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* Proceed to Payment */}
      <div className="payment-type">
        <h2>Payment Method</h2>
        <img
          className="registration-img"
          src="/pictures/paypal-img.png"
          alt="PayPal"
        />
      </div>

      <div className="registration-div">
        <button
          className="registration-button"
          onClick={handleProceedToPayment}
        >
          Proceed to Payment
        </button>
      </div>
    </div>
  );
};

export default RegistrationForm;
