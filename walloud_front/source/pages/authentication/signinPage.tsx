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
import { LoginedState, userState } from '../../recoils/user';
import React from 'react';

function SigninPage() {
    const [email, SetEmail] = useState("");
    const [password, SetPassword] = useState("");
    const setLogined = useSetRecoilState(LoginedState);
    const setUser = useSetRecoilState(userState);
    const path = useNavigate();

    return (
        <MobileContainer>
            <InputContainer>
                <SignInput name = {email} setType = {SetEmail} message = "email" required = {false}/>
                <SignInput name = {password} setType = {SetPassword} message = "password" required = {false}/>
            </InputContainer>
            <BasicButton text = "로그인" onClick = {() => 
            LoginAPI({email, password, setUser, setLogined, path})} />
        </MobileContainer>
  );
}

export default SigninPage;