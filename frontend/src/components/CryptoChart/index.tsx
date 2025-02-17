import React, { useState, useEffect } from 'react';
import PriceChart from 'components/PriceChart';
import OhlcChart from 'components/OhlcChart';
import { ChartType, TimeRange } from 'types';
import { TIME_RANGES, CHART_TYPES } from './const';
import { ToggleButton, ToggleButtonGroup, Box, Paper } from '@mui/material';

interface ICryptoChart {
  coinId: string | string[];
}

const CryptoChart: React.FC<ICryptoChart> = ({ coinId }) => {
  const [chartType, setChartType] = useState<ChartType>(ChartType.Price);
  const [timeRange, setTimeRange] = useState<TimeRange>(TimeRange['1D']);

  useEffect(() => {
    if (coinId) {
      setChartType(ChartType.Price);
      setTimeRange(TimeRange['1D']);
    }
  }, [coinId]);

  return (
    <Paper sx={{ p: 4, boxShadow: 'none' }}>
      <Box display="flex" justifyContent="space-between" mb={2}>
        <ToggleButtonGroup value={chartType} exclusive onChange={(_, value) => value && setChartType(value)}>
          {CHART_TYPES.map((item) => (
            <ToggleButton key={item.value} value={item.value}>
              {item.name}
            </ToggleButton>
          ))}
        </ToggleButtonGroup>
        <ToggleButtonGroup value={timeRange} exclusive onChange={(_, value) => value && setTimeRange(value)}>
          {TIME_RANGES.map((item) => (
            <ToggleButton key={item.value} value={item.value}>
              {item.name}
            </ToggleButton>
          ))}
        </ToggleButtonGroup>
      </Box>
      {chartType === ChartType.Price && <PriceChart coinId={coinId} timeRange={timeRange} />}
      {chartType === ChartType.OHLC && <OhlcChart coinId={coinId} timeRange={timeRange} />}
    </Paper>
  );
};

export default CryptoChart;
