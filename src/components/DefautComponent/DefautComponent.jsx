import React, { useState } from 'react';
import HeaderComponent from '../HeaderComponent/HeaderComponent';
import ScrollToTop from '../HeaderComponent/ScrollToTop ';

function DefautComponent({ children }) {
  return (
    <div className="relative">
      <div className=" absolute z-50 w-full">
        {' '}
        <HeaderComponent />
      </div>
      <div className="pt-10"> {children}</div>
      <div className=" absolute">
        <ScrollToTop />
      </div>
    </div>
  );
}

export default DefautComponent;
