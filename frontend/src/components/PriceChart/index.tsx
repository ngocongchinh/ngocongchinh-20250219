'use client';
import React, { useEffect, useState, useCallback } from 'react';
import { CircularProgress, Box } from '@mui/material';
import HighchartsReact from 'highcharts-react-official';
import Highcharts from 'highcharts';
import { useAppDispatch } from 'states';
import { getCoinMarketChart, useMarketChart } from 'states/marketChart';
import { resetOhlcChart } from 'states/ohlc';
import { useCoinDetail } from 'states/coinDetail';
import { formatNumberShort } from 'utils/number';
import { IMarketChartData, IMarketDataPoint, ICoinDetail, TimeRange } from 'types';

const loadHighchartsModules = async (callback: any) => {
  Promise.all([
    import('highcharts/modules/map'),
    import('highcharts/modules/stock'),
    import('highcharts/modules/exporting'),
    import('highcharts/modules/accessibility'),
  ]).then(callback);
};

interface IPriceChart {
  coinId: string | string[];
  timeRange: TimeRange | string;
}

const PriceChart: React.FC<IPriceChart> = ({ coinId, timeRange }) => {
  const [options, setOptions] = useState<Highcharts.Options | null>(null);
  const [isLoading, setLoading] = useState(true);

  const dispatch = useAppDispatch();
  const marketChart: IMarketChartData = useMarketChart();
  const coinDetail: ICoinDetail = useCoinDetail();

  const fetchPriceChart = useCallback(
    (filter: any) => {
      dispatch(getCoinMarketChart(filter));
    },
    [dispatch],
  );

  useEffect(() => {
    if (timeRange && coinId) {
      setLoading(true);
      const filter = {
        id: coinId,
        query: {
          vs_currency: 'usd',
          days: timeRange,
        },
      };
      fetchPriceChart(filter);
      dispatch(resetOhlcChart());
    }
  }, [timeRange, coinId, fetchPriceChart, dispatch]);

  useEffect(() => {
    if (marketChart?.prices) {
      const formattedData: IMarketDataPoint[] = marketChart?.prices.map((point: any) => [
        point[0], // Timestamp
        point[1], // Price
      ]);

      const firstPrice = marketChart?.prices[0][1];
      const lastPrice = marketChart?.prices[marketChart?.prices.length - 1][1];
      const lineColor = lastPrice >= firstPrice ? 'var(--color-up)' : 'var(--color-down)';

      loadHighchartsModules(async () => {
        const options: Highcharts.Options = {
          title: {},
          chart: { height: 500 },
          xAxis: { type: 'datetime' },
          yAxis: {
            title: { text: null },
            labels: {
              align: 'left',
              style: { fontSize: '12px' },
              formatter() {
                const num = this.value as number;
                return formatNumberShort(num);
              },
            },
            tickPixelInterval: 50,
          },
          rangeSelector: { enabled: false },
          navigator: { enabled: false },
          scrollbar: { enabled: false },
          exporting: { enabled: false },
          series: [
            {
              color: lineColor,
              type: 'line',
              name: `${coinDetail?.symbol?.toUpperCase()}/USD`,
              data: formattedData,
              tooltip: { valueDecimals: 2 },
            },
          ],
        };

        setOptions(options);
        setLoading(false);
      });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [marketChart]);

  if (isLoading) {
    return (
      <Box display="flex" justifyContent="center" alignItems="center" height={500}>
        <CircularProgress />
      </Box>
    );
  }

  return (
    <div>
      <HighchartsReact highcharts={Highcharts} constructorType="stockChart" options={options} />
    </div>
  );
};

export default PriceChart;
