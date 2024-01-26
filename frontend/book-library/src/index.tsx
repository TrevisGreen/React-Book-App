import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { App } from './App';
import { BrowserRouter } from 'react-router-dom';
import { loadStripe  } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';

const stripePromise = loadStripe('pk_test_51OMgpNAynhUE46CuXO9MkgbEYAIcOdZxW4kRrq9wHBqlCa8vzIlhPDHhpaIq2y2mMe6wPTNTI4xlUS8cdWYn9HOA00K2NPBcmN');

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <BrowserRouter>
    <Elements stripe={stripePromise}>
      <App />
    </Elements>    
  </BrowserRouter>
);
