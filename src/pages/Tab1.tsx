import { IonButton, IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import './Tab1.css';
import styled from 'styled-components'
import BarChart from '../components/BarChart';
import BarChart2 from '../components/BarChart2';

const Tab1: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Tab 1</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Tab 1</IonTitle>
          </IonToolbar>
        </IonHeader>
        <StyledButton>
          <IonButton onClick={()=>{console.log("test")}}>Default</IonButton>
        </StyledButton>
        <ChartWrap>
          <BarChart2/>
        </ChartWrap>
        <ExploreContainer name="Tab 1 page" />
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
export default Tab1;
