import axios from "axios"
import { Navigate } from "react-router-dom";
import User from "../hooks/userInfo";

const LoginAPI = async (email: string, password: string) => {
    var userId: number|null = null;
    await axios
        .post("/api/login", null, { params: {
            Email: email,
            Password: password,
        }})
        .then((response) => {
            alert("Login Success!");
            userId = response.data
        })
        .catch((error) => {
            if (error.response.data.status === 500) {
            alert(error.response.data.message);
        }
        else {
          alert("Check The network");
        }
    });
    console.log(userId)
    return userId      
}

export default LoginAPI;