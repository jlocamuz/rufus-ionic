import React, { useState } from 'react';
import { IonButton, IonContent, IonImg, IonPage } from '@ionic/react';
import { Camera, CameraResultType, CameraSource } from '@capacitor/camera';
import './theme/styles.css';


const CameraCapture: React.FC = () => {
  const [imageSrc, setImageSrc] = useState<string | null>(null);

  const captureFromCamera = async () => {
    try {
      const photo = await Camera.getPhoto({
        quality: 90,
        allowEditing: false,
        resultType: CameraResultType.Uri,
        source: CameraSource.Camera,
      });
      setImageSrc(photo.webPath || null);
    } catch (error) {
      console.error('Error capturing a photo:', error);
    }
  };

  return (
    <IonPage>
        <div className='center-container'>
          <h1 >hey</h1>
          {imageSrc ? (
            <IonImg src={imageSrc} alt="Captured Photo"/>
          ) : (
            <button className="button-77" onClick={captureFromCamera} >capturar</button>
          )}
        </div>
    </IonPage>
  );
};

export default CameraCapture;
