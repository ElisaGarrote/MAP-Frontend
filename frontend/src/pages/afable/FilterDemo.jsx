// styles
import "./filterDemo.css";

// react
import { useState } from "react";

export default function FilterDemo() {
  const [showFilter, setShowFilter] = useState(false);

  return (
    <div className="filterPanel">
      <div className="fpShowFilter" onClick={() => setShowFilter(!showFilter)}>
        <span>{showFilter ? "Hide Filter" : "Show Filter"}</span>
      </div>

      {showFilter && (
        <div className="filterPanelCont">
          {/* Category Dropdown */}
          <div className="filterGroup">
            <label htmlFor="category">Category</label>
            <select name="category" className="dropdown">
              <option value="">Select category</option>
              <option value="books">Books</option>
              <option value="electronics">Electronics</option>
              <option value="clothing">Clothing</option>
            </select>
          </div>

          {/* Status Dropdown */}
          <div className="filterGroup">
            <label htmlFor="status">Status</label>
            <select name="status" className="dropdown">
              <option value="">Select status</option>
              <option value="active">Active</option>
              <option value="inactive">Inactive</option>
              <option value="archived">Archived</option>
            </select>
          </div>

          {/* Start Date */}
          <div className="filterGroup">
            <label htmlFor="startDate">Start Date</label>
            <input type="date" name="startDate" className="dateTime"/>
          </div>

          {/* End Date */}
          <div className="filterGroup">
            <label htmlFor="endDate">End Date</label>
            <input type="date" name="endDate" className="dateTime"/>
          </div>

          {/* Reset Button */}
          <div className="filterActions">
            <button type="button" className="resetButton">
              Reset Filters
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
