import axios from "axios"
import { atom, selector, selectorFamily, useRecoilValue, useSetRecoilState } from "recoil";

const LoginAPI = async (email: string, password: string) => {
    await axios
        .post("/api/login", null, { params: {
            Email: email,
            Password: password,
        }})
        .then((response) => {
            alert("Login Success!");
        })
        .catch((error) => {
            if (error.response.data.status === 500) {
            alert(error.response.data.message);
        }
        else {
          alert("Check The network");
        }
    });
}

export default LoginAPI;