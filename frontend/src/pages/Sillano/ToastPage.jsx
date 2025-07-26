import React, { useState } from 'react';
import NavBar from '../../components/PageNavBar.jsx';
import Alert from '../../components/Alert.jsx';

const ToastPage = () => {
  const [successMessage, setSuccessMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const showSuccess = () => {
    setSuccessMessage('Success! Operation completed successfully.');
    setErrorMessage('');
    // Auto-clear after 5 seconds
    setTimeout(() => setSuccessMessage(''), 5000);
  };

  const showError = () => {
    setErrorMessage('Error! Something went wrong.');
    setSuccessMessage('');
    // Auto-clear after 5 seconds
    setTimeout(() => setErrorMessage(''), 5000);
  };

  return (
    <div>
      <NavBar />

      {/* Alert notifications */}
      {errorMessage && <Alert message={errorMessage} type="danger" />}
      {successMessage && <Alert message={successMessage} type="success" />}

      <div className="toast-page-container">
        <h1 className="toast-page-title">Toast Page</h1>
        <p className="toast-page-description">Click the buttons below to show alerts:</p>

        <div className="toast-buttons-container">
          <button
            onClick={showSuccess}
            className="toast-button toast-button-success"
          >
            Show Success
          </button>

          <button
            onClick={showError}
            className="toast-button toast-button-error"
          >
            Show Error
          </button>
        </div>
      </div>
    </div>
  );
};

export default ToastPage;