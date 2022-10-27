import axios from "axios"
import { useNavigate } from "react-router-dom";
import { useRecoilState } from "recoil";
import { userState } from "../recoils/user";


const GetTravelListAPI = async (id: number|null) => {
    return axios.get(`/api/${id}`)
}

export default GetTravelListAPI;