import { useState} from 'react';
import { css } from '@emotion/react'
import PageContainer from '../../layout/container/pageContainer';
import MobileContainer from '../../layout/container/mobileContainer';
import SignInput from '../../component/input/signInput';
import InputContainer from '../../layout/container/inputContainer';
import LoginAPI from '../../api/loginAPI';

function SigninPage() {
    const [email, SetEmail] = useState("");
    const [password, SetPassword] = useState("");

    const onSubmit = () => {
        LoginAPI(email, password);
    }

    return (
        <PageContainer>
            <MobileContainer>
                    <InputContainer>
                        <SignInput name = {email} setType = {SetEmail} message = "email"/>
                        <SignInput name = {password} setType = {SetPassword} message = "password"/>
                    </InputContainer>
                    <button onClick={onSubmit}> 로그인 </button>
                </MobileContainer>
        </PageContainer>
  );
}

export default SigninPage;