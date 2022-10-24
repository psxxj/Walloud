import { css } from '@emotion/react'

const MobileContainerStyle = css`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100vw;
    height: 100vh;
    padding: 20px;
    background-color: blueviolet;
    // background-image: url();
    background-size: cover;
    background-repeat: no-repeat;
    gap: 20px;
` 
function MobileContainer(props: any){
  return (
    <div css = {MobileContainerStyle}>
        {props.children}
    </div>
  )
}

export default MobileContainer;