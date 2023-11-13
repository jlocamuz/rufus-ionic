import React from 'react';
import { IonPage, IonHeader, IonToolbar } from '@ionic/react';
import WebcamCapture from '../WebcamCapture';

interface Tab1Props {
  listUrlPerDish: { lista_of_urls_perdish: string[] } | null;
  setListUrlPerDish: React.Dispatch<React.SetStateAction<{ lista_of_urls_perdish: string[] } | null>>;
}

const Tab1: React.FC<Tab1Props> = ({ listUrlPerDish, setListUrlPerDish }) => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          {/* Your toolbar content here */}
        </IonToolbar>
      </IonHeader>
      <WebcamCapture listUrlPerDish={listUrlPerDish} setListUrlPerDish={setListUrlPerDish} />
    </IonPage>
  );
}

export default Tab1;
 