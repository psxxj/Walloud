import { css } from "@emotion/react"
import { Link } from "react-router-dom"

const NavUtilWrapper = css`
    display: inline-flex;
    gap: 10px;
    &>a {
        color: black;
        background-color: white;
        padding: 10px;
        border-radius: 10px;
    }
`

function NavUtil(){
    return (
        <div css = {NavUtilWrapper}>
            <Link to="/login"> 로그인 </Link>
            <Link to="/register"> 회원가입 </Link>
        </div>
    )
}

export default NavUtil;