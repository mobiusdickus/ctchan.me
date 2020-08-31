import { useEffect, useState } from 'react';
import axios from 'axios';

function GetApiData(url) {
  // This is just for demo purposes, you probably want to separate the data from loading state and potentially add other states such as failures, etc..
  const [endpointUrl] = useState(url);
  const [apiData, setData] = useState({ data: [] }); 
  const [dataState, setDataState] = useState({ isFetching: false });

  useEffect(() => {
    const fetchDataFromApi = async () => {
      try {
        setDataState({ ...dataState, isFetching: true });
        const response = await axios.get(endpointUrl);
        setData({ ...apiData, data: response.data });
        setDataState({ ...dataState, isFetching: false });
      } catch (e) {
        console.log(e);
        setData({ ...apiData });
        setDataState({ ...dataState, isFetching: false });
      }
    };
    fetchDataFromApi();
  }, []); // Runs once

  return [apiData];
};

export default GetApiData;
