import { useSelector } from 'react-redux';
import { RootState } from 'states';

export const useOhlcChart = () => useSelector((state: RootState) => state.ohlc?.data);
