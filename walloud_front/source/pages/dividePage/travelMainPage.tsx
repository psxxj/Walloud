import { css } from "@emotion/react";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import {
  atom,
  useRecoilState,
  useRecoilValue,
  useSetRecoilState,
} from "recoil";
import GetTravelListAPI from "../../api/getTravelListAPI";
import UpdateTravelAPI from "../../api/updateTravelAPI";
import TravelBox from "../../component/box/travelBox";
import TravelCreateBox from "../../component/box/travelCreateBox";
import Color from "../../layout/globalStyle/globalColor";
import { currentTravelState, travelListState } from "../../recoils/travel";
import { userState } from "../../recoils/user";

const DivideMainPageStyle = css`
  background-color: ${Color.blue02};
  width: 100vw;
  height: 100vh;
  align-items: center;
  justify-content: center;
  display: flex;
  flex-wrap: wrap;
  gap: 30px 20px;
  &:first-of-type {
    width: 20%;
  }
`;

function TravelMainPage() {
  const id = useRecoilValue(userState).id;
  const [travelList, setTravelList] = useRecoilState(travelListState);
  const [currentTravel, setCurrentTravel] = useRecoilState(currentTravelState);

  const editModeState = atom({
    key: "isEditMode",
    default: null,
  });

  const [isEditMode, setIsEditMode] = useRecoilState<number | null>(
    editModeState
  );

  const onClickEdit = (travelId: number) => {
    if (isEditMode !== travelId) {
      setIsEditMode(travelId);
    } else {
      const newName: string = (
        document.getElementById(`${travelId}-input-name`) as HTMLInputElement
      ).value;
      UpdateTravelAPI(id, travelId, newName);
      setIsEditMode(null);

      const newTravelList = [...travelList].map((e) =>
        e.travelId === travelId ? { travelId: travelId, name: newName } : e
      );
      console.log(newTravelList);
      setTravelList(newTravelList);
    }
  };
  useEffect(() => {
    GetTravelListAPI(id, setTravelList);
  }, []);

  return (
    <div css={DivideMainPageStyle}>
      {TravelCreateBox()}
      {travelList.map((travel, idx) =>
        TravelBox(
          travel.name,
          travel.travelId,
          setCurrentTravel,
          onClickEdit,
          isEditMode
        )
      )}
    </div>
  );
}
export default TravelMainPage;

/*
        <div>
          <h3>Travel</h3>
          <div>여행에서 소비를 어떻게 관리할까요?</div>
        </div>
*/
