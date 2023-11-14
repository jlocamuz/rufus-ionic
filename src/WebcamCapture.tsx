// WebcamCapture.tsx
import React, { Dispatch, SetStateAction, useState } from 'react';
import { IonButton, IonContent, IonImg, IonPage } from '@ionic/react';
import { Camera, CameraResultType, CameraSource } from '@capacitor/camera';
import axios from 'axios';
import { Dish, WebcamCaptureProps } from './interfaces'; // Import the Dish interface



const WebcamCapture: React.FC<WebcamCaptureProps> = ({ listUrlPerDish, setListUrlPerDish }) => {
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

      if (photo.webPath) {
        // Convert data URL to Blob
        const response = await fetch(photo.webPath);
        const arrayBuffer = await response.arrayBuffer();
        const blob = new Blob([arrayBuffer]);

        // Create FormData and append the image blob
        const formData = new FormData();
        formData.append('image', blob, 'capturedImage.jpg');

        // Make a POST request to create a Menu object
        const menuResponse = await axios.post('http://192.168.1.40:8000/menus/', formData, {
          headers: {
            'Content-Type': 'multipart/form-data',
          },
        });

        console.log('Menu object created:', menuResponse.data);

        // Update the list of URLs in the parent component
        setListUrlPerDish((prevList) => {
          if (prevList) {
            return [...prevList, menuResponse.data];
          } else {
            return [menuResponse.data];
          }
        });
      }
    } catch (error) {
      console.error('Error capturing the photo:', error);
    }
  };

  return (
    <IonPage>
      <div className='center-container'>
        <h1>hey</h1>
        {imageSrc ? (
          <IonImg src={imageSrc} alt="Captured Photo" />
        ) : (
          <IonButton className="button-77" onClick={captureFromCamera}>
            Capturar
          </IonButton>
        )}
      </div>
    </IonPage>
  );
};

export default WebcamCapture;
