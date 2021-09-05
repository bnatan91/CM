import React from "react";
import {IonLabel, IonSegment, IonSegmentButton} from "@ionic/react";

// type selectedValue = 'cmkg' | 'ftlbs';

type optionValue = 'cmkg' | 'ftlbs';

const InputControl: React.FC<{selectedValue : optionValue; onSelectValue : (selectedValue: optionValue) => void;}> = props => {

  const inputChangeHandler = (event: CustomEvent) => {
    props.onSelectValue(event.detail.value);
  }

  return(
    <IonSegment value={props.selectedValue} onIonChange={inputChangeHandler}>
      <IonSegmentButton value="cmkg">
        <IonLabel>cm/kg</IonLabel>
      </IonSegmentButton>
      <IonSegmentButton value="ftlbs">
        <IonLabel>ft/lbs</IonLabel>
      </IonSegmentButton>
    </IonSegment>
  );
};

export default InputControl;