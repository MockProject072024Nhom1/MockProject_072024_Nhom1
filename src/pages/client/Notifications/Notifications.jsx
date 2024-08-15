import React from 'react';
import {
  HiXMark,
  HiOutlineEllipsisVertical,
  HiOutlineFunnel
} from 'react-icons/hi2';
const Notifications = () => {
  const notifications = [
    {
      id: 1,
      date: '31/07/2024',
      title: 'You have just signed the CT002 contract.',
      description: ''
    },
    {
      id: 2,
      date: '31/07/2024',
      title: 'You have just signed the CT002 contract.',
      description: ''
    },
    {
      id: 3,
      date: '31/07/2024',
      title: 'You have just signed the CT002 contract.',
      description: ''
    },
    {
      id: 4,
      date: '31/07/2024',
      title: 'You have just signed the CT002 contract.',
      description: ''
    }
  ];
  return (
    <div className=" pr-20 pl-10">
      <h2 className="font-bold text-2xl my-5">Notifications</h2>

      <div class="flex justify-center items-center gap-2 float-end ">
        <HiOutlineFunnel size={30} />
        <select
          id="filter"
          class="mt-2 block w-full rounded-md border border-gray-200 px-2 py-2 shadow-sm outline-none focus:border-blue-500 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
        >
          <option>Lastest</option>
          <option>30 days ago</option>
          <option>1 week ago</option>
        </select>
      </div>
      <div className="mt-20">
        {notifications.map((item) => (
          <div
            class="relative m-2  rounded-lg border border-gray-100 bg-white px-12 py-6 shadow-md"
            key={item.id}
          >
            <button class="absolute top-0 right-0 p-4 text-gray-400">
              <HiXMark size={20} />
            </button>
            <button class="absolute top-10 right-0 p-4 text-gray-400">
              <HiOutlineEllipsisVertical size={20} />
            </button>
            <p class="relative mb-1 text-sm font-medium">
              <span class="text-blue-500">{item.date}</span>
            </p>
            <p class="text-base text-black">{item.title}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Notifications;
