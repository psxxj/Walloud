import { css } from '@emotion/react'
import ScrollNavi from '../../animation/scrollNavi';
import NavMenu from './navMenu';
import NavUtil from './navUtil';

const navStyle = css`
    position: fixed;
    left: 0;
    top: 0;
    height: 70px;
    min-width: 100%;
    padding: 5px 20px;
    display: inline-flex;
    z-index: 1000;
    transition: 1s ease;
    align-items: center;
    border-bottom: 2px solid black;
    gap: 20px;
    &> {
        display: inline-flex;
        align-items: center;
    }
    `
let navMode = {
    'top': css` 
        background-color: transparent;
        border-color: white;
    `,
    'down': css`
        position: fixed;
        top: -100px;
    `,
    'up': css`
        background-color: white;
        border-color: black;
    `,
}

const logoStyle = css`
    height: 65px;
`

function NavBar(){
    let screenMode = ScrollNavi();
    return (
    <div css = {[navStyle, navMode[screenMode]]}>
        <a href='/'>
            <img src = {screenMode === 'up' ? 'source/assets/logo-black.png' : 'source/assets/logo-white.png'}
            css = {logoStyle} />
        </a>
        <NavMenu />
        <NavUtil />
    </div>
    );
}

export default NavBar;