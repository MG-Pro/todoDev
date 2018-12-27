
const fetchData = (url, params) => {
  return new Promise((resolve, reject) =>{
    fetch(url, params).then(res => {
        if(res.status < 200 || res.status >= 400) {
          throw res.json()
        } else {
          return res.json();
        }
      })
      .then(data => {
        resolve(data)
      })
      .catch(err => {
        if (typeof err === 'object' && typeof err.then === 'function') {
          err.then(e => {
            reject(e)
          })
        } else {
          reject(err);
        }
      });
  })
};

export default fetchData;


