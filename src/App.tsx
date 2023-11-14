// App.tsx
import React, { useEffect, useState } from 'react';
import { IonApp } from '@ionic/react';
import { Route, Redirect } from 'react-router-dom';
import DashboardPage from './DashboardPage';
import WebcamCapture from './WebcamCapture';
import './theme/styles.css'; // Import your CSS file
import { Dish } from './interfaces'; // Import the Dish interface

const App: React.FC = () => {
  const [listUrlPerDish, setListUrlPerDish] = useState<Dish[] | null>(null);

  useEffect(() => {
    console.log('cambio listUrlPerDish');
  }, [listUrlPerDish]);

  return (
    <IonApp>
      {/* Render DashboardPage if listUrlPerDish is not null, otherwise render WebcamCapture */}
      {listUrlPerDish !== null ? (
        <Route exact path="/dashboard">
          <DashboardPage listUrlPerDish={listUrlPerDish} setListUrlPerDish={setListUrlPerDish} />
        </Route>
      ) : (
        <Route exact path="/webcam">
          <WebcamCapture listUrlPerDish={listUrlPerDish} setListUrlPerDish={setListUrlPerDish} />
        </Route>
      )}
      {/* Redirect to "/dashboard" if listUrlPerDish is not null, otherwise redirect to "/webcam" */}
      {listUrlPerDish !== null ? (
        <Redirect from="/" to="/dashboard" />
      ) : (
        <Redirect from="/" to="/webcam" />
      )}
    </IonApp>
  );
};

export default App;
