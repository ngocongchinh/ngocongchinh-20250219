import React from 'react';
import type { GetServerSideProps } from 'next';
import { useRouter } from 'next/router';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import ClientSideRender from 'components/ClientSideRender';
import CryptoInfo from 'components/CryptoInfo';
import CryptoChart from 'components/CryptoChart';
import { Paper, Grid, Box, Typography } from '@mui/material';

const CoinDetailPage = () => {
  const router = useRouter();
  const { id } = router.query;

  return (
    <ClientSideRender>
      <Paper elevation={3} sx={{ p: 0, backgroundColor: 'white' }}>
        {id ? (
          <Grid container>
            <Grid item xs={12} md={4} sx={{ borderRight: 1, borderColor: 'grey.200' }}>
              <CryptoInfo coinId={id} />
            </Grid>
            <Grid item xs={12} md={8}>
              <CryptoChart coinId={id} />
            </Grid>
          </Grid>
        ) : (
          <Box display="flex" justifyContent="center" alignItems="center" minHeight={200}>
            <Typography variant="h6">Loading...</Typography>
          </Box>
        )}
      </Paper>
    </ClientSideRender>
  );
};

export const getServerSideProps: GetServerSideProps = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale as string, ['common'])),
  },
});

export default CoinDetailPage;
