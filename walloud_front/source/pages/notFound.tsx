import { css } from '@emotion/react'
import PageContainer from "../layout/container/pageContainer";

const blankError = css`
  font-size: 40px;
`;

function NotFound(){
  return (
    <PageContainer>
      <div css = {blankError}>
        잘못된 접근을 하지 마세요.
      </div>
      <div css = {blankError}>
        잘못된 접근을 하지 마세요.
      </div>
      <div css = {blankError}>
        잘못된 접근을 하지 마세요.
      </div>
      <div css = {blankError}>
        잘못된 접근을 하지 마세요.
      </div>
      <div css = {blankError}>
        잘못된 접근을 하지 마세요.
      </div>
      <div css = {blankError}>
        잘못된 접근을 하지 마세요.
      </div>
      <div css = {blankError}>
        잘못된 접근을 하지 마세요.
      </div>
    </PageContainer>
  )
}

export default NotFound;