import { css } from '@emotion/react'
import { useRecoilState, useSetRecoilState } from 'recoil'
import Color from '../../layout/globalStyle/globalColor';
import { currentTravelState } from '../../recoils/travel'

const PersonBoxStyle = css`
    position: relative;
    &:after {
        content: "";
        display: block;
        padding-bottom: 100%;
    }
    &> {
        position: absolute;
        width: 100%;
        height: 100%;
    }
`

function PersonBox(Person: any){
    return (
        <div css = {PersonBoxStyle}>
            <div>
                {Person.name}
            </div>
        </div>
    )
}

export default PersonBox;