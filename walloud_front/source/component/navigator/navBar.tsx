import { css } from '@emotion/react'
import { useRecoilValue } from 'recoil'
import ScrollNavi from '../../animation/scrollNavi';
import Color from '../../layout/globalStyle/globalColor';
import { userState } from '../../recoils/user';
import NavMenu from './navMenu';
import NavUtil from './navUtil';

const navStyle = css`
    position: fixed;
    left: 0;
    top: 0;
    height: 70px;
    min-width: 100%;
    padding: 5px 0px;
    display: inline-flex;
    z-index: 1000;
    transition: 1s ease;
    align-items: center;
    &>* {
        display: inline-flex;
        align-items: center;
        padding: 0 20px;
        &>img {
            height: 65px;
        }
        &>a {
            color: black;
            &:hover {
                color: ${Color.gray05};
            }
        }
    }
    `
let navMode: {[index: string]:any} = {
    'top': css` 
        background-color: transparent;
        &>* {
            &>img {
                filter: invert();
            }
            &>a {
                color: white;
            }
        } 
    `,
    'down': css`
        position: fixed;
        top: -80px;
    `,
    'up': css`
        background-color: white;
    `,
}

function NavBar(){
    let screenMode = ScrollNavi();
    const user = useRecoilValue(userState);
    return (
    <div css = {[navStyle, navMode[screenMode]]}>
        <a href='/'>
            <img src = './source/assets/logo-main.svg'/>
        </a>
        <NavMenu />
        <NavUtil />
    </div>
    );
}


export default NavBar;