import { css } from '@emotion/react'
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useRecoilState, useRecoilValue, useSetRecoilState } from 'recoil';
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
  const id = useRecoilValue(userState).id;
  const [travelList, setTravelList] = useRecoilState(travelListState);

  useEffect(() => {
    GetTravelListAPI(id, setTravelList)
  }, [])

  return (
      <div css = {DivideMainPageStyle}>
        ㅋㅋㅋㅋㅋ
      </div>
  )
}
export default TravelMainPage;

/*
{travelList?.map((travel, idx) => (
  TravelBox(travel.name, travel.travelId)
))}
*/