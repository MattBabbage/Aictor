import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import { BrowserRouter } from 'react-router-dom';

import Auth0ProviderWithHistory from "./auth/auth0-provider-with-history";


ReactDOM.render((
    <BrowserRouter>
      <Auth0ProviderWithHistory>
        <App />
      </Auth0ProviderWithHistory> 
      {/* The various pages will be displayed by the `Main` component. */}
    </BrowserRouter>
    ), document.getElementById('root')
  );