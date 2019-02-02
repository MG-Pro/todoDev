import {TECH_LIST} from './types';

export const tech = (tasks) => dispatch => {
  const techList = [];

  function isIncludes (list, item) {
    const i = list.findIndex(el => {
      return el.name === item
    });
    return i !== -1;
  }

  tasks.forEach(item => {
    if(!isIncludes(techList, item.tech)) {
      techList.push({
        name: item.tech,
        color: ''
      });
    }
  });

  dispatch({
    type: TECH_LIST,
    payload: techList
  })
};
