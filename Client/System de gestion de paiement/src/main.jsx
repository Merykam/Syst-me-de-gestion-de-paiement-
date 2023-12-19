import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter as Router } from 'react-router-dom';
import { AppartementProvider } from './contexts/appartementContext.jsx';
import {NextUIProvider} from "@nextui-org/react";
import { PaimentProvider } from './contexts/paimentContext.jsx';
import { ClientProvider } from './contexts/clientContext.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>

    <Router>
    <NextUIProvider>
    <ClientProvider>
    <PaimentProvider>
    <AppartementProvider>
      <App />
    </AppartementProvider>
    </PaimentProvider>
    </ClientProvider>
    </NextUIProvider>
    </Router>
  
  </React.StrictMode>,
)
