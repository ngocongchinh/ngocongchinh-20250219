import React, { useEffect } from 'react';
import Image from 'next/image';
import _get from 'lodash/get';
import { useTranslation } from 'react-i18next';
import { useAppDispatch } from 'states';
import { getTrendingList, useTrending } from 'states/trending';
import { formatPrice } from 'utils/number';
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Avatar,
  Typography,
  CircularProgress,
  Box,
} from '@mui/material';
import { ITrendingSearchData, ITrendingCoinItem } from 'types';

interface ITrendingListProps {
  onSelectCoin: (item: any) => void;
}

const TrendingList: React.FC<ITrendingListProps> = ({ onSelectCoin }) => {
  const { t } = useTranslation();
  const dispatch = useAppDispatch();
  const trending: ITrendingSearchData = useTrending();

  useEffect(() => {
    dispatch(getTrendingList({}));
  }, [dispatch]);

  const data = _get(trending, 'data.coins', []);

  if (!data.length) {
    return (
      <Box display="flex" justifyContent="center" py={2}>
        <CircularProgress />
      </Box>
    );
  }

  return (
    <TableContainer component={Paper} sx={{ maxHeight: 446 }} className="small-scroll">
      <Table stickyHeader>
        <TableHead>
          <TableRow>
            <TableCell>{t('coin')}</TableCell>
            <TableCell align="right">{t('price')}</TableCell>
            <TableCell align="right">{t('24h_volume')}</TableCell>
            {/* <TableCell align="right">Market Cap</TableCell> */}
            <TableCell align="right">{t('last_7_days')}</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map(({ item }: ITrendingCoinItem) => (
            <TableRow key={item.coin_id} hover onClick={() => onSelectCoin(item)} sx={{ cursor: 'pointer' }}>
              <TableCell>
                <Box display="flex" alignItems="center">
                  <Avatar src={item.thumb} alt={item.name} sx={{ width: 25, height: 25, mr: 1 }} />
                  <Typography variant="body2" fontWeight="bold">
                    {item.name}
                  </Typography>
                  <Typography variant="caption" color="gray" sx={{ ml: 1 }}>
                    {item.symbol.toUpperCase()}
                  </Typography>
                </Box>
              </TableCell>
              <TableCell align="right">${formatPrice(item?.data?.price || 0)}</TableCell>
              <TableCell align="right">{item?.data?.total_volume}</TableCell>
              {/* <TableCell align="right">{item?.data?.market_cap}</TableCell> */}
              <TableCell align="right">
                <Image
                  src={item.data.sparkline}
                  alt={item.name}
                  width={135}
                  height={50}
                  style={{ display: 'inline-block' }}
                />
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default TrendingList;
