import styled from 'styled-components'
import IonTemplate from '../components/IonTemplate';
import { useState } from 'react';
import SimpleButton from '../components/SimpleButton';

interface Trip{
  nom:string,
  depart:string,
  arrive:string
}

const TripBox=({trip}:{trip:Trip})=>{
  return(
    <StyledTrip>
      {trip.nom}<br/>
      <SimpleButton>PLUS D'OPTIONS</SimpleButton>
    </StyledTrip>
  )
}
const Content=()=>{
  const [trips,setTrips]=useState<Trip[]>([
    {nom:"paris defence",depart:"paris",arrive:"defence"},
    {nom:"paris defence",depart:"paris",arrive:"defence"}
  ])
  return(
    <div>
      {
        trips.map((cont, i)=>{return (
          <TripBox key={i} trip={cont}/>
        )})
      }

    </div>
  )
}
const TripListPage = () => {
  return (
    <IonTemplate title={''}><Content/></IonTemplate>
  );
};

const StyledTrip=styled.div`
padding: 14px;
color: royalblue;
box-shadow: 0px 5px 5px #0000001f;
margin: 4px 12px;
border-radius:5px;

Button{
  margin-top:6px;
}
`
export default TripListPage;
