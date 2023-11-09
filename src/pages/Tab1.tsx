import React from 'react';
import { IonButton, IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import WebcamCapture from '../WebcamCapture';

function Tab1() {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
        </IonToolbar>
      </IonHeader>
        <WebcamCapture />

    </IonPage>
  );
}

export default Tab1;
