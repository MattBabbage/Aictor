import React from "react";

import Dashboard from "@mui/icons-material/Dashboard";
import { Box, Button } from "@mui/material";
import {useNavigate} from 'react-router-dom';

const DashboardButton = () => {
  const navigate = useNavigate();

  return (
    <Button variant="contained" startIcon={<Dashboard />} disableElevation onClick={() => navigate("/dashboard") }>
    Dashboard
</Button>
  );
};

export default DashboardButton;