import React from 'react';

const SuccessPage = () => {
  const pageStyle = {
    textAlign: 'center',
    marginTop: '50px',
  };

  const headingStyle = {
    fontSize: '36px',
    color: 'green',
  };

  const paragraphStyle = {
    fontSize: '18px',
    color: '#333',
    marginTop: '20px',
  };

  const emailStyle = {
    display: 'inline-block',
    marginTop: '20px',
    fontSize: '16px',
    color: '#007bff',
    textDecoration: 'none',
  };

  const linkStyle = {
    display: 'inline-block',
    marginTop: '30px',
    padding: '10px 20px',
    fontSize: '16px',
    color: '#fff',
    backgroundColor: '#007bff',
    textDecoration: 'none',
    borderRadius: '5px',
  };

  return (
    <div style={pageStyle}>
      <h1 style={headingStyle}>Payment Successful!</h1>
      <p style={paragraphStyle}>Thank you for your payment.<br/> For more details, please contact us:</p>
      <div>
        <a style={emailStyle} href="mailto:support@stripeconferences.com">support@stripeconferences.com</a>
      </div>
      <br />
      <a style={linkStyle} href="/register">Return to Register Page</a>
    </div>
  );
};

export default SuccessPage;
