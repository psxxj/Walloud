import { css } from '@emotion/react'
import { useEffect } from 'react';
import { SetterOrUpdater } from 'recoil'
import Color from '../../layout/globalStyle/globalColor';

const TravelBoxStyle = css`
    height: 240px;
    width: 20vw;
    min-width: 150px;
    max-width: 200px;
    background-color: white;
    border-radius: 15px;
    perspective: 350px;
    &>div {
        height: 100%;
        width: 100%;
        backface-visibility: hidden;
        transform: ease 1s;
        &.front {
            position: absolute;
            transform: rotateY(0deg);
            &>a {
                height: 80%;
                width: 100%;
                display: block;
                background-color: white;
                font-size: 20px;
                color: black;
                border-radius: 15px;
                &>:first-of-type {
                    background-color: ${Color.blue05};
                    height: 80%;
                    border-radius: 15px 15px 0 0 ;
                }
                &>:nth-of-type(2) {
                    padding: 10px 10px;
                }
            }
            &>div {
                &>a {
                    float: right;
                    margin-right: 5px;
                    &:hover {
                        cursor: pointer;
                    }
                    &>img {
                        width: 20px;
                    }
                }
            }
        }
        &>.back {
            transform: rotateY(-180deg);
        }
    }
`

function TravelBox(name: string, id: number, SetCurrentTravel: SetterOrUpdater<number>){
    return (
        <div css = {TravelBoxStyle} key = {id}>
            <div className = "front">
                <a href = {`/travel/${name}`} onClick = {() => {SetCurrentTravel(id)}}>
                    <div> 사진 영역</div>
                    <div>{name}</div>
                </a>
                <div>
                    <a>
                        <img src = "source/assets/icon/menu-vertical.svg" />
                    </a>
                </div>
            </div>
            <div className = "back">
                으악새
            </div>
        </div>
    )
}

export default TravelBox;