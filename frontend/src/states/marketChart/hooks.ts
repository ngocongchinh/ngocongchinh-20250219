import { useSelector } from 'react-redux';
import { RootState } from 'states';

export const useMarketChart = () => useSelector((state: RootState) => state.marketChart?.data);
