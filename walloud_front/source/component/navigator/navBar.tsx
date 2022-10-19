import { css } from '@emotion/react'
import ScrollNavi from '../../animation/scrollNavi';

const navStyle = css`
    position: fixed;
    left: 0;
    top: 0;
    height: 70px;
    min-width: 100%;
    display: inline-flex;
    z-index: 1000;
    transition: 1s ease;
    `
let navMode = {
    'top': css` 
        color: white;
        background-color: transparent;
    `,
    'down': css`
        position: fixed;
        top: -100px;
    `,
    'up': css`
      background-color: yellow;
    `,
}

const NavBar: any = () => (
    <div css = {[navStyle, navMode[ScrollNavi()]]}>
        상단바입니다.
    </div>
)

export default NavBar;