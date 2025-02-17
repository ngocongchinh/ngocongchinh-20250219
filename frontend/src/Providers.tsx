import { Provider } from 'react-redux';
import { Store } from '@reduxjs/toolkit';

const Providers: React.FC<React.PropsWithChildren<{ store: Store; pageProps: any; children: React.ReactNode }>> = ({
  children,
  store,
}) => (
  <Provider store={store}>
    <div>{children}</div>
  </Provider>
);

export default Providers;
