import { css } from '@emotion/react'

const InputStyle = css`
    &>div {
        padding: 0 5px;
        font-weight: 600;
        &>span {
            color: red;
        }
    }

    &>input {
    display: block;
    width: 200px;
    height: 4vh;
    margin: 2% auto 3% auto;
    border-radius: 10px;
    font-size: 0.8rem;
    font-family: sans-serif;
    font-weight: 100;
    }
`
interface IProps {
    name: string | undefined;
    setType: (major: string) => void;
    message: string;
    required: boolean;
}
  
function SignInput({name, setType, message, required}: IProps){
    const onInputHandler = (event: any) => {
        setType(event.target.value);
    };

    return (
        <div css = {InputStyle}>
            <div>{message}<span>{required ? " *" : ""}</span></div> 
            <input type = {message} value = {name} onChange = {onInputHandler} />
        </div>
    )
    
}

export default SignInput;