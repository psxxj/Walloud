import { Route, Routes } from 'react-router-dom'
import SigninPage from '../pages/authentication/signinPage';
import SignUpPage from '../pages/authentication/signupPage';
import IntroPage from '../pages/introPage'
import NotFound from '../pages/notFound';

function MainRouter() {

  return (
      <Routes>
        <Route path="/" element = {<IntroPage />} />
        <Route path="/signin" element ={<SigninPage />} />
        <Route path="/signup" element ={<SignUpPage />} />
        <Route path='/*' element = {<NotFound />} />
      </Routes>
  )
}

export default MainRouter;
