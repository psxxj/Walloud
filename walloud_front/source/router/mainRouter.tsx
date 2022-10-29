import { useRecoilValue } from 'recoil';
import { LoginedState, userState } from '../recoils/user';
import NotLoginedRouter from './notLoginedRouter';
import LoginedRouter from './LoginedRouter';
import { currentTravelState, travelListState } from '../recoils/travel';

export default function MainRouter(){
    const isLogined = useRecoilValue(LoginedState)
    console.log(useRecoilValue(userState))
    console.log(useRecoilValue(travelListState))
    console.log(useRecoilValue(currentTravelState))
    
    if (!isLogined){
        return <NotLoginedRouter />
    } else {
        return <LoginedRouter />
    }
}
