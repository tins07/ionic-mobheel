import styled from 'styled-components'
import IonTemplate from '../components/IonTemplate';
import { useState } from 'react';
import RoundButton from '../components/RoundButton';

interface Positive{
  positive: boolean
}
interface Comment extends Positive{
  sum: string,
  desc: string
}

const CommentBox=({comment}:{comment:Comment})=>{
  const [expand,setExpand]=useState(false)
  return(
    <StyledComment positive={comment.positive}>
      <div>
        {comment.sum}
      </div>
      <RoundButton onClick={()=>{setExpand(!expand)}}>+</RoundButton>
      {expand && (<div>{comment.desc}</div>)}
    </StyledComment>
  )
}
const Content=()=>{
  const [points,setPoints]=useState<Comment[]>([
    {positive:false,sum:"mauvais freinage",desc:"pas assez freiné"},
    {positive:true,sum:"bon controles des virages",desc:"la position sur les virages est bien respecté"}
  ])
  return(
    <div>
      {
        points.map((cont, i)=>{return (
          <CommentBox key={i} comment={cont}/>
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

const StyledComment=styled.div<Positive>`
background-color: ${(props)=>{return(props.positive?'#68d568':'#ff5454')}};
border-radius: 5px;
padding: 14px;
margin-top: 12px;
`

export default TripListPage;
