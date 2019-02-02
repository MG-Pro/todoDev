import {FILTER_TYPE} from './types';

export const currentFilter = (filterType) => dispatch => {
  dispatch({
    type: FILTER_TYPE,
    payload: filterType
  })
};
