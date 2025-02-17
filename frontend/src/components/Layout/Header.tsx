import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { AppBar, Toolbar, Box, Container } from '@mui/material';
import SearchBox from 'components/SearchBox';

const Header = () => (
  <AppBar
    position="static"
    sx={{
      borderBottom: '1px solid #ccc',
      backgroundColor: 'white',
      boxShadow: '0px 2px 6px rgba(0,0,0,0.06)',
      px: 0,
    }}
  >
    <Container>
      <Toolbar
        sx={{
          display: 'flex',
          py: 2,
          '@media (min-width: 0px)': { paddingRight: 0, paddingLeft: 0 },
          '@media (max-width: 640px)': { flexDirection: 'column' },
        }}
      >
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            width: 350,
            flexShrink: 0,
            '@media (max-width: 640px)': { justifyContent: 'center' },
          }}
        >
          <Link href="/" passHref>
            <Box component="a" sx={{ height: 35, display: 'inline-flex' }}>
              <Image src="/images/logo.svg" alt="Error" width={286} height={35} />
            </Box>
          </Link>
        </Box>

        <Box sx={{ flexGrow: 1, pl: 2, '@media (max-width: 640px)': { pl: 0, mt: 2 } }}>
          <SearchBox />
        </Box>
      </Toolbar>
    </Container>
  </AppBar>
);

export default React.memo(Header);
