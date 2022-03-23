import { StatusBar } from 'expo-status-bar';
import React from 'react';
import AppProvider from './hooks';
import Routes from './routes';

export default function App() {
  return (
    <>
      <StatusBar translucent networkActivityIndicatorVisible backgroundColor='white' />
      <AppProvider>
        <Routes />
      </AppProvider>
    </>
  );
}