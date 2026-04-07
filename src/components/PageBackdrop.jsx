import React from 'react';
import './PageBackdrop.css';

const PageBackdrop = () => {
  return (
    <div className="page-backdrop" aria-hidden>
      <div className="page-backdrop-grid" />
      <div className="page-backdrop-orb page-backdrop-orb--1" />
      <div className="page-backdrop-orb page-backdrop-orb--2" />
      <div className="page-backdrop-vignette" />
    </div>
  );
};

export default PageBackdrop;
