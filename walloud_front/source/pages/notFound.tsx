import { css } from '@emotion/react'
import PageContainer from "../layout/container/pageContainer";

const blankError = css`
  font-size: 40px;
  background-color: black;
  width: 100vw;
  height: 100vh;
  align-items: center;
  justify-content: center;
`;

function NotFound(){
  return (
    <PageContainer>
      <div css = {blankError}>
        <div>
          잘못된 접근을 하지 마세요.
        </div>
      </div>
    </PageContainer>
  )
}

export default NotFound;