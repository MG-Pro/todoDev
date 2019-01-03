
export const forms = (formType) => dispatch => {
  dispatch({
    type: 'FORM_TYPE',
    payload: !formType
  })

};
