import { useEffect, useRef, useState } from 'react';
import '../../styles/gile/DropdownDemo.css';
import { FiChevronDown, FiX } from 'react-icons/fi';

const options = [
  { label: 'Apple', category: 'Fruit' },
  { label: 'Carrot', category: 'Vegetable' },
  { label: 'Banana', category: 'Fruit' },
  { label: 'Broccoli', category: 'Vegetable' },
  { label: 'Strawberry', category: 'Fruit' },
];

const DropdownDemo = () => {
  const [search, setSearch] = useState('');
  const [singleSelect, setSingleSelect] = useState(null);
  const [multiSelect, setMultiSelect] = useState([]);
  const [openDropdown, setOpenDropdown] = useState(null); // 'single', 'multi', or null

  const wrapperRef = useRef(null);

  const filteredOptions = options.filter(
    (opt) =>
      opt.label.toLowerCase().includes(search.toLowerCase()) ||
      opt.category.toLowerCase().includes(search.toLowerCase())
  );

  const toggleMulti = (opt) => {
    const exists = multiSelect.find((item) => item.label === opt.label);
    setMultiSelect(
      exists
        ? multiSelect.filter((item) => item.label !== opt.label)
        : [...multiSelect, opt]
    );
  };

  const removeTag = (label) =>
    setMultiSelect(multiSelect.filter((item) => item.label !== label));

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (wrapperRef.current && !wrapperRef.current.contains(event.target)) {
        setOpenDropdown(null);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <div className="dropdown-demo-wrapper" ref={wrapperRef}>
      {/* === Single Select === */}
      <h3 className="dropdown-section-title">Single Select</h3>
      <div className="dropdown-group">
        <div className="dropdown">
          <button
            className="dropdown-button"
            onClick={() => setOpenDropdown(openDropdown === 'single' ? null : 'single')}
          >
            {singleSelect ? singleSelect.label : 'Select One Option'}
            <span className={`dropdown-arrow ${openDropdown === 'single' ? 'open' : ''}`}>
              <FiChevronDown />
            </span>
          </button>
          {openDropdown === 'single' && (
            <div className="dropdown-menu">
              <input
                className="search-input"
                type="text"
                placeholder="Search..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />
              <ul className="dropdown-list">
                {filteredOptions.length === 0 && (
                  <li className="empty-state">No options found.</li>
                )}
                {filteredOptions.map((opt) => (
                  <li
                    key={opt.label}
                    className={`dropdown-item ${
                      singleSelect?.label === opt.label ? 'selected' : ''
                    }`}
                    onClick={() => {
                      setSingleSelect(opt);
                      setOpenDropdown(null);
                      setSearch('');
                    }}
                  >
                    {opt.label}
                    <span className="category">({opt.category})</span>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>

      <div className="section-divider" />

      {/* === Multi Select === */}
      <h3 className="dropdown-section-title">Multi Select</h3>
      <div className="dropdown-group">
        <div className="dropdown">
          <button
            className="dropdown-button"
            onClick={() => setOpenDropdown(openDropdown === 'multi' ? null : 'multi')}
          >
            {multiSelect.length > 0
              ? `${multiSelect.length} Selected`
              : 'Select Multiple Options'}
            <span className={`dropdown-arrow ${openDropdown === 'multi' ? 'open' : ''}`}>
              <FiChevronDown />
            </span>
          </button>

          {openDropdown === 'multi' && (
            <div className="dropdown-menu">
              <input
                className="search-input"
                type="text"
                placeholder="Search..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />
              <ul className="dropdown-list">
                {filteredOptions.length === 0 && (
                  <li className="empty-state">No options found.</li>
                )}
                {filteredOptions.map((opt) => {
                  const checked = multiSelect.find((item) => item.label === opt.label);
                  return (
                    <li key={opt.label} className="dropdown-item">
                      <label className="dropdown-label">
                        <span
                          className={`custom-checkbox ${checked ? 'checked' : ''}`}
                        >
                          {checked && <span className="checkmark">✓</span>}
                        </span>
                        <input
                          type="checkbox"
                          checked={!!checked}
                          onChange={() => toggleMulti(opt)}
                          style={{ display: 'none' }}
                        />
                        {opt.label}
                        <span className="category">({opt.category})</span>
                      </label>
                    </li>
                  );
                })}
              </ul>
            </div>
          )}

          {multiSelect.length > 0 && (
            <div className="tags-container">
              {multiSelect.map((item) => (
                <span key={item.label} className="tag">
                  {item.label}
                  <button className="tag-remove" onClick={() => removeTag(item.label)}>
                    <FiX />
                  </button>
                </span>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default DropdownDemo;