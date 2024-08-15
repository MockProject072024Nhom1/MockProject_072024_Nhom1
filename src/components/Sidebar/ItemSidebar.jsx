import React from 'react';
import { NavLink } from 'react-router-dom';

const ItemSidebar = ({ icon, to, name }) => {
  return (
    <li className="  ">
      <NavLink
        to={to}
        className={({ isActive }) =>
          isActive
            ? 'align-middle select-none shadow-[0px_0px_20px_0px_rgba(255,255,255,0.75);] font-bold text-center transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-3 rounded-lg  text-white shadow-white hover:shadow-lg hover:shadow-gray-900/20 active:opacity-[0.85] w-full flex items-center gap-4 px-4 capitalize'
            : 'align-middle select-none font-bold text-center transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-3 rounded-lg text-white hover:bg-white/10 active:bg-white/30 w-full flex items-center gap-4 px-4 capitalize'
        }
        type="button"
      >
        {icon}

        <p className="block antialiased  text-base leading-relaxed font-medium capitalize">
          {name}
        </p>
      </NavLink>
    </li>
  );
};

export default ItemSidebar;
