import React from 'react';
import Header from './Header';
import Footer from './Footer';
import ErrorBoundary from '../ErrorBoundary';
import { Box, Container } from '@mui/material';

type LayoutProps = {
  children: React.ReactNode;
};

const Layout: React.FC<LayoutProps> = ({ children }) => (
  <Box display="flex" flexDirection="column" minHeight="100vh">
    <Header />
    <Container component="main" sx={{ pt: 5, flexGrow: 1, minHeight: 'calc(100vh - 305px)' }}>
      <ErrorBoundary>{children}</ErrorBoundary>
    </Container>
    <Footer />
  </Box>
);

export default Layout;
