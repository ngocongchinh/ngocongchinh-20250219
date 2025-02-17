import { useSelector } from 'react-redux';
import { RootState } from 'states';

export const useCoinDetail = () => useSelector((state: RootState) => state.coinDetail?.data);
export const useCoinDetailLoading = () => useSelector((state: RootState) => state.coinDetail?.loading);
