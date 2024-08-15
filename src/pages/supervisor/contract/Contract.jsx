import React, { useState } from "react";
import TableContract from "./TableContract";
import { TextField, Button } from "@mui/material";

const Contract = () => {
  const [supervisor, setSupervisor] = useState({
    contractId: "CT64134",
    service: "Private Security",
    vanue: "1st Hilton Street",
    staff: "Team 1 - Private Security",
    quantity: "10",
    date: "1/1/2025",
    cost: "4000",
    paymentStatus: "30% Prepayment",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setSupervisor({ ...supervisor, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic
    console.log(supervisor);
  };

  return (
    <div className="flex-1 pr-10 bg-white">
      <h2 className="text-lg font-bold mb-4 mt-24">Contracts (1)</h2>
      <div className="min-w-96 px-6 py-2 bg-white rounded-lg overflow-hidden">
        <TableContract />
      </div>

      <h3 className="text-lg font-bold mt-8">Detail Of Contract</h3>
      <form
        className="bg-white rounded w-full max-w-full px-8 py-4"
        onSubmit={handleSubmit}
      >
        <div className="flex gap-4">
          <div className="w-11/12">
            <div className="mt-4 flex gap-4">
              <div className="flex flex-col w-4/6 pl-8">
                <label className="text-sm font-medium mb-1">Contract ID</label>
                <TextField
                  name="contractId"
                  variant="outlined"
                  size="small"
                  fullWidth
                  value={supervisor.contractId}
                  onChange={handleChange}
                  InputProps={{
                    style: {
                      backgroundColor: "#D3D3D3",
                      border: "2px solid black",
                    },
                  }}
                />
              </div>
              <div className="flex flex-col w-4/6 pl-4 ml-20">
                <label className="text-sm font-medium mb-1">Service</label>
                <TextField
                  name="service"
                  variant="outlined"
                  size="small"
                  fullWidth
                  value={supervisor.service}
                  onChange={handleChange}
                  InputProps={{
                    style: {
                      backgroundColor: "#D3D3D3",
                      border: "2px solid black",
                    },
                  }}
                />
              </div>
            </div>

            <div className="mt-4 flex gap-4">
              <div className="flex flex-col w-4/6 pl-8">
                <label className="text-sm font-medium mb-1">Vanue</label>
                <TextField
                  name="vanue"
                  variant="outlined"
                  size="small"
                  fullWidth
                  value={supervisor.vanue}
                  onChange={handleChange}
                  InputProps={{
                    style: {
                      backgroundColor: "#D3D3D3",
                      border: "2px solid black",
                    },
                  }}
                />
              </div>
              <div className="flex flex-col w-4/6 pl-4 ml-20">
                <label className="text-sm font-medium mb-1">Staff</label>
                <TextField
                  name="staff"
                  variant="outlined"
                  size="small"
                  fullWidth
                  value={supervisor.staff}
                  onChange={handleChange}
                  InputProps={{
                    style: {
                      backgroundColor: "#D3D3D3",
                      border: "2px solid black",
                    },
                  }}
                />
              </div>
            </div>

            <div className="mt-4 flex gap-4">
              <div className="flex flex-col w-4/6 pl-8">
                <label className="text-sm font-medium mb-1">
                  Quantity total
                </label>
                <TextField
                  name="quantity"
                  variant="outlined"
                  size="small"
                  fullWidth
                  value={supervisor.quantity}
                  onChange={handleChange}
                  InputProps={{
                    style: {
                      backgroundColor: "#D3D3D3",
                      border: "2px solid black",
                    },
                  }}
                />
              </div>
              <div className="flex flex-col w-4/6 pl-4 ml-20">
                <label className="text-sm font-medium mb-1">
                  On-going Date
                </label>
                <TextField
                  name="date"
                  variant="outlined"
                  size="small"
                  fullWidth
                  value={supervisor.date}
                  onChange={handleChange}
                  InputProps={{
                    style: {
                      backgroundColor: "#D3D3D3",
                      border: "2px solid black",
                    },
                  }}
                />
              </div>
            </div>

            <div className="mt-4 flex gap-4">
              <div className="flex flex-col w-4/6 pl-8">
                <label className="text-sm font-medium mb-1">
                  Contract Cost
                </label>
                <TextField
                  name="cost"
                  variant="outlined"
                  size="small"
                  fullWidth
                  value={supervisor.cost}
                  onChange={handleChange}
                  InputProps={{
                    style: {
                      backgroundColor: "#D3D3D3",
                      border: "2px solid black",
                    },
                  }}
                />
              </div>
              <div className="flex flex-col w-4/6 pl-4 ml-20 mb-4">
                <label className="text-sm font-medium mb-1">
                  Payment Status
                </label>
                <TextField
                  name="paymentStatus"
                  variant="outlined"
                  size="small"
                  fullWidth
                  value={supervisor.paymentStatus}
                  onChange={handleChange}
                  InputProps={{
                    style: {
                      backgroundColor: "#D3D3D3",
                      border: "2px solid black",
                    },
                  }}
                />
              </div>
            </div>
          </div>
        </div>

        <div className="flex justify-end my-4 mr-24">
          <Button
            type="submit"
            variant="contained"
            sx={{ color: "#fff", backgroundColor: "#000" }}
            className="bg-black text-white py-2 px-4 rounded-lg"
          >
            Schedule
          </Button>
        </div>
      </form>
    </div>
  );
};

export default Contract;
