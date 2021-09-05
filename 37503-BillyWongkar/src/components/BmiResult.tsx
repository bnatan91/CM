import { IonCard, IonCardContent, IonCardHeader, IonCardTitle, IonCol, IonRow } from '@ionic/react';
import React from 'react';


const BmiResult: React.FC<{calculateBmi: number; resultBmi: string}> = props =>{
    return (
        <IonRow>
          <IonCol>
            <IonCard>
              <IonCardHeader className="ion-text-center">
                <IonCardTitle>{props.resultBmi}</IonCardTitle>
              </IonCardHeader>
    
              <IonCardContent className="ion-text-center">
                <h2>{props.calculateBmi}</h2>
              </IonCardContent>
            </IonCard>
          </IonCol>
        </IonRow>
    
      );
};
export default BmiResult;