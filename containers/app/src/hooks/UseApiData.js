import { useEffect, useState } from 'react';
import axios from 'axios';

function useApiData(url) {
  // This is just for demo purposes, you probably want to separate the data from loading state and potentially add other states such as failures, etc..
  const [apiData, setData] = useState({ data: [] }); 
  const [dataState, setDataState] = useState({ isFetching: true });

  useEffect(() => {
    const fetchDataFromApi = async () => {
      try {
        setDataState({ ...dataState, isFetching: true });
        const response = await axios.get(url);
        setData({ ...apiData, data: response.data });
        setDataState({ ...dataState, isFetching: false });
      } catch (e) {
        console.log(e);
        setData({ ...apiData });
        setDataState({ ...dataState, isFetching: false });
      }
    };
    fetchDataFromApi();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []); // Runs once

  return [apiData, dataState];
};

export default useApiData;
