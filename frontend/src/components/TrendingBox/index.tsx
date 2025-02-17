import React, { useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import _get from 'lodash/get';
import { useAppDispatch } from 'states';
import { useTranslation } from 'react-i18next';
import { Box, Typography, Paper } from '@mui/material';
import { getTrendingList, useTrending } from 'states/trending';
import { formatPrice } from 'utils/number';
import { ITrendingSearchData, ITrendingCoinItem } from 'types';

const TrendingBox: React.FC = () => {
  const { t } = useTranslation();
  const dispatch = useAppDispatch();
  const trending: ITrendingSearchData = useTrending();

  useEffect(() => {
    dispatch(getTrendingList({}));
  }, [dispatch]);

  const data = _get(trending, 'data.coins', []).slice(0, 3);

  return (
    <Paper elevation={2} sx={{ maxWidth: '92vw', minHeight: '229px', p: 2, borderRadius: 2, backgroundColor: 'white' }}>
      <Box sx={{ display: 'flex', justifyContent: 'space-between', pt: 1, mb: 1.5, px: 1 }}>
        <Typography variant="subtitle1" fontWeight={600} color="text.primary">
          {t('trending_coin')}
        </Typography>
      </Box>

      {data.length > 0 &&
        data.map(({ item }: ITrendingCoinItem) => (
          <Box
            key={item.id}
            component={Link}
            href={`/coins/${item.id}`}
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
              <Image src={item.thumb} alt={item.name} width={24} height={24} />
              <Typography variant="body2" fontWeight={600} noWrap>
                {item.name}
              </Typography>
            </Box>
            <Typography variant="body2" sx={{ textAlign: 'right', maxWidth: '50%' }}>
              ${formatPrice(item?.data.price)}
            </Typography>
          </Box>
        ))}
    </Paper>
  );
};

export default TrendingBox;
