import { css } from "@emotion/react"
import { Link, useNavigate } from "react-router-dom"
import { useRecoilState, useRecoilValue, useResetRecoilState } from "recoil";
import { userState } from "../../recoils/user";
import BasicButton from "../button/basicButton";

const NavUtilWrapper = css`
    display: inline-flex;
    gap: 20px;
    float: right;
    &>a {
        padding: 10px;
        border-radius: 10px;
        border: 2px solid;
    }
`

function NavUtil(){
    const logoutUser = useResetRecoilState(userState);
    const navigate = useNavigate();

    return (
        <div css = {NavUtilWrapper}>
            {!useRecoilValue(userState).isLogin ?
            <><Link to="/signin"> 로그인 </Link>
            <Link to="/signup"> 회원가입 </Link></>
            : <><Link to="/mypage" onClick = {() => {}}>마이페이지</Link>
            <Link to="/" onClick = {() => {logoutUser()}}>로그아웃</Link></>}
        </div>
    )
}

export default NavUtil;