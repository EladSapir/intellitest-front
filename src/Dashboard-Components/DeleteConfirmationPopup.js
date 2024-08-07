import React, { useState } from 'react';
import './DeleteConfirmationPopup.css';
import eye from '../Images/eye-icon.png';

const DeleteConfirmationPopup = ({ onConfirm, onCancel, error }) => {
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleConfirm = () => {
    if (password.trim() === '') {
      alert('Please enter your password to delete the account');
      return;
    }
    onConfirm(password);
  };

  return (
    <div className="delete-popup-overlay">
      <div className="delete-popup">
        <button className="close-button" onClick={onCancel}>X</button>
        <div className="delete-popup-content">
          <div className='delete-popup-header'>
            <h2>Sad to see you leave :(</h2>
            <p>Are you sure you want to delete your account?</p>
          </div>
          <div className="password-input-container-confirm">
            <label>Enter password to authorize delete</label>
            <div className="password-input">
              <input
                type={showPassword ? 'text' : 'password'}
                value={password}
                onChange={handlePasswordChange}
                placeholder="Password"
              />
              <button type="button" className="toggle-password-visibility" onClick={toggleShowPassword}>
                <img src={eye} alt="Toggle visibility" />
              </button>
            </div>
          </div>
          {error && <p className="error-message">{error}</p>}
        </div>
        <div className="delete-popup-buttons">
          <button className="cancel-button" onClick={onCancel}>Cancel</button>
          <button className="delete-button" onClick={handleConfirm}>Delete</button>
        </div>
      </div>
    </div>
  );
};

export default DeleteConfirmationPopup;
