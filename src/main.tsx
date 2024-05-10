import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import { store } from './redux-toolkit/store.js';
import './index.css';
import { Provider } from 'react-redux';

import { ApiProvider } from '@reduxjs/toolkit/query/react';
import { apiSlice } from './redux-toolkit/api/apiSlice.ts';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Provider store={store}>
      {/* <ApiProvider api={apiSlice}> */}
      <App />
      {/* </ApiProvider> */}
    </Provider>
  </React.StrictMode>
);
