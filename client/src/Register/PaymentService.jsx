import axios from 'axios';
import { useLocation } from 'react-router-dom';
import { useState } from 'react';

function PaymentService() {
  const location = useLocation();
  const total = location.state?.total || 0; // Fallback to 0 if total is undefined
  const [errorMessage, setErrorMessage] = useState('');

  const handlePayment = async (e) => {
    e.preventDefault();

    if (total <= 0) {
      setErrorMessage('Invalid total amount. Please try again.');
      return;
    }

    try {
      const res = await axios.post('http://localhost:8000/payment', { total });

      if (res && res.data) {
        const approvalUrl = res.data.approvalUrl;
        window.location.href = approvalUrl; // Redirect to PayPal
      }
    } catch (error) {
      console.error('Error during the payment request', error);
      setErrorMessage('An error occurred during the payment process. Please try again later.');
    }
  };

  return (
    <>
      <h2>Total Amount: ${total > 0 ? total : 'Invalid total amount'}</h2>
      {errorMessage && <p className="error">{errorMessage}</p>}
      <button onClick={handlePayment} disabled={total <= 0}>
        Proceed to Payment
      </button>
    </>
  );
}

export default PaymentService;
