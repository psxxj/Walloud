import { Route, Routes } from 'react-router-dom'
import IntroPage from '../pages/introPage'
import NotFound from '../pages/notFound';

function MainRouter() {

  return (
      <Routes>
        <Route path="/" element = {<IntroPage />} />
        <Route path='/*' element = {<NotFound />} />
      </Routes>
  )
}

export default MainRouter;
