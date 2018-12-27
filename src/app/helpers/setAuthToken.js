import fetchData from './fetchData';

const setAuthToken = token => {
  if(token) {
    fetchData.defaults.headers.common['Authorization'] = token;
  }
  else {
    delete fetchData.defaults.headers.common['Authorization'];
  }
};

export default setAuthToken;
