import { css } from '@emotion/react'
import PageContainer from "../layout/container/pageContainer";

const blankError = css`
  font-size: 40px;
  background-color: black;
  width: 100vw;
  height: 100vh;
  align-items: center;
  justify-content: center;
  display: flex;
  color: yellow;
`;

function NotFound(){
  return (
    <PageContainer>
      <div css = {blankError}>
        <div>
          비정상적인 접근이 감지되었습니다.
        </div>
      </div>
    </PageContainer>
  )
}

export default NotFound;