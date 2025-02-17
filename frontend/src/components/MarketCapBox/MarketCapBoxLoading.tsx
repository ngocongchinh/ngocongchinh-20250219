import React from 'react';
import { Box, Paper, Skeleton } from '@mui/material';

const MarketCapBoxLoading: React.FC = () => (
  <div>
    <Paper
      elevation={2}
      sx={{
        p: 2,
        borderRadius: 2,
        minHeight: 90,
      }}
    >
      <Box sx={{ pt: 1, px: 1 }}>
        <Skeleton variant="text" width={100} height={20} />
        <Skeleton variant="rectangular" width={250} height={35} sx={{ mt: 1.5 }} />
      </Box>
    </Paper>
    <Paper
      elevation={2}
      sx={{
        p: 2,
        borderRadius: 2,
        minHeight: 90,
        mt: 2,
      }}
    >
      <Box sx={{ pt: 1, px: 1 }}>
        <Skeleton variant="text" width={100} height={20} />
        <Skeleton variant="rectangular" width={250} height={35} sx={{ mt: 1.5 }} />
      </Box>
    </Paper>
  </div>
);

export default MarketCapBoxLoading;
