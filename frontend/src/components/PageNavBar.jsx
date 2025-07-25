import React, { useState, useRef, useEffect } from "react";
import "../styles/PageNavBar.css";

const PageNavBar = () => {
  const [activeDropdown, setActiveDropdown] = useState(null);
  const dropdownRef = useRef(null);

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
      { name: "Checkbox", link: "/gile/checkbox" },
      { name: "Dropdown", link: "/gile/dropdown" },
      { name: "Modal", link: "/gile/modal" },
      { name: "Tabs", link: "/gile/tabs" },
    ],
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setActiveDropdown(null);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <nav className="navbar">
      <div className="navbar-left">
        {Object.keys(dropdownOptions).map((name) => (
          <div
            key={name}
            className="nav-dropdown"
            ref={dropdownRef}
          >
            <span
              className="nav-link"
              onClick={() =>
                setActiveDropdown(activeDropdown === name ? null : name)
              }
            >
              {name}
            </span>
            {activeDropdown === name && (
              <div className="dropdown-menu">
                {dropdownOptions[name].map((option, index) => (
                  <a
                    key={index}
                    href={option.link}
                    className="dropdown-item"
                  >
                    {option.name}
                  </a>
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