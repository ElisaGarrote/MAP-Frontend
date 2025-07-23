import React, { useState } from 'react';
import PageLayout from '../../components/PageLayout';
import Button from '../../components/Button';

const ButtonDemo = () => {
  const [clickCount, setClickCount] = useState(0);

  const EditIcon = () => (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7" />
      <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z" />
    </svg>
  );

  const DeleteIcon = () => (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M3 6h18" />
      <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" />
    </svg>
  );

  const ViewIcon = () => (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
      <circle cx="12" cy="12" r="3" />
    </svg>
  );

  return (
    <PageLayout>
      <h1>Button Component Demo</h1>
      
      <div style={{ marginBottom: '30px' }}>
        <h2>Primary Buttons</h2>
        <div style={{ display: 'grid', gap: '20px', maxWidth: '300px' }}>
          <Button onClick={() => setClickCount(clickCount + 1)}>
            Primary Button (Clicked {clickCount} times)
          </Button>
          
          <Button disabled>
            Disabled Button
          </Button>
        </div>
      </div>

      <div style={{ marginBottom: '30px' }}>
        <h2>Action Buttons</h2>
        <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
          <Button variant="action" size="action">
            <EditIcon />
          </Button>
          <Button variant="action" size="action">
            <DeleteIcon />
          </Button>
          <Button variant="action" size="action">
            <ViewIcon />
          </Button>
        </div>
      </div>

      <div>
        <h2>Check-in/out Buttons</h2>
        <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
          <Button variant="checkin" size="checkin">
            Check In
          </Button>
          <Button variant="checkin" size="checkin">
            Check Out
          </Button>
        </div>
      </div>
    </PageLayout>
  );
};

export default ButtonDemo;