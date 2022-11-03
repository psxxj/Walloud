import { css } from "@emotion/react";

const SelectInputStyle = css``;
interface IProps {
  setType: (major: string) => void;
  typeList: Array<string>;
}

function SelectInput({ setType, typeList }: IProps) {
  const onInputHandler = (event: any) => {
    setType(event.target.value);
  };

  return (
    <select title="select" css={SelectInputStyle} onChange={onInputHandler}>
      {typeList.map((component, index) => (
        <option value={component} key={index}>
          {component}
        </option>
      ))}
    </select>
  );
}

export default SelectInput;
