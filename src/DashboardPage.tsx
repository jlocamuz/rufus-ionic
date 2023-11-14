import React, { useState } from 'react';
import { DashboardPageProps } from './interfaces'; // Import the interfaces
import {
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonCardSubtitle,
  IonCardTitle,
  IonGrid,
  IonRow,
  IonCol,
  IonImg,
  IonButton,
  IonText,
} from '@ionic/react';
import yo from './img/yo.png';
import quiero from './img/quiero.png';
import comer from './img/comer.png';
import cuadrado from './img/cuadrado.png';
import volver from './img/volver.png';
import borrar from './img/borrar.png';

// ... (previous imports)

const DashboardPage: React.FC<DashboardPageProps> = ({ listUrlPerDish, setListUrlPerDish }) => {
  let objeto2: any  = 
  {
      "lista_of_urls_perdish": [
          {
              "model": "rufus_app.dish",
              "pk": 816,
              "fields": {
                  "nombre": "hamburguesa",
                  "plato": "['hamburguesa']",
                  "menu": 601,
                  "dish_items": [
                      10
                  ]
              },
              "dish_items": [
                  {
                      "model": "rufus_app.dishitem",
                      "pk": 10,
                      "fields": {
                          "name": "hamburguesa",
                          "url": "https://static.arasaac.org/pictograms/2419/2419_300.png"
                      }
                  }
              ]
          },
          {
              "model": "rufus_app.dish",
              "pk": 817,
              "fields": {
                  "nombre": "pancho",
                  "plato": "['pancho']",
                  "menu": 601,
                  "dish_items": [
                      8
                  ]
              },
              "dish_items": [
                  {
                      "model": "rufus_app.dishitem",
                      "pk": 8,
                      "fields": {
                          "name": "pancho",
                          "url": "https://static.arasaac.org/pictograms/7201/7201_300.png"
                      }
                  }
              ]
          },
          {
              "model": "rufus_app.dish",
              "pk": 818,
              "fields": {
                  "nombre": "pizza",
                  "plato": "['pizza']",
                  "menu": 601,
                  "dish_items": [
                      103
                  ]
              },
              "dish_items": [
                  {
                      "model": "rufus_app.dishitem",
                      "pk": 103,
                      "fields": {
                          "name": "pizza",
                          "url": "https://static.arasaac.org/pictograms/2527/2527_300.png"
                      }
                  }
              ]
          }
      ]
  }

  const [selectedImage, setSelectedImage] = useState(cuadrado)
    
  console.log('this is: ',listUrlPerDish);
  console.log(selectedImage)
    const handleButtonClick = (src: string, alt: string) => {
        setSelectedImage(src);
    };
    const borrarSeleccion = () => {
        setSelectedImage(cuadrado);
    };   
    const volverWebCam = () => {
      setListUrlPerDish(null);
  };   
    return (
        // la logica seria: apreto boton , si el estado era ese boton 
        <IonGrid >
        <IonRow>
        <IonCol style={{display: 'flex' }}>
            <IonButton style={{width: '35%'}} onClick={() => volverWebCam()}>
            <IonImg  src={volver}></IonImg>
            </IonButton>
        </IonCol>

        <IonCol style={{display: 'flex', justifyContent: 'flex-end' }}>
            <IonButton style={{width: '35%'}} onClick={() => borrarSeleccion()}>
            <IonImg  src={borrar}></IonImg>
            </IonButton>
        </IonCol>
        </IonRow>


 
            <IonRow style={{"background-color": "#CCCCCC"}}>
                <IonCol >
                    <IonImg  src={yo} alt="Imagen 1" />
                </IonCol>
                <IonCol >
                    <IonImg  src={quiero} alt="Imagen 2" />
                </IonCol>
                <IonCol >
                    <IonImg  src={comer} alt="Imagen 3" />
                </IonCol>
                <IonCol >
                    <IonImg  src={selectedImage} alt="Imagen 4" />
                </IonCol>
            </IonRow>

            <IonRow className="my-ion-row">
    {listUrlPerDish?.map((dishGroup: any, index: any) => (
        <React.Fragment key={index}>
            {dishGroup.lista_of_urls_perdish.map((dish: any) => (
                <IonCard className="my-ion-card" key={dish.pk}>
                    <IonButton onClick={() => handleButtonClick(dish.dish_items[0]?.fields.url, dish.dish_items[0]?.fields.name)}>
                        <IonCardHeader>
                            <IonCardTitle>{dish.fields?.nombre}</IonCardTitle>
                            <IonCardSubtitle>{`ID: ${dish.pk}`}</IonCardSubtitle>
                        </IonCardHeader>
                        <IonCardContent className="my-ion-card-content">
                            <div className="my-image-container">
                                <IonImg
                                    src={dish.dish_items[0]?.fields.url}
                                    alt={dish.dish_items[0]?.fields.name}
                                    className="my-image"
                                />
                            </div>
                            <p>{dish.dish_items[0]?.fields.name}</p>
                        </IonCardContent>
                    </IonButton>
                </IonCard>
            ))}
        </React.Fragment>
    ))}
</IonRow>

        </IonGrid>
    );
};


export default DashboardPage;
