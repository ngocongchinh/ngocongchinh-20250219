import React from 'react';
import _get from 'lodash/get';
import { List, ListItem, ListItemButton, Avatar, Box, Typography } from '@mui/material';
import SearchListLoading from './SearchListLoading';
import { ISearchCoin } from 'types';

interface ISearchListProps {
  isLoading: boolean;
  searchData: any;
  onSelectCoin: (item: any) => void;
}

const SearchList: React.FC<ISearchListProps> = ({ isLoading, searchData, onSelectCoin }) => {
  const data: ISearchCoin[] = _get(searchData, 'coins', []);

  if (isLoading) {
    return <SearchListLoading />;
  }

  if (!data?.length) {
    return (
      <Box display="flex" justifyContent="center" py={2}>
        Result Not Found
      </Box>
    );
  }

  return (
    <List sx={{ maxHeight: 446, overflowY: 'auto' }}>
      {!!data?.length &&
        data.map((item: ISearchCoin) => (
          <ListItem key={item.id} disablePadding>
            <ListItemButton onClick={() => onSelectCoin(item)}>
              <Box display="flex" alignItems="center">
                <Avatar src={item.thumb} alt={item.name} sx={{ width: 25, height: 25, mr: 1 }} />
                <Typography variant="body2" fontWeight="bold">
                  {item.name}
                </Typography>
                <Typography variant="caption" color="gray" sx={{ ml: 1 }}>
                  {item.symbol.toUpperCase()}
                </Typography>
              </Box>
            </ListItemButton>
          </ListItem>
        ))}
    </List>
  );
};
export default SearchList;
