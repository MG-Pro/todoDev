import {Redirect, Route} from "react-router-dom";
import {connect} from 'react-redux';

const PrivateRoute = ({component: Component, ...rest}) => {
  return (
    <Route {...rest} render={props => {
      console.log(rest);
        return rest.isAuthenticated ?
          <Component {...props} />
          :
          <Redirect to="/app/login" />
      }}
    />
  );
};

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated
});

export default connect(mapStateToProps)(PrivateRoute);
