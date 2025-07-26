import React, { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import "../styles/PageNavBar.css";

const PageNavBar = () => {
  const [activeDropdown, setActiveDropdown] = useState(null);
  const navbarRef = useRef(null);

  const dropdownOptions = {
    Sillano: [
      { name: "Component 1", link: "/sillano/component1" },
      { name: "Component 2", link: "/sillano/component2" },
      { name: "Component 3", link: "/sillano/component3" },
      { name: "Component 4", link: "/sillano/component4" },
    ],
    Lacusong: [
      { name: "Component 1", link: "/lacusong/component1" },
      { name: "Component 2", link: "/lacusong/component2" },
      { name: "Component 3", link: "/lacusong/component3" },
      { name: "Component 4", link: "/lacusong/component4" },
    ],
    Afable: [
      { name: "Component 1", link: "/afable/component1" },
      { name: "Component 2", link: "/afable/component2" },
      { name: "Component 3", link: "/afable/component3" },
      { name: "Component 4", link: "/afable/component4" },
    ],
    Gile: [
      { name: "Component 1", link: "/gile/component1" },
      { name: "Component 2", link: "/gile/component2" },
      { name: "Component 3", link: "/gile/component3" },
      { name: "Component 4", link: "/gile/component4" },
    ],
  };

  // Handle clicking outside to close dropdowns
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (navbarRef.current && !navbarRef.current.contains(event.target)) {
        setActiveDropdown(null);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  // Handle dropdown toggle
  const toggleDropdown = (name) => {
    setActiveDropdown(activeDropdown === name ? null : name);
  };

  // Handle navigation and close dropdown
  const handleNavigation = () => {
    setActiveDropdown(null);
  };

  // Handle keyboard navigation
  const handleKeyDown = (event, name) => {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      toggleDropdown(name);
    }
    if (event.key === "Escape") {
      setActiveDropdown(null);
    }
  };

  return (
    <nav className="navbar" ref={navbarRef}>
      <div className="navbar-left">
        {Object.keys(dropdownOptions).map((name) => (
          <div key={name} className="nav-dropdown">
            <span
              className="nav-link"
              onClick={() => toggleDropdown(name)}
              onKeyDown={(e) => handleKeyDown(e, name)}
              tabIndex={0}
              role="button"
              aria-expanded={activeDropdown === name}
              aria-haspopup="true"
            >
              {name}
            </span>
            {activeDropdown === name && (
              <div className="dropdown-menu" role="menu">
                {dropdownOptions[name].map((option, index) => (
                  <Link
                    key={index}
                    to={option.link}
                    className="dropdown-item"
                    onClick={handleNavigation}
                    role="menuitem"
                  >
                    {option.name}
                  </Link>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </nav>
  );
};

export default PageNavBar;