import { useState } from 'react';
import '../../styles/gile/CheckboxDemo.css';

const CheckboxDemo = () => {
  const [checked, setChecked] = useState(false);
  const [disabledChecked, setDisabledChecked] = useState(true);

  return (
    <section aria-label="Checkbox Demo">
      {/* Active Checkbox */}
      <label className="column-checkbox" style={{ minHeight: '44px' }}>
        <input
          type="checkbox"
          checked={checked}
          onChange={() => setChecked(!checked)}
          className="checkbox-input"
        />
        <span className="checkbox-label">I agree to the terms</span>
      </label>

      {/* Disabled (Checked) */}
      <label className="column-checkbox" style={{ minHeight: '44px' }}>
        <input
          type="checkbox"
          checked={disabledChecked}
          disabled
          className="checkbox-input"
        />
        <span className="checkbox-label">Receive notifications (Disabled)</span>
      </label>

      {/* Disabled (Unchecked) */}
      <label className="column-checkbox" style={{ minHeight: '44px' }}>
        <input
          type="checkbox"
          disabled
          className="checkbox-input"
        />
        <span className="checkbox-label">Subscribe (Disabled, Unchecked)</span>
      </label>
    </section>
  );
};

export default CheckboxDemo;