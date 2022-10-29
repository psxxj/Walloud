import React from "react";
import { Link, useParams } from "react-router-dom";
import moment from "moment-timezone";
import { useLocation } from "react-router-dom";
import { css } from "@emotion/react";
import { FontSize } from "../../layout/globalStyle/globalSize";

const EventsSectionStyle = css`
    border: 2px solid white;
    &>div{
        &:first-child{
        border-bottom: 2px solid white;
        }
        display: flex;
        &>span{
            font-size: ${FontSize.fs12};
            margin: 2% 2%;
            text-align: right;
            white-space: nowrap;
            &:nth-child(-n+2){
                width: 25%;
                display: block;
                &>a{
                    width: 100%;
                    height: 100%;
                }
            }
            &:nth-child(n+3){
                width: 20%;
            }
            &:last-child{
                width: 10%;
            }
        }
    }
`

function EventsSection(eventList: any[]) {

    return (
        <div css = {EventsSectionStyle}>
            <div>
                <span>Event</span>
                <span>Price</span>
                <span>Payer</span>
                <span>Date</span>
                <span>+</span>
            </div>
            {eventList.map((event, idx) => (
                <div key = {idx} className = 'event-row'>
                    <span>{event.name}</span>
                    <span>{event.price.toLocaleString()}₩</span>
                    <span>{event.payerName}</span>
                    <span>{moment.tz(event.date, "Asia/Seoul").format().substring(5, 10)}</span>
                    <span></span>
                </div>
                ))}
        </div>
    )   
}

export default EventsSection;