import { css } from '@emotion/react'

const joinSection = css`
  background-color: red;
`;

function JoinSection(){
    return (
        <div css = {joinSection}>
            레드 모드
        </div>
    )
}

export default JoinSection;