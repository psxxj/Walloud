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

function SignUpPage() {
  const [name, SetName] = useState("");
  const [email, SetEmail] = useState("");
  const [password, SetPassword] = useState("");
  const [account, SetAccount] = useState("");
  const [bank, SetBank] = useState("");

  const onSubmit = () => {
    RegisterAPI(name, email, password, account, bank);
  }

  return (
    <PageContainer>
        <MobileContainer>
          <InputContainer>
            <SignInput name = {name} setType = {SetName} message = "name"/>
            <SignInput name = {email} setType = {SetEmail} message = "email"/>
            <SignInput name = {password} setType = {SetPassword} message = "password"/>
            <SignInput name = {account} setType = {SetAccount} message = "account"/>
            <SellectInput typeList = {BankList.map((bank, idx) => {
              return bank.name;
            })} setType = {SetBank} />
          </InputContainer>
          <BasicButton text = "회원가입" onClick = {onSubmit} />
        </MobileContainer>
    </PageContainer>
  );
}

export default SignUpPage;