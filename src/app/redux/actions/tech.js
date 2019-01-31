import {TECH_LIST} from './types';

export const tech = (tasks) => dispatch => {

  const techList = {
    isComplete: false,
    list: []
  };
  dispatch({
    type: TECH_LIST,
    payload: techList
  })
};
