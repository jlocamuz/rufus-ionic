import React, { useEffect, useState } from 'react';
import { IonApp } from '@ionic/react';
import { Route, Redirect } from 'react-router-dom';
import DashboardPage from './DashboardPage';
import Tab1 from './pages/Tab1';


const App: React.FC = () => {
  const [listUrlPerDish, setListUrlPerDish] = useState<Dish[] | null>(null);

  useEffect(() => {
    console.log("cambio listUrlPerDish");
  }, [listUrlPerDish]);

  return (
    <IonApp className="center-container">
      <Route exact path="/">
        <Redirect to="/tab1" />
      </Route>
      <Route exact path="/dashboard">
        <DashboardPage listUrlPerDish={listUrlPerDish} setListUrlPerDish={setListUrlPerDish} />
      </Route>
      <Route exact path="/tab1">
        <Tab1 listUrlPerDish={listUrlPerDish} setListUrlPerDish={setListUrlPerDish} />
      </Route>
    </IonApp>
  );
};

export default App;
