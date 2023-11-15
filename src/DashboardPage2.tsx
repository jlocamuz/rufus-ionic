import React, { useState } from 'react';
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


const DashboardPage: React.FC = () => {
    const [selectedImage, setSelectedImage] = useState(cuadrado)
    
  let objeto: any = {
    "lista_of_urls_perdish": [
        {
            "model": "rufus_app.dish",
            "pk": 810,
            "fields": {
                "nombre": "ensalada de tomate y lechuga con queso",
                "plato": "['ensalada de tomate', 'queso']",
                "menu": 599,
                "dish_items": [
                    5,
                    112
                ]
            },
            "dish_items": [
                {
                    "model": "rufus_app.dishitem",
                    "pk": 112,
                    "fields": {
                        "name": "ensalada de tomate",
                        "url": "https://static.arasaac.org/pictograms/2259/2259_300.png"
                    }
                },
                {
                    "model": "rufus_app.dishitem",
                    "pk": 5,
                    "fields": {
                        "name": "queso",
                        "url": "https://static.arasaac.org/pictograms/2541/2541_300.png"
                    }
                }
            ]
        },
        {
            "model": "rufus_app.dish",
            "pk": 811,
            "fields": {
                "nombre": "pescado con pure de papa",
                "plato": "['pescado', 'pure', 'papa']",
                "menu": 599,
                "dish_items": [
                    12,
                    13,
                    14
                ]
            },
            "dish_items": [
                {
                    "model": "rufus_app.dishitem",
                    "pk": 12,
                    "fields": {
                        "name": "pescado",
                        "url": "https://static.arasaac.org/pictograms/2519/2519_300.png"
                    }
                },
                {
                    "model": "rufus_app.dishitem",
                    "pk": 13,
                    "fields": {
                        "name": "pure",
                        "url": "https://static.arasaac.org/pictograms/2539/2539_300.png"
                    }
                },
                {
                    "model": "rufus_app.dishitem",
                    "pk": 14,
                    "fields": {
                        "name": "papa",
                        "url": "https://static.arasaac.org/pictograms/2503/2503_300.png"
                    }
                }
            ]
        },
        {
            "model": "rufus_app.dish",
            "pk": 812,
            "fields": {
                "nombre": "sandwich de jamon y queso",
                "plato": "['sandwich', 'jamon', 'queso']",
                "menu": 599,
                "dish_items": [
                    5,
                    28,
                    132
                ]
            },
            "dish_items": [
                {
                    "model": "rufus_app.dishitem",
                    "pk": 132,
                    "fields": {
                        "name": "sandwich",
                        "url": "https://static.arasaac.org/pictograms/3383/3383_300.png"
                    }
                },
                {
                    "model": "rufus_app.dishitem",
                    "pk": 28,
                    "fields": {
                        "name": "jamon",
                        "url": "https://static.arasaac.org/pictograms/2433/2433_300.png"
                    }
                },
                {
                    "model": "rufus_app.dishitem",
                    "pk": 5,
                    "fields": {
                        "name": "queso",
                        "url": "https://static.arasaac.org/pictograms/2541/2541_300.png"
                    }
                }
            ]
        }
    ]
};

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


    console.log(objeto.lista_of_urls_perdish[0].dish_items[0].fields.name);
    console.log(selectedImage)
    const handleButtonClick = (src: string, alt: string) => {
        setSelectedImage(src);
    };
    const borrarSeleccion = () => {
        setSelectedImage(cuadrado);
    };   
    return (
        // la logica seria: apreto boton , si el estado era ese boton 
        <IonGrid >
        <IonRow>
        <IonCol style={{display: 'flex' }}>
            <IonButton style={{width: '35%'}}>
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
                {objeto2.lista_of_urls_perdish.map((dish: any, index: any) => (
                        <IonCard className="my-ion-card">
                            <IonButton onClick={() => handleButtonClick(dish.dish_items[0].fields.url, dish.dish_items[0].fields.name)}>

                            <IonCardHeader>
                                <IonCardTitle>{dish.fields.nombre}</IonCardTitle>
                            </IonCardHeader>
                            <IonCardContent className="my-ion-card-content">
                                <div className="my-image-container">
                                <IonImg
                                    src={dish.dish_items[0].fields.url}
                                    alt={dish.dish_items[0].fields.name}
                                    className="my-image"
                                />
                                </div>
                                <p>{dish.dish_items[0].fields.name}</p>
                            </IonCardContent>
                            </IonButton>
                        </IonCard>

                ))}
            </IonRow>
        </IonGrid>
    );
};


export default DashboardPage;
