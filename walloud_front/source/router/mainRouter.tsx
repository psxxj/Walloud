import { Route, Routes } from 'react-router-dom'
import { useRecoilValue } from 'recoil';
import { userState } from '../recoils/user';
import PageContainer from '../layout/container/pageContainer';
import SigninPage from '../pages/authentication/signinPage';
import SignUpPage from '../pages/authentication/signupPage';
import DivideMainPage from '../pages/dividePage/divideMainPage';
import IntroPage from '../pages/introPage/introPage'
import MainPage from '../pages/mainPage';
import NotFound from '../pages/notFound';

function MainRouter() {
  console.log(useRecoilValue(userState))

  return (
      <PageContainer>
        <Routes>
          {!useRecoilValue(userState).isLogin ? 
          <>
            <Route path="/" element = {<IntroPage />} />
            <Route path="/signin" element ={<SigninPage />} />
            <Route path="/signup" element ={<SignUpPage />} />
          </> : <>
            <Route path="/" element = {<MainPage />}/>
            <Route path="/divide" element ={<DivideMainPage />} />
          </>}
          <Route path='/*' element = {<NotFound />} />
        </Routes>
      </PageContainer>
  )
}

export default MainRouter;
