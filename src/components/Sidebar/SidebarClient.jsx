import React, { useState } from 'react';
import {
  HiHome,
  HiOutlineGlobeAlt,
  HiOutlineClipboardDocumentList,
  HiOutlineBellAlert,
  HiOutlineUserCircle,
  HiOutlineChatBubbleBottomCenterText,
  HiOutlineQuestionMarkCircle,
  HiMiniChartPie,
  HiOutlineCog6Tooth,
  HiCalendarDays,
  HiClock,
  HiBars3CenterLeft
} from 'react-icons/hi2';
import ItemSidebar from './ItemSidebar';

const SidebarClient = ({ role }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className=" bg-primary text-white transition-transform duration-300 ">
      <div className="relative">
        <div className="m-4  h-[calc(100vh-120px)] relative">
          <div className="mb-4 p-2  text-center">
            <p>Current Role: {role}</p>
          </div>
          <ul className="mb-4 flex flex-col gap-1  border-b pb-6">
            {role === 'admin' && (
              <>
                <li>
                  <div className=" ">
                    <div className="select-none transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-2 rounded-lg text-white hover:bg-[#607D8B]/10 active:bg-[#607D8B]/30 w-full flex gap-4 px-4 capitalize">
                      <HiBars3CenterLeft size={30} color="#fff" />
                      <button
                        className="flex text-white items-center justify-between w-full antialiased font-rob text-base leading-relaxed text-inherit font-medium capitalize"
                        onClick={() => setIsOpen(!isOpen)}
                      >
                        Management
                        <span
                          className={`${
                            isOpen ? 'rotate-180' : ''
                          } transform ease-linear duration-300`}
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth={1.5}
                            stroke="currentColor"
                            className="w-6 h-6"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="m19.5 8.25-7.5 7.5-7.5-7.5"
                            />
                          </svg>
                        </span>
                      </button>
                    </div>
                    {isOpen && (
                      <div className="flex flex-col ml-10">
                        <ItemSidebar
                          to="/admin/customer"
                          name={'Customer'}
                          icon={''}
                        />
                        <ItemSidebar
                          to="/admin/bodyguard"
                          name={'Bodyguard'}
                          icon={''}
                        />
                        <ItemSidebar
                          to="/admin/supervisor"
                          name={'Supervisor'}
                          icon={''}
                        />
                        <ItemSidebar
                          to="/admin/contract"
                          name={'Contract'}
                          icon={''}
                        />
                        <ItemSidebar to="/admin/user" name={'User'} icon={''} />
                        <ItemSidebar
                          to="/admin/registration"
                          name={'Registration'}
                          icon={''}
                        />
                      </div>
                    )}
                  </div>
                </li>
                <ItemSidebar
                  to="/dashboard"
                  name={'Dashboard'}
                  icon={<HiMiniChartPie size={20} />}
                />

                <ItemSidebar
                  to="/feedback"
                  name={'Feedback'}
                  icon={<HiOutlineChatBubbleBottomCenterText size={20} />}
                />
                <ItemSidebar
                  to="/notification"
                  name={'Notification'}
                  icon={<HiOutlineQuestionMarkCircle size={20} />}
                />
              </>
            )}

            {/* end role admin */}
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
            {role !== 'admin' && (
              <ItemSidebar
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
              <>
                <ItemSidebar
                  to="/schedule-supervisor"
                  name={'Calendar'}
                  icon={<HiCalendarDays size={20} />}
                />

                <ItemSidebar
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
              </>
            )}

            {role !== 'bodyguard' && role !== 'admin' && (
              <ItemSidebar
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
              <ItemSidebar
                to="/timekeeping-supervisor"
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
