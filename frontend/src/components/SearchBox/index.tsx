import React from 'react';
import { Box, InputBase, Button, Paper, List, Typography, Backdrop, Tooltip } from '@mui/material';
import { useTranslation } from 'react-i18next';
import OutSides from '../OutSide';
import TrendingList from './TrendingList';
import SearchList from './SearchList';
import useSearchBox from './useSearchBox';

const SearchBox: React.FC = () => {
  const { t } = useTranslation();
  const {
    containerRef,
    inputRef,
    keyword,
    searchData,
    isLoadingSearch,
    show,
    setShow,
    onClickOutside,
    onInputSearchChange,
    onSelectCoin,
  } = useSearchBox();

  return (
    <>
      <Backdrop open={show} onClick={onClickOutside} sx={{ zIndex: 10, backgroundColor: 'rgba(0, 0, 0, 0.5)' }} />
      <Box width="100%" display="flex" justifyContent="end" ref={containerRef}>
        <OutSides onHandleClick={onClickOutside}>
          <Paper
            elevation={show ? 4 : 1}
            sx={{
              position: 'relative',
              borderRadius: show ? '8px 8px 0 0' : '8px',
              zIndex: show ? 31 : 29,
              px: 2,
              py: 1,
              border: '1px solid #ccc',
              display: 'flex',
              alignItems: 'center',
              gap: 1,
              boxShadow: 'none',
              boxSizing: 'border-box',
              width: '780px',
              '@media (max-width: 640px)': { width: '100%' },
            }}
          >
            <InputBase
              placeholder={t('enter_the_keyword')}
              value={keyword}
              onChange={onInputSearchChange}
              onFocus={() => setShow(true)}
              inputRef={inputRef}
              sx={{
                flexGrow: 1,
                fontSize: 20,
              }}
            />
            <Tooltip title="Press / to open the search box.">
              <Button
                variant="contained"
                onClick={() => inputRef.current?.focus()}
                sx={{
                  borderRadius: 2,
                  display: 'flex',
                  alignItems: 'center',
                  background: '#c3c3c3',
                  boxShadow: 'none',
                  minWidth: '50px',
                }}
              >
                /
              </Button>
            </Tooltip>
          </Paper>
          {show && (
            <Paper
              elevation={4}
              sx={{
                position: 'absolute',
                width: '780px',
                top: '100%',
                mt: '-20px',

                borderRadius: '0 0 8px 8px',
                borderTop: 'none',
                border: '1px solid #ccc',
                borderTopWidth: 0,
                backgroundColor: 'white',
                zIndex: 50,
                paddingTop: 2,
                boxShadow: 'none',
                boxSizing: 'border-box',
                '@media (max-width: 640px)': { width: '100%' },
              }}
            >
              <Box paddingX={2} paddingBottom={2}>
                {keyword ? (
                  <List>
                    <SearchList isLoading={isLoadingSearch} onSelectCoin={onSelectCoin} searchData={searchData} />
                  </List>
                ) : (
                  <>
                    <Typography variant="subtitle1" fontWeight={500}>
                      {t('trending_coin')}
                    </Typography>
                    <Box sx={{ maxHeight: 500, overflowY: 'auto' }}>
                      <TrendingList onSelectCoin={onSelectCoin} />
                    </Box>
                  </>
                )}
              </Box>
            </Paper>
          )}
        </OutSides>
      </Box>
    </>
  );
};

export default SearchBox;
