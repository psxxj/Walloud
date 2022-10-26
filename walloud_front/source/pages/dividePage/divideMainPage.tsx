import { css } from '@emotion/react'

const blankError = css`
  font-size: 40px;
  background-color: black;
  width: 100vw;
  height: 100vh;
  align-items: center;
  justify-content: center;
  display: flex;
  color: pink;
`;

function DivideMainPage(){
  return (
      <div css = {blankError}>
        <div>
          DivideByN main Page
        </div>
      </div>
  )
}

export default DivideMainPage;