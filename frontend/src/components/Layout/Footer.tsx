import React from 'react';
import { Box, Container, Typography, Divider, Link as MuiLink } from '@mui/material';
import FacebookIcon from '@mui/icons-material/Facebook';
import XIcon from '@mui/icons-material/X';
import TelegramIcon from '@mui/icons-material/Telegram';

const DivideLine = () => <Divider orientation="vertical" flexItem sx={{ mx: 2.5 }} />;

const Footer: React.FC = () => (
  <Box component="footer" sx={{ py: 4, color: '#929292' }}>
    <Container>
      <Box sx={{ display: 'flex', justifyContent: 'space-between', gap: 10 }}>
        <Box>
          <Typography variant="h6" sx={{ fontWeight: 800, display: 'inline' }}>
            Crypto Search
          </Typography>

          <Box sx={{ mt: 2.5, display: 'flex', flexWrap: 'wrap', alignItems: 'center' }}>
            <Typography variant="body2">Address: 8, My Street, Ilassan Lekki Town, Lagos 105102</Typography>
            <DivideLine />
            <Typography variant="body2">
              Contact:{' '}
              <MuiLink href="mailto:info@cryptosearch.com" sx={{ textDecoration: 'none' }}>
                info@cryptosearch.com
              </MuiLink>
            </Typography>
          </Box>
          <Typography variant="body2" sx={{ mt: 4 }}>
            © 2025 All Rights Reserved.
          </Typography>
        </Box>

        <Box sx={{ display: 'flex', gap: 2 }}>
          <MuiLink href="https://twitter.com" target="_blank" color="inherit">
            <XIcon />
          </MuiLink>
          <MuiLink href="https://facebook.com" target="_blank" color="inherit">
            <FacebookIcon />
          </MuiLink>
          <MuiLink href="https://telegram.me" target="_blank" color="inherit">
            <TelegramIcon />
          </MuiLink>
        </Box>
      </Box>
    </Container>
  </Box>
);

export default Footer;
