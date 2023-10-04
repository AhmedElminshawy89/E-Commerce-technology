import React, { Fragment } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
// import Admin from './Admin/Admin';
import { Auth0Provider } from '@auth0/auth0-react';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

  <Fragment>

  {/* <Admin/> */}

  <Auth0Provider
    domain="dev-gb3vsghovs7g8auq.us.auth0.com"
    clientId="WCgQqhfPxWVnEC08gZs70cmv0PqyGuWV"
    authorizationParams={{
      redirect_uri: window.location.origin
    }}
  >
    <App />
  </Auth0Provider> 
  </Fragment>

);
