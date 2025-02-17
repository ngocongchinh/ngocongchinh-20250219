import React, { useEffect } from 'react';
import Image from 'next/image';
import { useTranslation } from 'react-i18next';
import { useAppDispatch } from 'states';
import { getCoinDetail, useCoinDetail, useCoinDetailLoading } from 'states/coinDetail';
import { Paper, Typography, Table, TableBody, TableRow, TableCell, Box } from '@mui/material';
import CryptoInfoLoading from './CryptoInfoLoading';
import { ICoinDetail } from 'types';
import { formatPrice } from 'utils/number';

const CryptoInfo: React.FC<{ coinId: string | string[] }> = ({ coinId }) => {
  const { t } = useTranslation();
  const dispatch = useAppDispatch();
  const coinDetail: ICoinDetail = useCoinDetail();
  const isLoading = useCoinDetailLoading();

  useEffect(() => {
    dispatch(getCoinDetail(coinId));
  }, [dispatch, coinId]);

  if (isLoading) {
    return <CryptoInfoLoading />;
  }

  if (!coinDetail) return <></>;

  return (
    <Paper sx={{ p: 4, boxShadow: 'none' }}>
      <Box display="flex" alignItems="center" gap={1} mb={2}>
        <Image
          className="rounded-full"
          alt={coinDetail.name}
          width={50}
          height={50}
          src={coinDetail.image?.thumb || ''}
          style={{ width: '25px', height: '25px' }}
        />
        <Typography variant="h5" fontWeight="bold" noWrap>
          {coinDetail.name}
        </Typography>
        {/* <Typography variant="subtitle1" color="textSecondary" sx={{ lineHeight: '20px' }}>
          {coinDetail.symbol.toUpperCase()} {t('price')}
        </Typography> */}
      </Box>
      <Typography variant="h4" fontWeight="bold">
        ${formatPrice(coinDetail.market_data.current_price.usd)}
      </Typography>
      <Table sx={{ mt: 2 }}>
        <TableBody>
          {coinDetail?.market_data?.market_cap?.usd && (
            <TableRow>
              <TableCell sx={{ pl: 0 }}>Market Cap</TableCell>
              <TableCell sx={{ pr: 0 }} align="right">
                ${coinDetail.market_data.market_cap.usd.toLocaleString()}
              </TableCell>
            </TableRow>
          )}
          {coinDetail?.market_data?.total_volume?.usd && (
            <TableRow>
              <TableCell sx={{ pl: 0 }}>{t('24h_trading_volume')}</TableCell>
              <TableCell sx={{ pr: 0 }} align="right">
                ${coinDetail?.market_data?.total_volume?.usd.toLocaleString()}
              </TableCell>
            </TableRow>
          )}
          {coinDetail?.market_data?.circulating_supply && (
            <TableRow>
              <TableCell sx={{ pl: 0 }}>{t('circulating_supply')}</TableCell>
              <TableCell sx={{ pr: 0 }} align="right">
                ${coinDetail.market_data.circulating_supply.toLocaleString()}
              </TableCell>
            </TableRow>
          )}
          {coinDetail?.market_data?.total_supply && (
            <TableRow>
              <TableCell sx={{ pl: 0 }}>{t('total_supply')}</TableCell>
              <TableCell sx={{ pr: 0 }} align="right">
                ${coinDetail.market_data.total_supply.toLocaleString()}
              </TableCell>
            </TableRow>
          )}
          {coinDetail?.market_data?.max_supply && (
            <TableRow>
              <TableCell sx={{ pl: 0 }}>{t('max_supply')}</TableCell>
              <TableCell sx={{ pr: 0 }} align="right">
                ${coinDetail.market_data.max_supply.toLocaleString()}
              </TableCell>
            </TableRow>
          )}
        </TableBody>
      </Table>
    </Paper>
  );
};

export default CryptoInfo;
