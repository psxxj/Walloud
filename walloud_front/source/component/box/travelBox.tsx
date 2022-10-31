import { css } from '@emotion/react'
import { useEffect } from 'react';
import { SetterOrUpdater } from 'recoil'
import Color from '../../layout/globalStyle/globalColor';
import { FontSize } from '../../layout/globalStyle/globalSize';
import DeleteTravelAPI from '../../api/deleteTravelAPI'

const TravelBoxStyle = css`
    height: 240px;
    width: 20vw;
    min-width: 150px;
    max-width: 200px;
    border-radius: 15px;
    display: flex;
    flex-direction: column;
    background-color: white;
    &>a {
        height: 60%;
        width: 100%;
        display: block;
        font-size: 20px;
        color: black;
        background-color: ${Color.blue05};
        height: 80%;
        border-radius: 15px 15px 0 0;
    }
    &>div {
        height: 40%;
        width: 100%;
        perspective: 200px;
        &>div {
            height: 100%;
            width: 100%;
            backface-visibility: hidden;
            transition: ease 1s;
            font-size: ${FontSize.fs14};
            &>div {
                padding: 10px 10px;
            }
            &>button {
                float: right;
                padding: 0 5px;
                background-color: transparent;
                border: none;
                &:hover {
                    cursor: pointer;
                }
                &:focus {
                    border: none;
                    outline: none;
                }
                &>img {
                    width: 24px;
                }
            }
        }
        &>.front {
            position: absolute;
            transform: rotateY(0deg);
        }
        &>.back {
            transform: rotateY(-180deg);
        }
    }
`

function TravelBox(name: string, id: number, SetCurrentTravel: SetterOrUpdater<number>){
    return (
        <div css = {TravelBoxStyle} key = {id}>
            <a href = {`/travel/${name}`} onClick = {() => {SetCurrentTravel(id)}}>
                <div> 사진 영역</div>
            </a>
            <div>
                <div className = 'front' id = {id.toString() + " front"}>
                    <div>{name}</div>
                    <button onClick = {() => {
                        var front = document.getElementById(id.toString() + " front");
                        front.style.transform = "rotateY(180deg)"
                        var back = document.getElementById(id.toString() + " back")
                        back.style.transform = "rotateY(0deg)"
                    }}>
                        <img src = "source/assets/icon/menu-vertical.svg" />
                    </button>
                </div>
                <div className = 'back' id = {id.toString() + " back"}>
                    <div>
                        {name}
                    </div>
                    <button onClick = {() => {
                        var front = document.getElementById(id.toString() + " front");
                        front.style.transform = "rotateY(0deg)"
                        var back = document.getElementById(id.toString() + " back")
                        back.style.transform = "rotateY(-180deg)"
                    }}>
                        <img src = "source/assets/icon/return.svg" />
                    </button>
                    <button onClick = {() => DeleteTravelAPI(id)
                    }>
                        <img src = "source/assets/icon/delete.svg" />
                    </button>
                    <button>
                        <img src = "source/assets/icon/edit.svg" />
                    </button>
                </div>
            </div>
        </div>
    )
}

export default TravelBox;