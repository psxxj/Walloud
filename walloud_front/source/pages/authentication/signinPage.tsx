import {useState} from 'react';
import { useNavigate } from 'react-router-dom';
import { css } from '@emotion/react'
import PageContainer from '../../layout/container/pageContainer';
import MobileContainer from '../../layout/container/mobileContainer';
import SignInput from '../../component/input/signInput';
import InputContainer from '../../layout/container/inputContainer';
import LoginAPI from '../../api/loginAPI';
import BasicButton from '../../component/button/basicButton';

function SigninPage() {
    const [email, SetEmail] = useState("");
    const [password, SetPassword] = useState("");
    const navigate = useNavigate();

    const onSubmit = () => {
        LoginAPI(email, password).then(
            (response: number|null) => {
                if (typeof(response) === 'number'){
                    navigate("/main");
                } 
            }
        );
    }

    return (
        <PageContainer>
            <MobileContainer>
                    <InputContainer>
                        <SignInput name = {email} setType = {SetEmail} message = "email"/>
                        <SignInput name = {password} setType = {SetPassword} message = "password"/>
                    </InputContainer>
                    <BasicButton text = "로그인" onClick = {onSubmit} />
                </MobileContainer>
        </PageContainer>
  );
}

export default SigninPage;