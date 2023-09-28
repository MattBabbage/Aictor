import React from "react";
import { useAuth0 } from "@auth0/auth0-react";

import LogoutIcon from '@mui/icons-material/Logout';
import { Box, Button } from "@mui/material";

const LogoutButton = () => {
  const { logout } = useAuth0();

  return (
    <Button variant="contained" startIcon={<LogoutIcon />} disableElevation onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}>
    Logout
</Button>
  );
};

export default LogoutButton;