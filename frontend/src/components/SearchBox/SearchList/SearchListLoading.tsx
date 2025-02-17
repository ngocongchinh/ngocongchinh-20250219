/* eslint-disable react/no-array-index-key */
import React from 'react';
import { List, ListItem, ListItemButton, Box, Skeleton } from '@mui/material';

const ROWS = 6;

const SearchListLoading = () => (
  <List sx={{ maxHeight: 446, overflowY: 'auto' }}>
    {Array.from({ length: ROWS }).map((_, rowIndex) => (
      <ListItem key={rowIndex} disablePadding>
        <ListItemButton>
          <Box display="flex" alignItems="center">
            <Skeleton variant="circular" width={30} height={30} />
            <Skeleton variant="text" width={100} height={20} sx={{ ml: 1 }} />
          </Box>
        </ListItemButton>
      </ListItem>
    ))}
  </List>
);
export default SearchListLoading;
