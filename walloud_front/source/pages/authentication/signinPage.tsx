import {useState} from 'react';
import { useNavigate } from 'react-router-dom';
import { css } from '@emotion/react'
import PageContainer from '../../layout/container/pageContainer';
import MobileContainer from '../../layout/container/mobileContainer';
import SignInput from '../../component/input/signInput';
import InputContainer from '../../layout/container/inputContainer';
import LoginAPI from '../../api/loginAPI';
import BasicButton from '../../component/button/basicButton';
import { useRecoilValue, useSetRecoilState } from 'recoil';
import { userState } from '../../recoils/user';
import React from 'react';

function SigninPage() {
    const [email, SetEmail] = useState("");
    const [password, SetPassword] = useState("");
    const navigate = useNavigate();

    return (
        <PageContainer>
            <MobileContainer>
                    <InputContainer>
                        <SignInput name = {email} setType = {SetEmail} message = "email"/>
                        <SignInput name = {password} setType = {SetPassword} message = "password"/>
                    </InputContainer>
                    <React.Suspense fallback={<div>Loading...</div>}>
                        <BasicButton text = "로그인"
                        onClick = {() => {LoginAPI(email, password)}} />
                    </React.Suspense>
                </MobileContainer>
        </PageContainer>
  );
}

export default SigninPage;