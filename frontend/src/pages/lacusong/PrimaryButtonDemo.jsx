import React, { useState } from 'react';
import PageLayout from '../../components/PageLayout';
import Button from '../../components/Button';

const PrimaryButtonDemo = () => {
  const [status, setStatus] = useState('Ready');

  const handlePrimaryAction = () => {
    setStatus('Loading...');
    setTimeout(() => {
      setStatus('Completed!');
      setTimeout(() => setStatus('Ready'), 2000);
    }, 1500);
  };

  return (
    <PageLayout>
      <h1>Primary Button Component Demo</h1>
      
      <div style={{ marginBottom: '30px' }}>
        <h2>Primary Button States</h2>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '15px', maxWidth: '300px' }}>
          <Button onClick={handlePrimaryAction}>
            Primary Action - {status}
          </Button>
          
          <Button disabled>
            Disabled Primary Button
          </Button>
        </div>
      </div>

      <div style={{ marginBottom: '30px' }}>
        <h2>Interactive Demo</h2>
        <p>Click the primary button above to see the loading state simulation!</p>
        <div style={{ padding: '20px', backgroundColor: '#F0F8FF', borderRadius: '10px', border: '1px solid #007BFF' }}>
          <p><strong>Current Status:</strong> {status}</p>
        </div>
      </div>

      <div style={{ marginBottom: '30px' }}>
        <h2>Button Specifications</h2>
        <div style={{ padding: '20px', backgroundColor: '#F8F8F8', borderRadius: '10px' }}>
          <h3>Default State:</h3>
          <ul>
            <li>Background: Primary Blue #007BFF</li>
            <li>Text: White</li>
            <li>Padding: 12px</li>
            <li>Border-radius: 6px</li>
            <li>Full width on mobile</li>
          </ul>
          
          <h3>Hover State:</h3>
          <ul>
            <li>Background: Deeper Blue #0056B3</li>
          </ul>
          
          <h3>Disabled State:</h3>
          <ul>
            <li>Background: Neutral Gray #414651</li>
            <li>Text: Muted Gray #9CA3AF</li>
            <li>Cursor: not-allowed</li>
          </ul>
        </div>
      </div>

      <div>
        <h2>Usage Guidelines</h2>
        <ul>
          <li>Use for primary actions in forms and modals</li>
          <li>Avoid using for destructive actions</li>
          <li>Always use white text for contrast</li>
          <li>Button stacks on mobile with input fields</li>
          <li>Apply full width when used as a component</li>
        </ul>
      </div>
    </PageLayout>
  );
};

export default PrimaryButtonDemo;