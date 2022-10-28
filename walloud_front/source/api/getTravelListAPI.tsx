import axios from "axios"
import { useNavigate } from "react-router-dom";
import { SetterOrUpdater, useRecoilState } from "recoil";
import { TravelProps } from "../recoils/travel";
import { userState } from "../recoils/user";

export interface TravelAPIProps {
    id: number;
    setTravelList: SetterOrUpdater<TravelProps[]>;
  }

const GetTravelListAPI = async (id: number, setTravelList: SetterOrUpdater<TravelProps>) => {
    axios.get(`/api/${id}`)
        .then((response) => {
            setTravelList(response.data)
            console.log(response.data)
        })
        .catch((error) => {
            if (error.response.data.status === 500) {
                alert(error.response.data.message)
            }
            else {
                alert("예기치 못한 오류가 발생했습니다")
            }
        })
}

export default GetTravelListAPI;