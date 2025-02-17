import { NextPage } from 'next';
import Head from 'next/head';
import { Roboto } from 'next/font/google';
import type { AppProps } from 'next/app';
import Layout from 'components/Layout';
import { useTranslation, appWithTranslation } from 'next-i18next';
import { PersistGate } from 'redux-persist/integration/react';
import Providers from 'Providers';
import { persistor, useStore } from 'states';
import CssBaseline from '@mui/material/CssBaseline';

import 'styles/globals.css';

// eslint-disable-next-line new-cap
const roboto = Roboto({
  weight: '400',
  subsets: ['latin'],
});

function MyApp(props: AppProps) {
  const { t } = useTranslation();
  const { pageProps } = props;
  const store = useStore(pageProps.initialReduxState);

  return (
    <>
      <Providers store={store} pageProps={pageProps}>
        <PersistGate loading={null} persistor={persistor}>
          <Head>
            <title>{t('site_title')}</title>
            <link rel="shortcut icon" href="/favicon.ico" />
          </Head>
          {/* <Component {...pageProps} /> */}
          <main className={roboto.className}>
            <CssBaseline />
            <App {...props} />
          </main>
        </PersistGate>
      </Providers>
    </>
  );
}

type NextPageWithLayout = NextPage & {
  Layout?: React.FC<React.PropsWithChildren<unknown>>;
  pure?: true;
};

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

const App = ({ Component, pageProps: { ...pageProps } }: AppPropsWithLayout) => {
  if (Component.pure) {
    return <Component {...pageProps} />;
  }

  // Use the layout defined at the page level, if available
  const ComponentLayout = Component.Layout || Layout;
  return (
    <ComponentLayout>
      <Component {...pageProps} />
    </ComponentLayout>
  );
};

export default appWithTranslation(MyApp);
