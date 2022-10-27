import { css } from '@emotion/react'
import { useRecoilState, useSetRecoilState } from 'recoil'
import { currentTravelState } from '../../recoils/travel'

const TravelBoxStyle = css`
    height: 200px;
    width: 180px;
    border: 2px solid black;
    &>a {
        height: 100%;
        width: 100%;
        display: block;
        background-color: white;
        font-size: 20px;
        color: black;
        &>:first-of-type {
            background-color: purple;
            height: 60%;
        }
        &>:last-child {
            background-color: white;
            padding: 10px 10px;
        }
    }
`

function TravelBox(name: string, id: number){
    const [currentTravel, SetCurrentTravel] = useRecoilState(currentTravelState);

    return (
        <div css = {TravelBoxStyle}>
            <a href = {`/travel/${name}`} onClick = {() => {SetCurrentTravel(id)}}>
                <div>사진 영역</div>
                <div>
                    {name}
                </div>
            </a>
        </div>
    )
}

export default TravelBox;