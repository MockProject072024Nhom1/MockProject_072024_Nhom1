import React from "react";
import { Button, MenuItem, Select } from "@mui/material";
import { FiFilter } from "react-icons/fi";

const Notification = () => {
  const notifications = [
    {
      date: "31/07/2024",
      message:
        "You have just been assigned the task of supervising the CT002 contract.",
    },
    {
      date: "31/07/2024",
      message:
        "You have just been assigned the task of supervising the CT002 contract.",
    },
    {
      date: "31/07/2024",
      message:
        "You have just been assigned the task of supervising the CT002 contract.",
    },
    {
      date: "31/07/2024",
      message:
        "You have just been assigned the task of supervising the CT002 contract.",
    },
  ];

  return (
    <div className="p-6 px-24 mr-14">
      <h2 className="text-2xl font-bold mb-2 mt-20">Notifications</h2>
      <div className="flex items-center justify-end mb-8">
        <FiFilter className="text-3xl" />
        <Select
          defaultValue="Latest"
          sx={{
            borderRadius: 4,
            color: "#3B82F6",
            border: "1px solid #000", 
          }}
          className="w-1/5 h-10 ml-4" 
        >
          <MenuItem value="Latest" className="text-blue-500">
            Latest
          </MenuItem>
          <MenuItem value="Oldest">Oldest</MenuItem>
        </Select>
      </div>
      <div className="space-y-8">
        {notifications.map((notification, index) => (
          <div
            key={index}
            className="border-2 border-black rounded-xl p-2 shadow flex justify-between items-start"
          >
            <div>
              <div className="text-blue-500">{notification.date}</div>
              <div className="mt-2">{notification.message}</div>
            </div>
            <Button
              sx={{
                bgcolor: "white",
                border: "2px solid",
                borderColor: "black",
                borderRadius: "50%",
                padding: "2px",
                minWidth: "23px",
                minHeight: "20px",
                "&:hover": {
                  bgcolor: "gray.100",
                },
              }}
              variant="text"
            >
              <span className="text-black text-xs">✖</span>
            </Button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Notification;
