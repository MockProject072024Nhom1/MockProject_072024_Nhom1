import React from "react";
import {
  Box,
  Card,
  CardContent,
  Typography,
  Grid,
  Button,
} from "@mui/material";
import {
  BarChart,
  Bar,
  PieChart,
  Pie,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  LineChart,
  Line,
  Legend,
  ResponsiveContainer,
} from "recharts";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import BarChartIcon from "@mui/icons-material/BarChart";
import GroupIcon from "@mui/icons-material/Group";
import PieChartIcon from "@mui/icons-material/PieChart";
import TrendingUpIcon from "@mui/icons-material/TrendingUp";

const dataBar = [
  { name: "January", value: 5 },
  { name: "February", value: 70 },
  { name: "March", value: 25 },
  { name: "April", value: 15 },
  { name: "May", value: 30 },
  { name: "June", value: 30 },
  { name: "July", value: 30 },
  { name: "August", value: 30 },
  { name: "September", value: 30 },
  { name: "October", value: 30 },
  { name: "November", value: 30 },
  { name: "December", value: 30 },
];

const dataLine = [
  { name: "Week 1", thisMonth: 200, lastMonth: 300 },
  { name: "Week 2", thisMonth: 100, lastMonth: 200 },
  { name: "Week 3", thisMonth: 300, lastMonth: 100 },
  { name: "Week 4", thisMonth: 250, lastMonth: 150 },
];

const dataPie = [
  { name: "abc", value: 400 },
  { name: "abc", value: 300 },
  { name: "abc", value: 300 },
  { name: "abc", value: 200 },
];

const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"];

const Dashboard = () => {
  return (
    <Box>
      <Box sx={{ display: "flex", justifyContent: "flex-end" }}>
        <Button
          variant="contained"
          color="success"
          sx={{
            borderRadius: "4px",
            width: "170px",
            height: "60px",
            mb: 4,
            fontSize: "16px",
            backgroundColor: "#28a745",
          }}
        >
          CREATE REPORT
        </Button>
      </Box>

      <Grid
        container
        spacing={4}
        sx={{ display: "flex", alignItems: "center", justifyContent: "center" }}
      >
        {/* Information Cards */}
        <Grid item xs={2.5}>
          <Card
            sx={{
              backgroundColor: "#17a2b8",
              color: "#fff",
              borderRadius: "4px",
            }}
          >
            <CardContent>
              <Typography variant="h4" component="div" width="100%">
                <ShoppingCartIcon sx={{ fontSize: 40 }} /> 820
              </Typography>
              <Typography>Total Products</Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={2.5}>
          <Card
            sx={{
              backgroundColor: "#28a745",
              color: "#fff",
              borderRadius: "4px",
            }}
          >
            <CardContent>
              <Typography variant="h5" component="div">
                <BarChartIcon sx={{ fontSize: 40 }} /> 1000
              </Typography>
              <Typography>Total Auction</Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={2.5}>
          <Card
            sx={{
              backgroundColor: "#ffc107",
              color: "#fff",
              borderRadius: "4px",
            }}
          >
            <CardContent>
              <Typography variant="h5" component="div">
                <GroupIcon sx={{ fontSize: 40 }} /> 250
              </Typography>
              <Typography>Members</Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={2.5}>
          <Card
            sx={{
              backgroundColor: "#dc3545",
              color: "#fff",
              borderRadius: "4px",
            }}
          >
            <CardContent>
              <Typography variant="h5" component="div">
                <PieChartIcon sx={{ fontSize: 40 }} /> 200
              </Typography>
              <Typography>Stock</Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>

      <Box mt={4}>
        {/* Bar Chart */}
        <Card sx={{ borderRadius: "8px", padding: 2 }}>
          <Typography variant="h6" component="div" sx={{ marginBottom: 2 }}>
            Revenue
          </Typography>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={dataBar}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Bar dataKey="value" fill="#17a2b8" />
            </BarChart>
          </ResponsiveContainer>
        </Card>
      </Box>

      <Grid container spacing={4} mt={4}>
        <Grid item xs={7}>
          {/* Line Chart */}
          <Card sx={{ borderRadius: "8px", padding: 2 }}>
            <Typography variant="h6" component="div" sx={{ marginBottom: 2 }}>
              New Register
            </Typography>
            {/* Thanh ngang nhạt */}
            <Box
              sx={{ height: 1.1, backgroundColor: "#cccccc", marginBottom: 2 }}
            />
            <Grid container>
              <Grid item xs={10}>
                <ResponsiveContainer width="100%" height={300}>
                  <LineChart data={dataLine}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Line
                      type="monotone"
                      dataKey="thisMonth"
                      stroke="#17a2b8"
                    />
                    <Line
                      type="monotone"
                      dataKey="lastMonth"
                      stroke="#cccccc"
                    />
                  </LineChart>
                </ResponsiveContainer>
              </Grid>
              <Grid item xs={2}>
                {/* Legend và thông tin */}
                <Box sx={{ paddingTop: 4, marginLeft: 2 }}>
                  <Box sx={{ display: "flex", alignItems: "center", mb: 2 }}>
                    <Box
                      sx={{
                        width: 10,
                        height: 10,
                        backgroundColor: "#17a2b8",
                        borderRadius: "50%",
                        mr: 1,
                      }}
                    />
                    <Typography sx={{ color: "#17a2b8", fontSize: 12 }}>
                      This month
                    </Typography>
                  </Box>
                  <Box sx={{ display: "flex", alignItems: "center", mb: 2 }}>
                    <Box
                      sx={{
                        width: 10,
                        height: 10,
                        backgroundColor: "#cccccc",
                        borderRadius: "50%",
                        mr: 1,
                      }}
                    />
                    <Typography sx={{ color: "#cccccc", fontSize: 12 }}>
                      Last month
                    </Typography>
                  </Box>
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      mt: 4,
                      flexDirection: "column",
                    }}
                  >
                    <Box sx={{ display: "flex", alignItems: "center", mb: 1 }}>
                      <TrendingUpIcon
                        sx={{ color: "#28a745", fontSize: 16, mr: 1 }}
                      />
                      <Typography sx={{ color: "#28a745", fontSize: 18 }}>
                        8%
                      </Typography>
                    </Box>
                    <Typography sx={{ color: "#28a745", fontSize: 10.5 }}>
                      Since last month
                    </Typography>
                  </Box>
                </Box>
              </Grid>
            </Grid>
          </Card>
        </Grid>
        <Grid item xs={5}>
          {/* Pie Chart */}
          <Card sx={{ borderRadius: "8px", padding: 2, position: "relative" }}>
            <Typography variant="h6" component="div" sx={{ marginBottom: 2 }}>
              Total by abc
            </Typography>
            {/* Thanh ngang nhạt */}
            <Box
              sx={{ height: 1.1, backgroundColor: "#cccccc", marginBottom: 2 }}
            />
            <ResponsiveContainer width="100%" height={300}>
              <PieChart>
                <Pie
                  data={dataPie}
                  cx="50%"
                  cy="50%"
                  innerRadius={40} // Giảm innerRadius để tạo lỗ nhỏ hơn
                  outerRadius={80}
                  fill="#8884d8"
                  dataKey="value"
                  label={({ percent }) => `${(percent * 100).toFixed(1)}%`} // Hiển thị % trên các phân đoạn
                >
                  {dataPie.map((entry, index) => (
                    <Cell
                      key={`cell-${index}`}
                      fill={COLORS[index % COLORS.length]}
                    />
                  ))}
                </Pie>
              </PieChart>
            </ResponsiveContainer>
            <Box
              sx={{
                position: "absolute",
                top: "50%",
                right: 10,
                transform: "translateY(-50%)",
                display: "flex",
                flexDirection: "column",
              }}
            >
              {dataPie.map((entry, index) => (
                <Box
                  key={`legend-${index}`}
                  sx={{ display: "flex", alignItems: "center", mb: 1 }}
                >
                  <Box
                    sx={{
                      width: 10,
                      height: 10,
                      backgroundColor: COLORS[index % COLORS.length],
                      borderRadius: "50%",
                      mr: 1,
                    }}
                  />
                  <Typography sx={{ fontSize: 12, color: "#333" }}>
                    {entry.name}
                  </Typography>
                </Box>
              ))}
            </Box>
          </Card>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Dashboard;
