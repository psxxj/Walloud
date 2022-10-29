import { css } from "@emotion/react";
import PersonBox from "../../component/box/personBox";

const PersonSectionStyle = css`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
`

function PersonSection(personList: any[]) {

    return (
        <div css = {PersonSectionStyle}>
            {personList.map((person, idx) => (
                PersonBox(person)
            ))}
        </div>
    )   
}

export default PersonSection;