import React from 'react';

const FailedPage = () => {
  const pageStyle = {
    textAlign: 'center',
    marginTop: '50px',
  };

  const headingStyle = {
    fontSize: '36px',
    color: 'red',
  };

  const paragraphStyle = {
    fontSize: '18px',
    color: '#333',
    marginTop: '20px',
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
      <h1 style={headingStyle}>Payment Failed</h1>
      <p style={paragraphStyle}>There was an issue with your payment. Please try again.</p>
      <a style={linkStyle} href="/register">Return to Register Page</a>
    </div>
  );
};

export default FailedPage;
