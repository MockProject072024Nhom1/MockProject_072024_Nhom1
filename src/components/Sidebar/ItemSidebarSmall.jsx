import React from 'react';

import { NavLink } from 'react-router-dom';
const ItemSidebarSmall = ({ to, icon, name }) => {
  return (
    <li>
      <NavLink
        to={to}
        className={({ isActive }) =>
          isActive
            ? 'align-middle flex-col select-none shadow-[0px_0px_20px_0px_rgba(255,255,255,0.75);] font-bold text-center transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-[10px] py-3 rounded-lg  text-white shadow-white hover:shadow-lg hover:shadow-gray-900/20 active:opacity-[0.85] w-full flex items-center gap-1 px-4 capitalize'
            : 'align-middle flex-col select-none font-bold text-center transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-[10px] py-3 rounded-lg text-white hover:bg-white/10 active:bg-white/30 w-full flex items-center gap-1 px-4 capitalize'
        }
        type="button"
      >
        {icon}

        <p className="block antialiased text-[10px] leading-relaxed text-inherit font-medium capitalize">
          {name}
        </p>
      </NavLink>
    </li>
  );
};

export default ItemSidebarSmall;
