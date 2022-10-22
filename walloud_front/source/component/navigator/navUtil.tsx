import { css } from "@emotion/react"
import { Link } from "react-router-dom"

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
    return (
        <div css = {NavUtilWrapper}>
            <Link to="/signin"> 로그인 </Link>
            <Link to="/signup"> 회원가입 </Link>
        </div>
    )
}

export default NavUtil;