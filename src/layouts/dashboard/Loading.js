import * as React from 'react';
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';
import useStyles from '../../style/styles';
import colors from '../../style/colors';

export default function CircularIndeterminate() {
  const classes = useStyles();
  return (
    <div
      style={{
        position: 'absolute', left: '50%', top: '50%',
        transform: 'translate(-50%, -50%)',
      }}
    >
      <CircularProgress size='200px' sx={{  alignItems: "center"  }} />
    </div>
     
  );
}

// 