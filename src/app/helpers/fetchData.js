
const fetchData = (url, params) => {
  let status = null;
  return new Promise((resolve, reject) =>{
    fetch(url, params).then(res => {
        status = res.status;
        return res.json();
      })
      .then(data => {
        if(status < 200 || status >= 400) {
          throw data;
        } else {
          resolve(data);
        }
      })
      .catch(err => {
          if(err instanceof Error) {
            reject(null);
          } else {
            reject(err);
          }
      });
  })
};

export default fetchData;


