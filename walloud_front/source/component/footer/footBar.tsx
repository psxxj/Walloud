import { css } from '@emotion/react'
import LeftFooter from './leftFooter';
import RightFooter from './rightFooter';
import Color from '../../layout/globalStyle/globalColor';

const footStyle = css`
    width: 100%;
    background-color: ${Color.gray01};
    justify-content: space-around;
    display: flex;
    padding: 5vh 0;
    @media only screen and (max-width: 700px) {
        flex-direction: column;
        padding: 3vh 5vw;
    }
`;


function FootBar(){
    return (
        <div css = {footStyle}>
            <LeftFooter />
            <RightFooter />
        </div>
    );
}

export default FootBar;