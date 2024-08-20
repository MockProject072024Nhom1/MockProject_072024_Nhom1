import React, { useState } from 'react';
import HeaderComponent from '../HeaderComponent/HeaderComponent';
import ScrollToTop from '../HeaderComponent/ScrollToTop ';
import Footer from '../Footer/Footer';
import SidebarSmall from '../Sidebar/SidebarSmall';
import SidebarClient from '../Sidebar/SidebarClient';

function DefautComponent({ children }) {
  const [activeSidebar, setActiveSidebar] = useState('small');
  const toggleSidebar = () => {
    setActiveSidebar((prevState) =>
      prevState === 'small' ? 'bigger' : 'small'
    );
  };
  const [roles, setRoles] = useState('admin');
  return (
    <div className=" relative  ">
      <div className=" absolute z-30 ">
        <HeaderComponent toggleSidebar={toggleSidebar} />
      </div>
      <div className="pt-20 flex ">
        {activeSidebar === 'bigger' ? (
          <div className="fixed h-full z-20 bg-primary">
            <SidebarClient role={roles} />
          </div>
        ) : (
          <div className="fixed bg-primary h-full z-20">
            {' '}
            <SidebarSmall role={roles} />
          </div>
        )}

        <div
          className={`${
            activeSidebar === 'bigger'
              ? 'ml-[205px]'
              : 'small'
              ? 'ml-[120px]'
              : ''
          } grow`}
        >
          {children}
          <Footer />
        </div>
      </div>
      <div className=" absolute z-40">
        <ScrollToTop />
      </div>
    </div>
  );
}

export default DefautComponent;
