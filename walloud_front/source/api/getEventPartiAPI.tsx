import axios from "axios"
import { SetterOrUpdater, useRecoilState } from "recoil";
import { TravelProps } from "../recoils/travel";

const GetEventPartiAPI = async (id: number, setPartiList: SetterOrUpdater<any[]>) => {
    axios.get(`/api/${id}/detail`)
        .then((response) => {
            setPartiList(response.data)
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

export default GetEventPartiAPI;