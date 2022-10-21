import { css } from "@emotion/react"
import { Link } from "react-router-dom"

const NavMenuWrapper = css`
    display: inline-flex;
    float: right;
    gap: 10px;
    &>a {
        padding: 0px 7px;
        border-right: 5px solid white;
        &:hover {
            
        }
    }
`

function NavMenu(){
    return (
        <div css = {NavMenuWrapper}>
            <Link to="/divide">DivideByN</Link>
            <Link to="/about">ABOUT US</Link>
        </div>
    )
}

export default NavMenu;