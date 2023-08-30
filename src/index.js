import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import { BrowserRouter } from 'react-router-dom';

import { Auth0Provider } from '@auth0/auth0-react';


ReactDOM.render((
  
    <BrowserRouter>
      <Auth0Provider
          domain={process.env.REACT_APP_AUTH0_DOMAIN}
          clientId={process.env.REACT_APP_AUTH0_CLIENT_ID}
          authorizationParams={{
            redirect_uri: window.location.origin + "/dashboard"
          }}
        >
          <App />
        </Auth0Provider>
    </BrowserRouter>
    ), document.getElementById('root')
  );