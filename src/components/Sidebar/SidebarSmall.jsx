import React, { useState } from 'react';
import {
  HiHome,
  HiOutlineGlobeAlt,
  HiOutlineClipboardDocumentList,
  HiOutlineBellAlert,
  HiOutlineUserCircle,
  HiOutlineChatBubbleBottomCenterText,
  HiMiniChartPie,
  HiCalendarDays,
  HiClock,
  HiBars3CenterLeft
} from 'react-icons/hi2';
import ItemSidebarSmall from './ItemSidebarSmall';

const SidebarSmall = ({ role }) => {
  // const [role, setRole] = useState('bodyguard');
  return (
    <div className="w-[120px] bg-primary text-white transition-transform duration-300 ">
      <div className="relative">
        <div className="m-4  h-[calc(100vh-120px)] relative">
          <ul className="mb-4 flex flex-col gap-4  ">
            {role === 'client' && role !== 'admin' && (
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

            {role !== 'admin' && (
              <ItemSidebarSmall
                to={
                  role === 'supervisor'
                    ? '/contracts-supervisor'
                    : role === 'bodyguard'
                    ? '/contracts-bodyguard'
                    : '/contracts'
                }
                name={'Contract'}
                icon={<HiOutlineClipboardDocumentList size={20} />}
              />
            )}

            {role !== 'client' && role !== 'admin' && (
              <ItemSidebarSmall
                to={
                  role === 'supervisor'
                    ? '/schedule-supervisor'
                    : role === 'bodyguard'
                    ? '/calendar-bodyguard'
                    : '/calendar'
                }
                name={'Calendar'}
                icon={<HiCalendarDays size={20} />}
              />
            )}
            {role !== 'client' && role !== 'admin' && (
              <ItemSidebarSmall
                to={
                  role === 'supervisor'
                    ? '/profile-supervisor'
                    : role === 'bodyguard'
                    ? '/profile-bodyguard'
                    : '/profile'
                }
                name={'Profile'}
                icon={<HiOutlineUserCircle size={20} />}
              />
            )}
            {role === 'admin' && (
              <>
                <ItemSidebarSmall
                  to="/management-admin"
                  name={'management'}
                  icon={<HiBars3CenterLeft size={20} />}
                />
                <ItemSidebarSmall
                  to="/dashboard-admin"
                  name={'dasboard'}
                  icon={<HiMiniChartPie size={20} />}
                />
              </>
            )}
            {role !== 'bodyguard' && (
              <ItemSidebarSmall
                to={
                  role === 'supervisor'
                    ? '/notifications-supervisor'
                    : '/notifications'
                }
                name={'Notifications'}
                icon={<HiOutlineBellAlert size={20} />}
              />
            )}
            {role === 'supervisor' && (
              <ItemSidebarSmall
                to="/timekeeping-supervisor"
                name={'Timekeeping'}
                icon={<HiClock size={20} />}
              />
            )}
            {role === 'admin' && (
              <ItemSidebarSmall
                to="/feedback-admin"
                name={'Feedback'}
                icon={<HiOutlineChatBubbleBottomCenterText size={20} />}
              />
            )}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default SidebarSmall;
