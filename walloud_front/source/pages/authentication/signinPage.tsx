import {useState} from 'react';
import { useNavigate } from 'react-router-dom';
import { css } from '@emotion/react'
import PageContainer from '../../layout/container/pageContainer';
import MobileContainer from '../../layout/container/mobileContainer';
import SignInput from '../../component/input/signInput';
import InputContainer from '../../layout/container/inputContainer';
import LoginAPI from '../../api/loginAPI';
import BasicButton from '../../component/button/basicButton';
import { useRecoilState, useRecoilValue, useSetRecoilState } from 'recoil';
import { userState } from '../../recoils/user';
import React from 'react';

function SigninPage() {
    const [email, SetEmail] = useState("");
    const [password, SetPassword] = useState("");
    const SetUser = useSetRecoilState(userState);
    const navigate = useNavigate();

    const onChange = () => {
        LoginAPI(email, password)
            .then((response) => {
                console.log(response)
                SetUser({isLogin: true, id: response.data.userId, name: response.data.name,
                account: response.data.account, email: email, bank: response.data.bank})
                navigate("/main")
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

    return (
        <MobileContainer>
            <InputContainer>
                <SignInput name = {email} setType = {SetEmail} message = "email"/>
                <SignInput name = {password} setType = {SetPassword} message = "password"/>
            </InputContainer>
            <BasicButton text = "로그인" onClick = {onChange} />
        </MobileContainer>
  );
}

export default SigninPage;