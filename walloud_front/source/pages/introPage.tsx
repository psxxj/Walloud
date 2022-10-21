import { css } from '@emotion/react'
import PageContainer from "../layout/container/pageContainer";
import JoinSection from './introPage/joinSection';
import VisualSection from "./introPage/visualSection";

function IntroPage() {
  return (
    <PageContainer>
      <div css = {{
        '&>div': {
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          width: '100vw',
          height: '100vh'
        },
      }}>
        <VisualSection />
        <JoinSection />
      </div>
    </PageContainer>
  );
}

export default IntroPage;