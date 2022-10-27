import { Route, Routes } from 'react-router-dom'
import { useRecoilValue } from 'recoil';
import { userState } from '../recoils/user';
import PageContainer from '../layout/container/pageContainer';
import SigninPage from '../pages/authentication/signinPage';
import SignUpPage from '../pages/authentication/signupPage';
import TravelMainPage from '../pages/dividePage/travelMainPage';
import IntroPage from '../pages/introPage/introPage'
import MainPage from '../pages/mainPage';
import NotFound from '../pages/notFound';
import MyPage from '../pages/myPage';
import { currentTravelState } from '../recoils/travel';
import TravelPage from '../pages/dividePage/travelPage';

function MainRouter() {
  // console.log(useRecoilValue(userState))
  // console.log(useRecoilValue(currentTravelState))

  return (
        <Routes>
          {!useRecoilValue(userState).isLogin ? 
          <>
            <Route path="/" element = {<IntroPage />} />
            <Route path="/signin" element ={<SigninPage />} />
            <Route path="/signup" element ={<SignUpPage />} />
          </> : <>
            <Route path="/" element = {<MainPage />}/>
            <Route path="/travel" element ={<TravelMainPage />} />
            <Route path="/travel/:travelName" element ={<TravelPage />} />
            <Route path="/mypage" element ={<MyPage />} />
          </>}
          <Route path='/*' element = {<NotFound />} />
        </Routes>
  )
}

export default MainRouter;
