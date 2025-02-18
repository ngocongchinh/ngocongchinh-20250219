import { Provider } from 'react-redux';
import { Store } from '@reduxjs/toolkit';
import { ThemeProvider } from '@mui/material/styles';
import theme from './theme';

const Providers: React.FC<React.PropsWithChildren<{ store: Store; pageProps: any; children: React.ReactNode }>> = ({
  children,
  store,
}) => (
  <Provider store={store}>
    <ThemeProvider theme={theme}>
      <div>{children}</div>
    </ThemeProvider>
  </Provider>
);

export default Providers;
