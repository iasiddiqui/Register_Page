// RegistrationStorage.js
import React, { useState } from 'react';
import RegistrationDisplay from './RegistrationDisplay';

const RegistrationStorage = () => {
  const [registrationData, setRegistrationData] = useState({
    registrations: {
      speakerAcademia: false,
      speakerBusiness: false,
      delegateAcademia: false,
      delegateBusiness: false,
      student: false,
      poster: false,
      online: false,
      accompanyingPerson: false,
    },
    accommodation: {
      twoNightsSingle: false,
      twoNightsDouble: false,
      twoNightsTriple: false,
      threeNightsSingle: false,
      threeNightsDouble: false,
      threeNightsTriple: false,
      fiveNightsSingle: false,
      fiveNightsDouble: false,
      fiveNightsTriple: false,
    },
    participants: 1,
    registrationPrice: 0,
    accommodationPrice: 0,
  });

  const handleRegistrationChange = (type, checked) => {
    setRegistrationData((prevData) => {
      const updatedRegistrations = { ...prevData.registrations, [type]: checked };
      const newRegistrationPrice = calculateRegistrationPrice(updatedRegistrations);
      return {
        ...prevData,
        registrations: updatedRegistrations,
        registrationPrice: newRegistrationPrice,
      };
    });
  };

  const handleAccommodationChange = (type, checked) => {
    setRegistrationData((prevData) => {
      const updatedAccommodation = { ...prevData.accommodation, [type]: checked };
      const newAccommodationPrice = calculateAccommodationPrice(updatedAccommodation);
      return {
        ...prevData,
        accommodation: updatedAccommodation,
        accommodationPrice: newAccommodationPrice,
      };
    });
  };

  const handleParticipantsChange = (e) => {
    const numParticipants = parseInt(e.target.value, 10);
    setRegistrationData((prevData) => ({
      ...prevData,
      participants: numParticipants,
    }));
  };

  const calculateRegistrationPrice = (registrations) => {
    let price = 0;
    if (registrations.speakerAcademia) price += 999;
    if (registrations.speakerBusiness) price += 1099;
    if (registrations.delegateAcademia) price += 899;
    if (registrations.delegateBusiness) price += 999;
    if (registrations.student) price += 799;
    if (registrations.poster) price += 699;
    if (registrations.online) price += 400;
    if (registrations.accompanyingPerson) price += 400;
    return price;
  };

  const calculateAccommodationPrice = (accommodation) => {
    let price = 0;
    if (accommodation.twoNightsSingle) price += 799;
    if (accommodation.twoNightsDouble) price += 699;
    if (accommodation.twoNightsTriple) price += 599;
    if (accommodation.threeNightsSingle) price += 799;
    if (accommodation.threeNightsDouble) price += 699;
    if (accommodation.threeNightsTriple) price += 599;
    if (accommodation.fiveNightsSingle) price += 799;
    if (accommodation.fiveNightsDouble) price += 699;
    if (accommodation.fiveNightsTriple) price += 599;
    return price;
  };

  return (
    <div>
      {/* Registration Section */}
      <div className="registration-section">
        <table className="registration-table">
          <tbody>
            <tr className="registration-row">
              <td className="registration-category-head">Registration Type</td>
              <td className="registration-option-head" colSpan="2">
                Spot Registrations on July 14, 2024
              </td>
            </tr>
            <tr className="registration-row">
              <td className="registration-category">Speaker Registration</td>
              <td className="registration-option">
                Academia
                <input
                  type="checkbox"
                  className="registration-checkbox"
                  checked={registrationData.registrations.speakerAcademia}
                  onChange={(e) => handleRegistrationChange('speakerAcademia', e.target.checked)}
                />
                $999
              </td>
              <td className="registration-option">
                Business
                <input
                  type="checkbox"
                  className="registration-checkbox"
                  checked={registrationData.registrations.speakerBusiness}
                  onChange={(e) => handleRegistrationChange('speakerBusiness', e.target.checked)}
                />
                $1099
              </td>
            </tr>
            <tr className="registration-row">
              <td className="registration-category">Delegate</td>
              <td className="registration-option">
                Academia
                <input
                  type="checkbox"
                  className="registration-checkbox"
                  checked={registrationData.registrations.delegateAcademia}
                  onChange={(e) => handleRegistrationChange('delegateAcademia', e.target.checked)}
                />
                $899
              </td>
              <td className="registration-option">
                Business
                <input
                  type="checkbox"
                  className="registration-checkbox"
                  checked={registrationData.registrations.delegateBusiness}
                  onChange={(e) => handleRegistrationChange('delegateBusiness', e.target.checked)}
                />
                $999
              </td>
            </tr>
            <tr className="registration-row">
              <td className="registration-category">Student</td>
              <td className="registration-option" colSpan="2">
                <input
                  type="checkbox"
                  className="registration-checkbox"
                  checked={registrationData.registrations.student}
                  onChange={(e) => handleRegistrationChange('student', e.target.checked)}
                />
                $799
              </td>
            </tr>
            <tr className="registration-row">
              <td className="registration-category">Poster Presentation</td>
              <td className="registration-option" colSpan="2">
                <input
                  type="checkbox"
                  className="registration-checkbox"
                  checked={registrationData.registrations.poster}
                  onChange={(e) => handleRegistrationChange('poster', e.target.checked)}
                />
                $699
              </td>
            </tr>
            <tr className="registration-row">
              <td className="registration-category">Online</td>
              <td className="registration-option" colSpan="2">
                <input
                  type="checkbox"
                  className="registration-checkbox"
                  checked={registrationData.registrations.online}
                  onChange={(e) => handleRegistrationChange('online', e.target.checked)}
                />
                $400
              </td>
            </tr>
            <tr className="registration-row">
              <td className="registration-category">Accompanying Person</td>
              <td className="registration-option" colSpan="2">
                <input
                  type="checkbox"
                  className="registration-checkbox"
                  checked={registrationData.registrations.accompanyingPerson}
                  onChange={(e) => handleRegistrationChange('accompanyingPerson', e.target.checked)}
                />
                $400
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* Accommodation Section */}
      <div className="accommodation">
        <table className="accommodation-table">
          <tbody>
            <tr className="accommodation-row">
              <td className="accommodation-category-head">Accommodation Registration</td>
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
                  checked={registrationData.accommodation.twoNightsSingle}
                  onChange={(e) => handleAccommodationChange('twoNightsSingle', e.target.checked)}
                />
                $799
              </td>
              <td className="accommodation-option">
                <input
                  type="checkbox"
                  className="accommodation-checkbox"
                  checked={registrationData.accommodation.twoNightsDouble}
                  onChange={(e) => handleAccommodationChange('twoNightsDouble', e.target.checked)}
                />
                $699
              </td>
              <td className="accommodation-option">
                <input
                  type="checkbox"
                  className="accommodation-checkbox"
                  checked={registrationData.accommodation.twoNightsTriple}
                  onChange={(e) => handleAccommodationChange('twoNightsTriple', e.target.checked)}
                />
                $599
              </td>
            </tr>
            <tr className="accommodation-row">
              <td className="accommodation-category">For 3 Nights</td>
              <td className="accommodation-option">
                <input
                  type="checkbox"
                  className="accommodation-checkbox"
                  checked={registrationData.accommodation.threeNightsSingle}
                  onChange={(e) => handleAccommodationChange('threeNightsSingle', e.target.checked)}
                />
                $799
              </td>
              <td className="accommodation-option">
                <input
                  type="checkbox"
                  className="accommodation-checkbox"
                  checked={registrationData.accommodation.threeNightsDouble}
                  onChange={(e) => handleAccommodationChange('threeNightsDouble', e.target.checked)}
                />
                $699
              </td>
              <td className="accommodation-option">
                <input
                  type="checkbox"
                  className="accommodation-checkbox"
                  checked={registrationData.accommodation.threeNightsTriple}
                  onChange={(e) => handleAccommodationChange('threeNightsTriple', e.target.checked)}
                />
                $599
              </td>
            </tr>
            <tr className="accommodation-row">
              <td className="accommodation-category">For 5 Nights</td>
              <td className="accommodation-option">
                <input
                  type="checkbox"
                  className="accommodation-checkbox"
                  checked={registrationData.accommodation.fiveNightsSingle}
                  onChange={(e) => handleAccommodationChange('fiveNightsSingle', e.target.checked)}
                />
                $799
              </td>
              <td className="accommodation-option">
                <input
                  type="checkbox"
                  className="accommodation-checkbox"
                  checked={registrationData.accommodation.fiveNightsDouble}
                  onChange={(e) => handleAccommodationChange('fiveNightsDouble', e.target.checked)}
                />
                $699
              </td>
              <td className="accommodation-option">
                <input
                  type="checkbox"
                  className="accommodation-checkbox"
                  checked={registrationData.accommodation.fiveNightsTriple}
                  onChange={(e) => handleAccommodationChange('fiveNightsTriple', e.target.checked)}
                />
                $599
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* Participants Section */}
      <div className="participants">
        <label className="participants-label">No. Of Participants:</label>
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

      <RegistrationDisplay registrationData={registrationData} />
    </div>
  );
};

export default RegistrationStorage;
