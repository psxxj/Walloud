import { css } from '@emotion/react'
import PageContainer from '../../layout/container/pageContainer';
import MobileContainer from '../../layout/container/mobileContainer';
import { useState } from 'react';
import RegisterAPI from '../../api/registerAPI';
import InputContainer from '../../layout/container/inputContainer';
import SignInput from '../../component/input/signInput';
import SellectInput from '../../component/input/sellectInput';
import { BankList } from '../../storage/bankList';
import BasicButton from '../../component/button/basicButton';
import { useNavigate } from 'react-router-dom';
import { useSetRecoilState } from 'recoil';
import { LoginedState, userState } from '../../recoils/user';

const registerButtonStyle = css`
    &>button {
        width: 314px;
        border-radius: 5px;
    }
`

function SignUpPage() {
  const [name, SetName] = useState("");
  const [email, SetEmail] = useState("");
  const [password, SetPassword] = useState("");
  const [account, SetAccount] = useState("");
  const [bank, SetBank] = useState("");
  const [valid, SetValid] = useState(false);
  const setLogined = useSetRecoilState(LoginedState);
  const setUser = useSetRecoilState(userState);
  const path = useNavigate();

  return (
    <MobileContainer>
      <InputContainer>
        <SignInput name = {name} setType = {SetName} message = "name" required = {true}/>
        <SignInput name = {email} setType = {SetEmail} message = "email" required = {true}/>
        <SignInput name = {password} setType = {SetPassword} message = "password" required = {true}/>
        <SignInput name = {account} setType = {SetAccount} message = "account" required = {false}/>
        <SellectInput typeList = {BankList.map((bank, idx) => {
          return bank.name;
        })} setType = {SetBank} />
      </InputContainer>
      <div css = {registerButtonStyle}>
        <BasicButton text = "가입하기" onClick = {() =>
        RegisterAPI({userAuth: {email, password, setLogined, setUser, path}, name, account, bank})} />
      </div>
    </MobileContainer>
  );
}

export default SignUpPage;