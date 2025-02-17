import React, { useEffect, useState, useCallback } from 'react';
import { CircularProgress, Box } from '@mui/material';
import HighchartsReact from 'highcharts-react-official';
import Highcharts from 'highcharts';
import { useAppDispatch } from 'states';
import { getOhlcChart, useOhlcChart } from 'states/ohlc';
import { useCoinDetail } from 'states/coinDetail';
import { formatNumberShort } from 'utils/number';
import { IOhlcData, IOhlcDataPoint, ICoinDetail, TimeRange } from 'types';

const loadHighchartsModules = async (callback: any) => {
  Promise.all([
    import('highcharts/modules/map'),
    import('highcharts/modules/stock'),
    import('highcharts/modules/exporting'),
    import('highcharts/modules/accessibility'),
  ]).then(callback);
};

interface IOhlcChart {
  coinId: string | string[];
  timeRange: TimeRange | string;
}

const OhlcChart: React.FC<IOhlcChart> = ({ coinId, timeRange }) => {
  const [options, setOptions] = useState<Highcharts.Options | null>(null);
  const [isLoading, setLoading] = useState<boolean>(true);
  const dispatch = useAppDispatch();
  const ohlcChart: IOhlcData = useOhlcChart();
  const coinDetail: ICoinDetail = useCoinDetail();

  const fetchOhlcChart = useCallback(
    (filter: any) => {
      dispatch(getOhlcChart(filter));
    },
    [dispatch],
  );

  useEffect(() => {
    if (timeRange && coinId) {
      setLoading(true);
      const filter = {
        id: coinId,
        query: { vs_currency: 'usd', days: timeRange },
      };

      fetchOhlcChart(filter);
    }
  }, [timeRange, coinId, dispatch, fetchOhlcChart]);

  useEffect(() => {
    if (ohlcChart && ohlcChart.length) {
      const formattedData: IOhlcDataPoint[] = ohlcChart.map((point: any) => [
        point[0],
        point[1],
        point[2],
        point[3],
        point[4],
      ]);

      loadHighchartsModules(() => {
        setOptions({
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
              type: 'candlestick',
              name: `${coinDetail?.symbol?.toUpperCase()}/USD`,
              color: 'red',
              upColor: 'green',
              lineColor: 'red',
              upLineColor: 'green',
              data: formattedData,
              tooltip: { valueDecimals: 2 },
            },
          ],
        });
        setLoading(false);
      });
    }
  }, [ohlcChart]);

  if (isLoading) {
    return (
      <Box display="flex" justifyContent="center" alignItems="center" height={500}>
        <CircularProgress />
      </Box>
    );
  }

  return <HighchartsReact highcharts={Highcharts} constructorType="stockChart" options={options} />;
};

export default OhlcChart;
