import { merge } from 'lodash';

import request from '@utils/request';
import config from '@config/index';

const urls = {
  json: 'http://localhost:3000/api/data.json',
  countryGetAllKist: 'https://restcountries.com/v3.1/all',
  postUrl: 'https://shrtlnk.dev/api/v2/link',
};

export const callAPI = async (endpoint, method, header = {}, params = {}, data = {}) => {
  const defaultHeader = {
    'Content-Type': 'application/json; charset=UTF-8',
    Accept: 'application / json',
  };

  const headers = merge(defaultHeader, header);
  const options = {
    baseURL: endpoint,
    url: endpoint,
    method,
    headers,
    data,
    params,
  };

  return request(options).then((response) => {
    const responseAPI = response.data;
    return responseAPI;
  });
};

export const getData = () => callAPI(urls.json, 'get');

export const getCountryList = () => callAPI(urls.countryGetAllKist, 'get', {}, {});
export const postUrlShorten = (urlData) =>
  callAPI(urls.postUrl, 'post', { 'api-key': config.key.apiKey }, {}, { url: urlData });
