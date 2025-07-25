import { useEffect, useState } from 'react';
import '../../styles/gile/ModalDemo.css';

const ModalDemo = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [actionType, setActionType] = useState('delete');

  const openModal = (type) => {
    setActionType(type);
    setIsOpen(true);
  };

  const closeModal = () => setIsOpen(false);

  const handleConfirm = () => {
    alert(`Confirmed ${actionType} action!`);
    setIsOpen(false);
  };

  const getActionText = () => {
    switch (actionType) {
      case 'delete':
        return 'Delete';
      case 'activate':
        return 'Activate';
      default:
        return 'Confirm';
    }
  };

  // Disable scroll when modal is open
  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : 'auto';
    return () => (document.body.style.overflow = 'auto');
  }, [isOpen]);

  const handleBackdropClick = (e) => {
    if (e.target.classList.contains('modal-overlay')) {
      closeModal();
    }
  };

  return (
    <div className="modal-demo-wrapper">
      <div className="modal-demo-buttons">
        <button onClick={() => openModal('delete')} className="delete-btn">
          Delete Item
        </button> 
        <button onClick={() => openModal('activate')} className="activate-btn">
          Activate User
        </button>
        <button onClick={() => openModal('confirm')} className="confirm-btn">
          Generic Confirm
        </button>
      </div>

      {isOpen && (
        <div className="modal-overlay" onClick={handleBackdropClick}>
          <div className="modal-card" role="dialog" aria-modal="true">
            <h2 className="modal-title">{getActionText()} Confirmation</h2>
            <p className="modal-message">
              Are you sure you want to {getActionText().toLowerCase()} this item? This action cannot be undone.
            </p>
            <div className="modal-actions">
              <button onClick={closeModal} className="cancel-btn">
                Cancel
              </button>
              <button
                onClick={handleConfirm}
                className={`confirm-action-btn ${actionType}-btn`}
              >
                {getActionText()}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ModalDemo;