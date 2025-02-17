/* eslint-disable react/no-array-index-key */
import React from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Skeleton } from '@mui/material';

const ROWS = 6;
const COLUMS = 6;

const CryptoListLoading: React.FC = () => (
  <TableContainer component={Paper}>
    <Table>
      <TableHead>
        <TableRow>
          {Array.from({ length: COLUMS }).map((_, index) => (
            <TableCell key={index}>
              <Skeleton variant="text" width={100} height={20} />
            </TableCell>
          ))}
        </TableRow>
      </TableHead>
      <TableBody>
        {Array.from({ length: ROWS }).map((_, rowIndex) => (
          <TableRow key={rowIndex}>
            {Array.from({ length: COLUMS }).map((_, colIndex) => (
              <TableCell key={colIndex}>
                <Skeleton variant="rectangular" width="100%" height={30} />
              </TableCell>
            ))}
          </TableRow>
        ))}
      </TableBody>
    </Table>
  </TableContainer>
);

export default CryptoListLoading;
