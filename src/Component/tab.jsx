// File: Tab.js
import React from 'react';

const Tab = ({ id, iconClass, label, activeTab, changeTab, customClass }) => {
  return (
    <a
      className={`nav-link text-light mb-3 p-3 shadow  ${activeTab === id ? 'active' : ''} ${customClass}`}
      
      onClick={() => changeTab(id)}
      role="tab"
    >
      <i className={`fa-solid ${iconClass} p-2`}></i>
      <span className="font-weight-bold small text-uppercase">{label}</span>
    </a>
  );
};

export default Tab;
