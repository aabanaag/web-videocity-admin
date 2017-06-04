import React from 'react';
//import Header from '../components/Header';

const MainLayout = (props) => (
  <div className="main-layout container-fluid">
    <div className="main-content">
      {props.children}
    </div>
  </div>
);

export default MainLayout;