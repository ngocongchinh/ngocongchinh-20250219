import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Box, Typography, Paper } from '@mui/material';
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import { useMarket } from 'states/crypto';
import { formatPrice, formatNumber } from 'utils/number';
import { useTranslation } from 'react-i18next';
import { ICoinMarketData } from 'types/coinMarket';

const TopGainerBox: React.FC = () => {
  const { t } = useTranslation();
  const marketCoin: ICoinMarketData[] = useMarket();
  let topGainer: ICoinMarketData[] = [];

  if (marketCoin && marketCoin?.length) {
    topGainer = [...marketCoin]
      .sort((a, b) => b.price_change_percentage_24h - a.price_change_percentage_24h)
      .slice(0, 3);
  }

  return (
    <Paper
      elevation={2}
      sx={{
        maxWidth: '92vw',
        minHeight: '229px',
        p: 2,
        borderRadius: 2,
        backgroundColor: 'white',
      }}
    >
      {/* Title */}
      <Box sx={{ display: 'flex', justifyContent: 'space-between', pt: 1.5, mb: 1.5, px: 1 }}>
        <Typography variant="subtitle1" fontWeight={600} color="text.primary">
          {t('top_gainers')}
        </Typography>
      </Box>

      {/* Top Gainer List */}
      {topGainer.length > 0 &&
        topGainer.map((item: ICoinMarketData) => (
          <Box
            key={item?.id}
            component={Link}
            href={`/coins/${item?.id}`}
            sx={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              px: 1,
              py: 1.5,
              borderRadius: 1,
              textDecoration: 'none',
              '&:hover': { backgroundColor: 'grey.100' },
            }}
          >
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, maxWidth: '50%' }}>
              <Image src={item?.image} alt={item?.name} width={24} height={24} />
              <Typography variant="body2" fontWeight={600} noWrap>
                {item?.name}
              </Typography>
            </Box>
            <Box display="flex" alignItems="center" justifyContent="end">
              ${formatPrice(item?.current_price || 0)}
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
            {/* <Typography variant="body2" sx={{ textAlign: 'right', maxWidth: '50%' }}>
              ${formatPrice(item?.current_price || 0)}
            </Typography> */}
          </Box>
        ))}
    </Paper>
  );
};

export default TopGainerBox;
