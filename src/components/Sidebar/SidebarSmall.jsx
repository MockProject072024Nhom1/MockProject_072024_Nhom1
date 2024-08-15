import React, { useState } from 'react';
import {
  HiHome,
  HiOutlineGlobeAlt,
  HiOutlineClipboardDocumentList,
  HiOutlineBellAlert,
  HiOutlineUserCircle,
  HiOutlineChatBubbleBottomCenterText,
  HiOutlineQuestionMarkCircle,
  HiOutlineCog6Tooth,
  HiCalendarDays,
  HiClock
} from 'react-icons/hi2';
import ItemSidebarSmall from './ItemSidebarSmall';

const SidebarSmall = ({ role }) => {
  // const [role, setRole] = useState('bodyguard');
  return (
    <div className="w-[120px] bg-primary text-white transition-transform duration-300 ">
      <div className="relative">
        <div className="m-4  h-[calc(100vh-120px)] relative">
          <ul className="mb-4 flex flex-col gap-4  ">
            {role === 'client' && (
              <>
                <ItemSidebarSmall
                  to="/"
                  name={'home'}
                  icon={<HiHome size={20} />}
                />
                <ItemSidebarSmall
                  to="/services"
                  name={'Services'}
                  icon={<HiOutlineGlobeAlt size={20} />}
                />
              </>
            )}
            {role !== 'client' && (
              <ItemSidebarSmall
                to="/calendar-bodyguard"
                name={'Calendar'}
                icon={<HiCalendarDays size={20} />}
              />
            )}
            <ItemSidebarSmall
              to={
                role === 'supervisor'
                  ? '/contracts-supervisor'
                  : role === 'admin'
                  ? '/contracts-admin'
                  : role === 'bodyguard'
                  ? '/contracts-bodyguard'
                  : '/contracts'
              }
              name={'Contract'}
              icon={<HiOutlineClipboardDocumentList size={20} />}
            />
            {role !== 'client' && (
              <ItemSidebarSmall
                to={
                  role === 'supervisor'
                    ? '/profile-supervisor'
                    : role === 'admin'
                    ? '/profile-admin'
                    : role === 'bodyguard'
                    ? '/profile-bodyguard'
                    : '/profile'
                }
                name={'Profile'}
                icon={<HiOutlineUserCircle size={20} />}
              />
            )}
            {role !== 'bodyguard' && (
              <ItemSidebarSmall
                to={
                  role === 'supervisor'
                    ? '/notifications-supervisor'
                    : role === 'admin'
                    ? '/notifications-admin'
                    : '/notifications'
                }
                name={'Notifications'}
                icon={<HiOutlineBellAlert size={20} />}
              />
            )}
            {role === 'supervisor' && (
              <ItemSidebarSmall
                to="/timekeeping"
                name={'Timekeeping'}
                icon={<HiClock size={20} />}
              />
            )}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default SidebarSmall;
