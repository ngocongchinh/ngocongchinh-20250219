import { useSelector } from 'react-redux';
import { RootState } from 'states';

export const useTrending = () => useSelector((state: RootState) => state.trending);
