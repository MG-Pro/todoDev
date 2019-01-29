import {SORTING_TYPE} from './types';

export const sorting = (sortType) => dispatch => {
  dispatch({
    type: SORTING_TYPE,
    payload: sortType
  })
};
