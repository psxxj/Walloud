import { css } from '@emotion/react'
import { useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
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
    const {travelName} = useParams();

    return (
        <div css = {DivideMainPageStyle}>
            {travelName}
        </div>
  )
}
export default TravelMainPage;