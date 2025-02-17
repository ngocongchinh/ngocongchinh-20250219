import React, { useEffect } from 'react';
import type { GetServerSideProps } from 'next';
import { useTranslation } from 'react-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { Box, Typography, Grid } from '@mui/material';
import ClientSideRender from 'components/ClientSideRender';
import CryptoList from 'components/CryptoList';
import TopGainerBox from 'components/TopGainerBox';
import TrendingBox from 'components/TrendingBox';
import MarketCapBox from 'components/MarketCapBox';
import { useAppDispatch } from 'states';
import { getGlobal } from 'states/crypto';

const HomePage = () => {
  const { t } = useTranslation();
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getGlobal({}));
  }, [dispatch]);

  return (
    <ClientSideRender>
      <Box>
        <Typography variant="h5" sx={{ mb: 2, fontWeight: { xs: 600, md: 700 }, color: 'grey.900' }}>
          {t('top_100_market_cap')}
        </Typography>
        <Grid container spacing={2} sx={{ pb: 4, mt: 2 }}>
          <Grid item xs={12} md={4}>
            <MarketCapBox />
          </Grid>
          <Grid item xs={12} md={4}>
            <TrendingBox />
          </Grid>
          <Grid item xs={12} md={4}>
            <TopGainerBox />
          </Grid>
        </Grid>
        <Box sx={{ mt: 2, p: 0 }}>
          <CryptoList />
        </Box>
      </Box>
    </ClientSideRender>
  );
};

export const getServerSideProps: GetServerSideProps = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale as string, ['common'])),
  },
});

export default HomePage;
