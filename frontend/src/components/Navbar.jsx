import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import MAPLOGO from '../assets/MAPLOGO.jpg';
import '../styles/Navbar.css';

const Navbar = () => {
  const [isNotificationOpen, setIsNotificationOpen] = useState(false);
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [notificationCount, setNotificationCount] = useState(3);
  
  const notificationRef = useRef(null);
  const profileRef = useRef(null);
  const dropdownRefs = useRef({});

  // Mock user data
  const userData = {
    name: "John Doe",
    role: "Admin",
    image: null,
    isAdmin: true
  };

  // Updated dropdown options structure
  const dropdownOptions = {
    Sillano: [
      { name: "Component 1", link: "/sillano/component1" },
      { name: "Component 2", link: "/sillano/component2" },
      { name: "Component 3", link: "/sillano/component3" },
      { name: "Component 4", link: "/sillano/component4" },
    ],
    Lacusong: [
      { name: "Button", link: "/lacusong/button" },
      { name: "Input", link: "/lacusong/input" },
      { name: "Navbar", link: "/lacusong/navbar" },
      { name: "Layout", link: "/lacusong/layout" },
      { name: "Primary Button", link: "/lacusong/primary-button" },
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

  // Mock notifications
  const [notifications, setNotifications] = useState([
    {
      id: 1,
      title: "System Update",
      message: "New features have been deployed",
      time: "2 hours ago",
      icon: ""
    },
    {
      id: 2,
      title: "User Registration",
      message: "New user has registered",
      time: "4 hours ago",
      icon: ""
    },
    {
      id: 3,
      title: "Maintenance Alert",
      message: "Scheduled maintenance tonight",
      time: "1 day ago",
      icon: ""
    }
  ]);

  // Handle clicks outside dropdowns
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (notificationRef.current && !notificationRef.current.contains(event.target)) {
        setIsNotificationOpen(false);
      }
      if (profileRef.current && !profileRef.current.contains(event.target)) {
        setIsProfileOpen(false);
      }
      
      // Check if click is outside any dropdown
      let clickedOutside = true;
      Object.keys(dropdownRefs.current).forEach(key => {
        if (dropdownRefs.current[key] && dropdownRefs.current[key].contains(event.target)) {
          clickedOutside = false;
        }
      });
      
      if (clickedOutside) {
        setActiveDropdown(null);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const clearAllNotifications = () => {
    setNotifications([]);
    setNotificationCount(0);
  };

  const deleteNotification = (id) => {
    const updatedNotifications = notifications.filter(notif => notif.id !== id);
    setNotifications(updatedNotifications);
    setNotificationCount(Math.max(0, notificationCount - 1));
  };

  const handleLogout = () => {
    console.log('Logging out...');
  };

  const handleDropdownToggle = (name) => {
    setActiveDropdown(activeDropdown === name ? null : name);
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        {/* Logo Section - Updated to be non-clickable */}
        <div className="navbar-logo">
          <img src={MAPLOGO} alt="Company Logo" className="logo-img" />
        </div>

        {/* Desktop Navigation - Updated with multiple dropdowns without icons */}
        <div className="navbar-nav desktop-nav">
          {Object.keys(dropdownOptions).map((name) => (
            <div 
              key={name} 
              className="nav-item dropdown" 
              ref={(el) => dropdownRefs.current[name] = el}
            >
              <button 
                className={`dropdown-toggle ${activeDropdown === name ? 'active' : ''}`}
                onClick={() => handleDropdownToggle(name)}
              >
                {name}
              </button>
              {activeDropdown === name && (
                <div className="dropdown-menu">
                  {dropdownOptions[name].map((option, index) => (
                    <Link 
                      key={index} 
                      to={option.link} 
                      className="dropdown-item"
                      onClick={() => setActiveDropdown(null)}
                    >
                      {option.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>

        {/* User Controls */}
        <div className="navbar-controls">
          {/* Notifications */}
          <div className="control-item notification-container" ref={notificationRef}>
            <button 
              className="notification-btn"
              onClick={() => setIsNotificationOpen(!isNotificationOpen)}
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"/>
                <path d="M13.73 21a2 2 0 0 1-3.46 0"/>
              </svg>
              {notificationCount > 0 && (
                <span className="notification-badge">{notificationCount}</span>
              )}
            </button>
            
            {isNotificationOpen && (
              <div className="notification-overlay">
                <div className="notification-header">
                  <h3>Notifications</h3>
                  {notifications.length > 0 && (
                    <button className="clear-all-btn" onClick={clearAllNotifications}>
                      Clear All
                    </button>
                  )}
                </div>
                <div className="notification-list">
                  {notifications.length === 0 ? (
                    <div className="no-notifications">No notifications</div>
                  ) : (
                    notifications.map(notification => (
                      <div key={notification.id} className="notification-item">
                        <div className="notification-icon">{notification.icon}</div>
                        <div className="notification-content">
                          <div className="notification-title">{notification.title}</div>
                          <div className="notification-message">{notification.message}</div>
                          <div className="notification-time">{notification.time}</div>
                        </div>
                        <button 
                          className="delete-notification-btn"
                          onClick={() => deleteNotification(notification.id)}
                        >
                          ×
                        </button>
                      </div>
                    ))
                  )}
                </div>
              </div>
            )}
          </div>

          {/* Profile Dropdown */}
          <div className="control-item profile-container" ref={profileRef}>
            <button 
              className="profile-btn"
              onClick={() => setIsProfileOpen(!isProfileOpen)}
            >
              <div className="profile-image">
                {userData.image ? (
                  <img src={userData.image} alt="Profile" />
                ) : (
                  <div className="default-avatar">{userData.name.charAt(0)}</div>
                )}
              </div>
            </button>
            
            {isProfileOpen && (
              <div className="profile-dropdown">
                <div className="profile-info">
                  <div className="profile-name">{userData.name}</div>
                  <div className="profile-role-badge">{userData.role}</div>
                </div>
                <div className="profile-menu">
                  <Link to="/profile" className="profile-menu-item">
                    <span className="menu-icon"> </span>
                    Manage Profile
                  </Link>
                  {userData.isAdmin && (
                    <Link to="/admin/users" className="profile-menu-item">
                      <span className="menu-icon"> </span>
                      User Management
                    </Link>
                  )}
                  <button className="profile-menu-item logout-btn" onClick={handleLogout}>
                    <span className="menu-icon"> </span>
                    Log Out
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Mobile Hamburger */}
        <button 
          className="hamburger mobile-only"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>

      {/* Mobile Menu - Updated with all dropdowns */}
      {isMobileMenuOpen && (
        <div className="mobile-menu">
          <div className="mobile-user-section">
            <div className="mobile-profile">
              <div className="profile-image mobile-profile-img">
                {userData.image ? (
                  <img src={userData.image} alt="Profile" />
                ) : (
                  <div className="default-avatar">{userData.name.charAt(0)}</div>
                )}
              </div>
              <div className="mobile-user-info">
                <div className="profile-name">{userData.name}</div>
                <div className="profile-role-badge">{userData.role}</div>
              </div>
            </div>
            <div className="mobile-notifications">
              <button className="notification-btn mobile-notification">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"/>
                  <path d="M13.73 21a2 2 0 0 1-3.46 0"/>
                </svg>
                {notificationCount > 0 && (
                  <span className="notification-badge">{notificationCount}</span>
                )}
              </button>
            </div>
          </div>
          
          <div className="mobile-nav">
            {Object.keys(dropdownOptions).map((name) => (
              <div key={name} className="mobile-dropdown">
                <div className="mobile-dropdown-header">{name}</div>
                {dropdownOptions[name].map((option, index) => (
                  <Link 
                    key={index} 
                    to={option.link} 
                    className="mobile-dropdown-item"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {option.name}
                  </Link>
                ))}
              </div>
            ))}
            
            <div className="mobile-profile-menu">
              <Link 
                to="/profile" 
                className="mobile-menu-item"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Manage Profile
              </Link>
              {userData.isAdmin && (
                <Link 
                  to="/admin/users" 
                  className="mobile-menu-item"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  User Management
                </Link>
              )}
              <button 
                className="mobile-menu-item logout-btn" 
                onClick={() => {
                  handleLogout();
                  setIsMobileMenuOpen(false);
                }}
              >
                Log Out
              </button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;