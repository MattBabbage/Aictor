import React from "react";

import Home from '@mui/icons-material/Home';
import { Box, Button } from "@mui/material";
import {useNavigate} from 'react-router-dom';

const HomeButton = () => {
  const navigate = useNavigate();

  return (
    <Button variant="contained" startIcon={<Home />} disableElevation onClick={() => navigate("/home") }>
    Home
</Button>
  );
};

export default HomeButton;