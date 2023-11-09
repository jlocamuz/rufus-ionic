import React, { useState } from 'react';
import { IonApp } from '@ionic/react';
import { Route, Redirect } from 'react-router-dom';
import DashboardPage from './DashboardPage';
import Tab1 from './pages/Tab1';


const App: React.FC = () => {
  const [capturedPhoto, setCapturedPhoto] = useState<string | null>(null);

  return (
    <IonApp className="center-container">
      <Route exact path="/">
        <Redirect to="/tab1" />
      </Route>
      <Route exact path="/dashboard">
        <DashboardPage capturedPhoto={capturedPhoto} />
      </Route>
      <Route exact path="/tab1">
        <Tab1 />
      </Route>
    </IonApp>
  );
};

export default App;
