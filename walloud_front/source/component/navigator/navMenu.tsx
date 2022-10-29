import { css } from "@emotion/react"
import { Link } from "react-router-dom"
import { useRecoilValue, useResetRecoilState } from "recoil"
import { eventListState } from "../../recoils/travel"
import { LoginedState } from "../../recoils/user"

const NavMenuWrapper = css`
    float: right;
    gap: 10px;
    flex-grow: 1;
    font-size: 18px;
    &>a {
        padding: 0px 7px;
        border-right: 5px solid;
        &:hover {
            
        }
    }
`

function NavMenu(){
    return (
        <div css = {NavMenuWrapper}>
            {!useRecoilValue(LoginedState) ?
            <><Link to="/divide">DivideByN</Link>
            <Link to="/about">About Us</Link></>
            : <><Link to="/book">Account Book</Link>
            <Link to="/feed">Feed</Link>
            <Link to="/travel">DivideByN</Link></>}
        </div>
    )
}

export default NavMenu;