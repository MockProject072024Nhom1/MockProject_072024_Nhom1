import React from 'react';
import {
  Box,
  Card,
  Typography,
  Grid,
  Button,
  TextField,
  MenuItem
} from '@mui/material';
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
  ResponsiveContainer
} from 'recharts';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import BarChartIcon from '@mui/icons-material/BarChart';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import { PiChartLineFill } from 'react-icons/pi';
import GridCard from './GridCard';

const dataBar = [
  { name: 'January', value: 5 },
  { name: 'February', value: 70 },
  { name: 'March', value: 25 },
  { name: 'April', value: 15 },
  { name: 'May', value: 30 },
  { name: 'June', value: 30 },
  { name: 'July', value: 30 },
  { name: 'August', value: 30 },
  { name: 'September', value: 30 },
  { name: 'October', value: 30 },
  { name: 'November', value: 30 },
  { name: 'December', value: 30 }
];

const dataLine = [
  { name: 'Week 1', thisMonth: 200, lastMonth: 300 },
  { name: 'Week 2', thisMonth: 100, lastMonth: 200 },
  { name: 'Week 3', thisMonth: 300, lastMonth: 100 },
  { name: 'Week 4', thisMonth: 250, lastMonth: 150 }
];

const dataPie = [
  { name: 'abc', value: 400 },
  { name: 'abc', value: 300 },
  { name: 'abc', value: 300 },
  { name: 'abc', value: 200 }
];

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

const Dashboard = () => {
  return (
    <Box sx={{ marginTop: '50px', padding: 4 }}>
      <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
        <Button
          variant="contained"
          color="success"
          sx={{
            borderRadius: '4px',
            width: '170px',
            height: '60px',
            mb: 4,
            fontSize: '16px',
            backgroundColor: '#28a745'
          }}
        >
          CREATE REPORT
        </Button>
      </Box>

      <Grid
        container
        spacing={4}
        sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}
      >
        {/* Information Cards */}

        <GridCard
          icon={<ShoppingCartIcon size={40} />}
          color="#17a2b8"
          number="820"
          name="Total Products"
        />
        <GridCard
          icon={<BarChartIcon size={40} />}
          color="#28a745"
          number="1000"
          name="Total Auction"
        />
        <GridCard
          icon={<ShoppingCartIcon size={40} />}
          color="#ffc107"
          number="820"
          name="Members"
        />
        <GridCard
          icon={<ShoppingCartIcon size={40} />}
          color="#dc3545"
          number="820"
          name="Stocks"
        />
      </Grid>

      <Box mt={4}>
        <Card sx={{ borderRadius: '8px' }}>
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              padding: 2,
              height: '60px'
            }}
          >
            <Typography
              sx={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                padding: 2
              }}
              variant="h6"
              component="div"
            >
              <PiChartLineFill className="mr-2" /> Revenue
            </Typography>
            <TextField
              select
              variant="outlined"
              size="small"
              sx={{ width: 160, height: 40, fontWeight: 'bold' }}
            >
              <MenuItem value="2024">2024</MenuItem>
              <MenuItem value="2023">2023</MenuItem>
            </TextField>
          </Box>

          <Box
            sx={{
              height: 1.1,
              backgroundColor: '#cccccc',
              marginBottom: 2,
              padding: 'none'
            }}
          />
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'space-between',
              height: '400px'
            }}
          >
            <Box sx={{ flex: '0 0 16%', textAlign: 'center', height: '400px' }}>
              <Typography
                variant="h5"
                sx={{ marginBottom: 1, fontWeight: 'bold' }}
              >
                $820,000
              </Typography>
              <Box
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  mt: 4,
                  flexDirection: 'column',
                  height: '100%'
                }}
              >
                <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
                  <TrendingUpIcon
                    sx={{ color: '#28a745', fontSize: 20, mr: 1 }}
                  />
                  <Typography sx={{ color: '#28a745', fontSize: 22 }}>
                    8%
                  </Typography>
                </Box>
                <Typography sx={{ fontSize: 14 }}>Since last year</Typography>
              </Box>
            </Box>

            {/* Div d */}
            <Box sx={{ flex: '0 0 80%', textAlign: 'left', height: '400px' }}>
              <Typography variant="h6" sx={{ marginBottom: 1, marginLeft: 4 }}>
                $K
              </Typography>
              <ResponsiveContainer width="100%" height={300}>
                <BarChart data={dataBar} height={200}>
                  <CartesianGrid strokeDasharray="3 3" height={200} />
                  <XAxis
                    dataKey="name"
                    angle={-25}
                    textAnchor="middle"
                    interval={0}
                    tick={{
                      fontSize: 12,
                      marginTop: '4px',
                      fontWeight: 'bold',
                      style: { overflow: 'visible' }
                    }}
                  />
                  <YAxis />
                  <Tooltip />
                  <Bar dataKey="value" fill="#17a2b8" barSize={40} />
                </BarChart>
              </ResponsiveContainer>
            </Box>
            <Box sx={{ flex: '0 0 4%' }}></Box>
          </Box>
        </Card>
      </Box>

      <Grid container spacing={4} mt={4}>
        <Grid item xs={7}>
          {/* Line Chart */}
          <Card sx={{ borderRadius: '8px', padding: 1 }}>
            <Typography variant="h6" component="div" sx={{ marginBottom: 2 }}>
              New Register
            </Typography>
            <Box
              sx={{
                height: 1.1,
                backgroundColor: '#cccccc',
                marginBottom: 2,
                padding: 'none'
              }}
            />
            <Grid container>
              <Grid item xs={10}>
                <ResponsiveContainer width="100%" height={315}>
                  <LineChart data={dataLine}>
                    <CartesianGrid
                      vertical={false}
                      stroke="#ccc"
                      strokeWidth={2}
                    />
                    <XAxis dataKey="name" />
                    <YAxis
                      domain={[0, 400]}
                      ticks={[0, 100, 200, 300, 400]}
                      tickLine={false}
                      axisLine={false}
                      interval={0}
                    />
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
                <Box sx={{ paddingTop: 4, marginLeft: 2 }}>
                  <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                    <Box
                      sx={{
                        width: 10,
                        height: 10,
                        backgroundColor: '#17a2b8',
                        borderRadius: '50%',
                        mr: 1
                      }}
                    />
                    <Typography sx={{ color: '#17a2b8', fontSize: 12 }}>
                      This month
                    </Typography>
                  </Box>
                  <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                    <Box
                      sx={{
                        width: 10,
                        height: 10,
                        backgroundColor: '#cccccc',
                        borderRadius: '50%',
                        mr: 1
                      }}
                    />
                    <Typography sx={{ color: '#cccccc', fontSize: 12 }}>
                      Last month
                    </Typography>
                  </Box>
                  <Box
                    sx={{
                      display: 'flex',
                      alignItems: 'center',
                      mt: 4,
                      flexDirection: 'column'
                    }}
                  >
                    <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
                      <TrendingUpIcon
                        sx={{ color: '#28a745', fontSize: 16, mr: 1 }}
                      />
                      <Typography sx={{ color: '#28a745', fontSize: 18 }}>
                        8%
                      </Typography>
                    </Box>
                    <Typography sx={{ color: '#28a745', fontSize: 10.5 }}>
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
          <Card sx={{ borderRadius: '8px', padding: 2, position: 'relative' }}>
            <Typography variant="h6" component="div" sx={{ marginBottom: 2 }}>
              Total by abc
            </Typography>
            <Box
              sx={{
                height: 1.1,
                backgroundColor: '#cccccc',
                marginBottom: 2,
                padding: 'none'
              }}
            />
            <ResponsiveContainer width="100%" height={300}>
              <PieChart>
                <Pie
                  data={dataPie}
                  cx="50%"
                  cy="50%"
                  innerRadius={40}
                  outerRadius={80}
                  fill="#8884d8"
                  dataKey="value"
                  label={({ percent }) => `${(percent * 100).toFixed(1)}%`}
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
                position: 'absolute',
                top: '50%',
                right: 10,
                transform: 'translateY(-50%)',
                display: 'flex',
                flexDirection: 'column'
              }}
            >
              {dataPie.map((entry, index) => (
                <Box
                  key={`legend-${index}`}
                  sx={{ display: 'flex', alignItems: 'center', mb: 1 }}
                >
                  <Box
                    sx={{
                      width: 10,
                      height: 10,
                      backgroundColor: COLORS[index % COLORS.length],
                      borderRadius: '50%',
                      mr: 1
                    }}
                  />
                  <Typography sx={{ fontSize: 12, color: '#333' }}>
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
