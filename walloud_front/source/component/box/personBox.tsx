import { css } from '@emotion/react'
import { useRecoilState, useSetRecoilState } from 'recoil'
import Color from '../../layout/globalStyle/globalColor';
import { FontSize } from '../../layout/globalStyle/globalSize';
import { currentTravelState } from '../../recoils/travel'

const PersonBoxStyle = css`
    position: relative;
    border-radius: 10px;
    border: 1px solid gray;
    border-collapse: collapse;
    font-size: ${FontSize.fs12};
    text-align: center;
    &:before {
        content: "";
        display: block;
        padding-top: 100%;
    }
    &>div {
        position: absolute;
        top: 5%;
        left: 5%;
        width: 90%;
        height: 90%;
    }
`

function PersonBox(Person: any, idx: number, type: string){

    return (
        <div css = {PersonBoxStyle} key = {idx} className = {type}>
            <div>
                {Person.name}
            </div>
        </div>
    )
}

export default PersonBox;