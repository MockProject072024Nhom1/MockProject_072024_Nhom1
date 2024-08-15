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
import ItemSidebar from './ItemSidebar';

const SidebarClient = ({ role }) => {
  // const [role, setRole] = useState('bodyguard');

  return (
    <div className=" bg-primary text-white transition-transform duration-300 ">
      <div className="relative">
        <div className="m-4  h-[calc(100vh-120px)] relative">
          <div className="mb-4 p-2  text-center">
            <p>Current Role: {role}</p>
          </div>
          <ul className="mb-4 flex flex-col gap-1  border-b pb-6">
            {role === 'client' && (
              <>
                <ItemSidebar to="/" name={'home'} icon={<HiHome size={20} />} />
                <ItemSidebar
                  to="/services"
                  name={'Services'}
                  icon={<HiOutlineGlobeAlt size={20} />}
                />
              </>
            )}
            <ItemSidebar
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
              <>
                <ItemSidebar
                  to="/calendar-bodyguard"
                  name={'Calendar'}
                  icon={<HiCalendarDays size={20} />}
                />

                <ItemSidebar
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
              </>
            )}

            {role !== 'bodyguard' && (
              <ItemSidebar
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
              <ItemSidebar
                to="/timekeeping"
                name={'Timekeeping'}
                icon={<HiClock ineGlobeAlt size={20} />}
              />
            )}
          </ul>

          {/* if is client -> display this */}
          {role === 'client' && (
            <ul className="mb-4 flex flex-col gap-1">
              <ItemSidebar
                to="/profile"
                name={'Profile'}
                icon={<HiOutlineUserCircle size={20} />}
              />

              <ItemSidebar
                to="/feedback"
                name={'Feedback'}
                icon={<HiOutlineChatBubbleBottomCenterText size={20} />}
              />
              <ItemSidebar
                to="/support"
                name={'Support'}
                icon={<HiOutlineQuestionMarkCircle size={20} />}
              />
              <ItemSidebar
                to="/setting"
                name={'Setting'}
                icon={<HiOutlineCog6Tooth size={20} />}
              />
            </ul>
          )}
        </div>
      </div>
    </div>
  );
};

export default SidebarClient;
