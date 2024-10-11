import React, { useState } from "react";
// import "./register.css";
import RegistrationForm from "./RegistrationForm";
import ReactFlagsSelect from "react-flags-select";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";

function Register() {
  const [title, setTitle] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [country, setCountry] = useState("");
  const [fullAddress, setFullAddress] = useState("");
  const [abstractCategory, setAbstractCategory] = useState("");
  const [selected, setSelected] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    if (
      title &&
      firstName &&
      lastName &&
      email &&
      phoneNumber &&
      country &&
      fullAddress &&
      abstractCategory
    ) {
      console.log({
        title,
        firstName,
        lastName,
        email,
        phoneNumber,
        country,
        fullAddress,
        abstractCategory,
      });
    } else {
      console.error("Please fill in all required fields.");
    }
  };

  return (
    <>
      <div className="hero-section">

        <div className="overlay">
          <h1 className="hero-h1">Register</h1>
        </div>
      </div>

      <div className="register-container">
        <form className="register-form" onSubmit={handleSubmit}>
          <h2 className="register-title">Personal Details</h2>

          <div className="register-row">
            <div className="register-field">
              <label className="register-label" htmlFor="title">
                Title:
              </label>
              <select
                className="register-select"
                id="title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              >
                <option value="">Select Any</option>
                <option value="Mr.">Mr</option>
                <option value="Ms.">Ms</option>
                <option value="Mrs.">Mrs</option>
                <option value="Ms.">Prof</option>
                <option value="Ms.">Dr</option>
              </select>
            </div>

            <div className="register-field">
              <label className="register-label" htmlFor="firstName">
                First Name:
              </label>
              <input
                className="register-input"
                type="text"
                id="firstName"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                required
              />
            </div>

            <div className="register-field">
              <label className="register-label" htmlFor="lastName">
                Last Name:
              </label>
              <input
                className="register-input"
                type="text"
                id="lastName"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
                required
              />
            </div>
          </div>

          <div className="register-row">
            <div className="register-field">
              <label className="register-label" htmlFor="email">
                Email:
              </label>
              <input
                className="register-input"
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>

            <div className="register-field phone-input-container">
              <label className="register-label" htmlFor="phoneNumber">
                Phone Number:
              </label>
              <PhoneInput
                country={"in"}
                className="register-input-phone"
                type="tel"
                id="phoneNumber"
                value={phoneNumber}
                onChange={(value) => setPhoneNumber(value)} 
                inputProps={{
                  name: "phoneNumber",
                  required: true,
                }}
              />
            </div>
          </div>

          <h2 className="register-further-information-title">
            Further Information
          </h2>

          <div className="register-further-information-row">
            <div className="register-further-information-field">
              <label className="register-further-information-country">
                Country:
                <div
                  style={{
                    backgroundColor: "white",
                    borderRadius: "0 !important",
                  }}
                >
                  <ReactFlagsSelect
                    selected={selected}
                    onSelect={(code) => setSelected(code)}
                    placeholder="Select Country"
                    searchable
                    searchPlaceholder="Search countries"
                    className="register-further-information-field-country"
                  />
                </div>
              </label>
            </div>

            <div className="register-further-information-field">
              <label
                className="register-further-information-label"
                htmlFor="abstractCategory"
              >
                Abstract Category:
              </label>
              <select
                className="register-further-information-abstract-select"
                id="abstractCategory"
                value={abstractCategory}
                onChange={(e) => setAbstractCategory(e.target.value)}
              >
                <option value="">Select Category</option>
                <option value="Technology">Poster</option>
                <option value="Science">Oral</option>
                <option value="Delegate">Delegate</option>
                <option value="Other">Other</option>
              </select>
            </div>
          </div>

          <div className="register-field">
            <label className="register-label" htmlFor="fullAddress">
              Full Postal Address:
            </label>
            <textarea
              className="register-address-textarea"
              id="fullAddress"
              value={fullAddress}
              onChange={(e) => setFullAddress(e.target.value)}
            />
          </div>
        </form>
        <RegistrationForm />
      </div>
    </>
  );
}

export default Register;
