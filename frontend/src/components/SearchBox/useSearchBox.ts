import { ChangeEvent, useState, useEffect, useRef, useCallback } from 'react';
import { useRouter } from 'next/router';
import _debounce from 'lodash/debounce';
import { searchCoinApi } from 'apis/crypto';
import { ISearchCoinData } from 'types';

const useSearchBox = () => {
  const router = useRouter();
  const containerRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement | null>(null);
  const [show, setShow] = useState<boolean>(false);
  const [keyword, setKeyword] = useState<string>('');
  const [isLoadingSearch, setLoadingSearch] = useState<boolean>(false);
  const [searchData, setSearchData] = useState<ISearchCoinData | null>(null);

  const handleClickOutside = () => {
    setShow(false);
  };

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const debounceSearch = useCallback(
    _debounce(async (query) => {
      try {
        const res: any = await searchCoinApi(query);
        if (res) {
          setSearchData(res);
        }
      } finally {
        setLoadingSearch(false);
      }
    }, 1000),
    [],
  );

  const handleInputSearchChange = (e: ChangeEvent<HTMLInputElement>) => {
    setLoadingSearch(true);
    setKeyword(e.target.value);
    const { value } = e.target;
    const filter = { query: value.trim() };
    debounceSearch(filter);
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
        setShow(false);
        setKeyword('');
        setSearchData(null);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const forceClickOutside = () => {
    const event = new MouseEvent('mousedown', {
      bubbles: true,
      cancelable: true,
      view: window,
    });
    document.dispatchEvent(event);
  };

  const handleSelectCoin = (coin: any) => {
    setKeyword('');
    router.push('/coins/' + coin.id);
    forceClickOutside();
  };

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        // Handle Press ESC and close Search Box
        setKeyword('');
        setShow(false);
        inputRef.current?.blur();
        forceClickOutside();
      }

      if (event.key === '/') {
        // Handle Press / and close Search Box
        event.preventDefault();
        inputRef.current?.focus();
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  return {
    containerRef,
    inputRef,
    show,
    keyword,
    isLoadingSearch,
    searchData,
    setShow,
    onClickOutside: handleClickOutside,
    onInputSearchChange: handleInputSearchChange,
    onSelectCoin: handleSelectCoin,
  };
};
export default useSearchBox;
