import {FILTER_TYPE, TECH_FILTER_TYPE} from '../types';

export const currentFilter = (filterType) => dispatch => {
  dispatch({
    type: FILTER_TYPE,
    payload: filterType
  })
};
export const currentTechFilter = (techFilterType) => dispatch => {
  dispatch({
    type: TECH_FILTER_TYPE,
    payload: techFilterType
  })
};
