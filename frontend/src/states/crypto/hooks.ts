import { useSelector } from 'react-redux';
import { RootState } from 'states';

export const useGlobal = () => useSelector((state: RootState) => state.crypto?.global);
export const useMarket = () => useSelector((state: RootState) => state.crypto?.market);
export const useMarketLoading = () => useSelector((state: RootState) => state.crypto?.loading);
