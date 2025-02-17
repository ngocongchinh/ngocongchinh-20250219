import React from 'react';
import { useTranslation } from 'react-i18next';
import { Box, Typography, Paper } from '@mui/material';
import MarketCapBoxLoading from './MarketCapBoxLoading';
import _get from 'lodash/get';
import { useGlobal, useMarketLoading } from 'states/crypto';
import { formatNumber } from 'utils/number';
import { IGlobalMarketData } from 'types';

const MarketCapBox: React.FC = () => {
  const { t } = useTranslation();
  const global: IGlobalMarketData = useGlobal();
  const isLoading = useMarketLoading();
  const totalMarketCap = _get(global, 'total_market_cap.usd', 0);
  const totalTradingVolume = _get(global, 'total_volume.usd', 0);

  if (isLoading) {
    return <MarketCapBoxLoading />;
  }

  return (
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
          <Typography variant="subtitle1" fontWeight={600} color="text.primary">
            {t('total_market_cap')}
          </Typography>
          <Typography variant="body2" sx={{ mt: 0.5, fontSize: 24, fontWeight: 'bold' }}>
            ${formatNumber(totalMarketCap)}
          </Typography>
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
          <Typography variant="subtitle1" fontWeight={600} color="text.primary">
            {t('24h_trading_volume')}
          </Typography>
          <Typography variant="body2" sx={{ mt: 0.5, fontSize: 24, fontWeight: 'bold' }}>
            ${formatNumber(totalTradingVolume)}
          </Typography>
        </Box>
      </Paper>
    </div>
  );
};

export default MarketCapBox;
