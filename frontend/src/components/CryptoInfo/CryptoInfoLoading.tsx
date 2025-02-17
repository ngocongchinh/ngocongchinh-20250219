/* eslint-disable react/no-array-index-key */
import React from 'react';
import { Paper, Table, TableBody, TableRow, TableCell, Box, Skeleton } from '@mui/material';

const ROWS = 5;

const CryptoInfoLoading = () => (
  <Paper sx={{ p: 4, boxShadow: 'none' }}>
    <Box display="flex" alignItems="center" gap={1} mb={2}>
      <Skeleton variant="circular" width={40} height={40} />
      <Skeleton variant="text" width={100} height={30} sx={{ ml: 1 }} />
    </Box>
    <Skeleton variant="text" width={200} height={40} sx={{ mt: 1 }} />
    <Table sx={{ mt: 2 }}>
      <TableBody>
        {Array.from({ length: ROWS }).map((_, rowIndex) => (
          <TableRow key={rowIndex}>
            <TableCell sx={{ pl: 0 }}>
              <Skeleton variant="text" width={100} height={20} />
            </TableCell>
            <TableCell sx={{ pr: 0 }} align="right">
              <Skeleton variant="text" width={50} height={20} sx={{ display: 'inline-block' }} />
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  </Paper>
);

export default CryptoInfoLoading;
