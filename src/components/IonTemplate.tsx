import { IonButton, IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import { ReactNode } from 'react';
import styled from 'styled-components'

const IonTemplate = ({title, children}:{title:string, children: ReactNode}) => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>{title}</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">{title}</IonTitle>
          </IonToolbar>
        </IonHeader>
        {children}
      </IonContent>
    </IonPage>
  );
};

const StyledButton=styled.div`
color:red;
`

const ChartWrap= styled.div`
  width: 500px;
`
export default IonTemplate;
