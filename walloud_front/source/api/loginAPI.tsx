import axios from "axios"
import { useNavigate } from "react-router-dom";
import { useRecoilState } from "recoil";
import { userState } from "../recoils/user";


const LoginAPI = async (email: string, password: string) => {
    return axios.post("/api/login", null, { params: {
            Email: email,
            Password: password,
        }})
}

export default LoginAPI;