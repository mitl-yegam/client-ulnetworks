import axios from 'axios';
import queryString from 'query-string';

type GenericObject = {
  [key: string]: any;
};
type HttpProp = {
  url: string;
  data?: GenericObject;
  config?: GenericObject;
};

const defaultConfig = {
  headers: { 'content-type': 'application/json' },
};

const baseUrl = process.env.REACT_APP_API_URL;

const API = {
  async get({ url, data, config = defaultConfig }: HttpProp) {
    let _url = `${baseUrl}${url}`;

    if (data) {
      _url = `${_url}?${queryString.stringify(data)}`;
    }

    return await axios.get(_url, config);
  },
  async post({ url, data, config = defaultConfig }: HttpProp) {
    console.log(process.env.REACT_APP_API_URL);
    let _url = `${baseUrl}${url}`;
    const _config = {
      ...defaultConfig,
      ...config,
    };
    return await axios.post(_url, data, _config);
  },
};

export default API;
