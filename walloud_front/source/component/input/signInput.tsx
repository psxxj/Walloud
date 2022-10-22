import { css } from '@emotion/react'

const InputStyle = css`
    display: block;
    width: 200px;
    height: 5vh;
    margin: 1% auto 3% auto;
    border-radius: 10px;
    font-size: 0.8rem;
    font-family: sans-serif;
    font-weight: 100;
`
interface IProps {
    name: string | undefined;
    setType: (major: string) => void;
    message: string;
}
  
function SignInput({name, setType, message}: IProps){
    const onInputHandler = (event: any) => {
        setType(event.target.value);
    };

    return (
        <input css = {InputStyle}
        type = {message} value = {name} 
        placeholder = {message} onChange = {onInputHandler} />
    )
    
}

export default SignInput;