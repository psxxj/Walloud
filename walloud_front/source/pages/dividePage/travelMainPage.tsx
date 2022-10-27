import { css } from '@emotion/react'
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useRecoilState, useRecoilValue } from 'recoil';
import GetTravelListAPI from '../../api/getTravelListAPI';
import TravelBox from '../../component/box/travelBox';
import { travelListState } from '../../recoils/travel';
import { userState } from '../../recoils/user';

const DivideMainPageStyle = css`
  font-size: 40px;
  background-color: darkgoldenrod;
  width: 100vw;
  height: 100vh;
  align-items: center;
  justify-content: center;
  display: flex;
  flex-flow: row wrap;
  gap: 30px 20px;
`;

function TravelMainPage(){
  const User = useRecoilValue(userState);
  const [travelList, SetTravelList] = useRecoilState(travelListState);

  useEffect(() => { if(travelList === null){
    GetTravelListAPI(User.id)
      .then((response) => {
        SetTravelList(response.data)
        console.log(response.data)
      })
      .catch((error) => {
        if (error.response.data.status === 500) {
          alert(error.response.data.message)
        }
      })
  }}, [])

  return (
      <div css = {DivideMainPageStyle}>
        {travelList?.map((travel, idx) => (
          TravelBox(travel.name, travel.travelId)
        ))}
      </div>
  )
}
export default TravelMainPage;