import { css } from "@emotion/react";
import PersonBox from "../../component/box/personBox";
import { FontSize } from "../../layout/globalStyle/globalSize";

function PersonSection(personList: any[]) {
    const personLength = personList.length

    const PersonSectionStyle = css`
    min-height: 70vh;
    &>:nth-child(1) {
        font-size: ${FontSize.fs18};
        padding: 10px 10px;
        border-bottom: 2px solid white;
    }
    &>:nth-child(2) {
        display: grid;

        grid-template-columns: ${personLength < 4 ? "1fr 1fr" : "1fr 1fr 1fr"};
    }
    .Manager {
        border: 1px solid white;
    }
`

    function PersonType(type: string){
        const PersonBoxs = personList.filter(
            person =>
                (person.role && type === "Manager") ||
                (!person.role && person.difference >= 0 && type === "Recieve") ||
                (person.difference < 0 && type === "Send"))
            .map(
                (selectPerson, idx) => {
                    return PersonBox(selectPerson, idx, type)
                }
            )
        return PersonBoxs
    }

    return (
        <div css = {PersonSectionStyle}>
            <div> 
                Person 
            </div>
            <div>
                {PersonType("Send")}
                {PersonType("Manager")}
                {PersonType("Recieve")}
            </div>
        </div>
    )   
}

export default PersonSection;