// App.tsx
import React, { useEffect, useState } from 'react';
import { IonApp } from '@ionic/react';
import { Route, Redirect } from 'react-router-dom';
import DashboardPage from './DashboardPage2';
import WebcamCapture from './WebcamCapture';
import { Dish } from './interfaces'; // Import the Dish interface
import './theme/styles.css';

const App2: React.FC = () => {
  const [listUrlPerDish, setListUrlPerDish] = useState<Dish[] | null>(null);

  useEffect(() => {
    console.log('cambio listUrlPerDish');
  }, [listUrlPerDish]);

  return (
    <IonApp>
      {/* <Route exact path="/">
        <Redirect to="/" />
      </Route> */}
      <Route exact path="/dashboard">
        <DashboardPage />
      </Route>
      <Route exact path="/webcam">
        <WebcamCapture listUrlPerDish={listUrlPerDish} setListUrlPerDish={setListUrlPerDish} />
      </Route>
    </IonApp>
  );
};

export default App2;
