import React, { useMemo, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useTranslation } from 'react-i18next';
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Typography,
  Box,
} from '@mui/material';
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import CryptoListLoading from './CryptoListLoading';
import { formatPrice, formatNumber } from 'utils/number';
import { useAppDispatch } from 'states';
import { getMarket, useMarket, useMarketLoading } from 'states/crypto';
import { ICoinMarketQuery, ICoinMarketData } from 'types/coinMarket';

const CryptoList: React.FC = () => {
  const { t } = useTranslation();
  const dispatch = useAppDispatch();
  const marketCoin: ICoinMarketData[] = useMarket();
  const isLoading = useMarketLoading();

  const query: ICoinMarketQuery = useMemo(
    () => ({
      vs_currency: 'usd',
      order: 'market_cap_desc',
      per_page: 100,
      page: 1,
      sparkline: true,
    }),
    [],
  );

  useEffect(() => {
    dispatch(getMarket(query));
  }, [dispatch, query]);

  if (isLoading) {
    return <CryptoListLoading />;
  }

  return (
    <>
      <TableContainer component={Paper} sx={{ overflowX: 'auto' }}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell sx={{ fontWeight: 'bold', textAlign: 'left' }}>#</TableCell>
              <TableCell sx={{ fontWeight: 'bold', textAlign: 'left' }}>{t('coin')}</TableCell>
              <TableCell sx={{ fontWeight: 'bold', textAlign: 'right' }}>{t('price')}</TableCell>
              <TableCell sx={{ fontWeight: 'bold', textAlign: 'right' }}>{t('24h_change')}</TableCell>
              <TableCell sx={{ fontWeight: 'bold', textAlign: 'right' }}>{t('24h_volume')}</TableCell>
              <TableCell sx={{ fontWeight: 'bold', textAlign: 'right' }}>{t('market_cap')}</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {marketCoin?.length > 0 &&
              marketCoin.map((item: ICoinMarketData, index: number) => (
                <TableRow
                  key={item.id}
                  sx={{
                    '&:hover': { backgroundColor: 'action.hover' },
                    backgroundColor: 'background.paper',
                  }}
                >
                  <TableCell>{index + 1}</TableCell>
                  <TableCell>
                    <Link href={`/coins/${item.id}`} passHref>
                      <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, textDecoration: 'none' }}>
                        <Image src={item.image} alt={item.name} width={24} height={24} />
                        <Typography variant="body2" fontWeight={600}>
                          {item.name}
                        </Typography>
                        <Typography variant="caption" color="text.secondary" textTransform="uppercase">
                          {item.symbol}
                        </Typography>
                      </Box>
                    </Link>
                  </TableCell>
                  <TableCell sx={{ textAlign: 'right' }}>${formatPrice(item.current_price)}</TableCell>
                  <TableCell sx={{ textAlign: 'right' }}>
                    <Box display="flex" alignItems="center" justifyContent="end">
                      {item.price_change_percentage_24h > 0 ? (
                        <ArrowDropUpIcon sx={{ color: 'var(--color-up)' }} />
                      ) : (
                        <ArrowDropDownIcon sx={{ color: 'var(--color-down)' }} />
                      )}
                      <Box
                        display="inline-block"
                        sx={{ color: item.price_change_percentage_24h > 0 ? 'var(--color-up)' : 'var(--color-down)' }}
                      >
                        {formatNumber(Math.abs(item.price_change_percentage_24h), 2)}%
                      </Box>
                    </Box>
                  </TableCell>
                  <TableCell sx={{ textAlign: 'right' }}>${formatNumber(item.total_volume)}</TableCell>
                  <TableCell sx={{ textAlign: 'right' }}>${formatNumber(item.market_cap)}</TableCell>
                </TableRow>
              ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
};

export default CryptoList;
