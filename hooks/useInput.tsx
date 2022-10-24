import { ChangeEvent, SetStateAction, useState } from "react";

const useInput = <T extends number | string | object>(
  initalProps: T
): [T, (e: ChangeEvent<HTMLInputElement>) => void] => {
  const [value, setValue] = useState<T>(initalProps);

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value: inputValue } = e.target;
    switch (typeof value) {
      case "object":
        setValue({ ...value, [name]: inputValue });
        break;
      case "number":
        setValue(parseInt(inputValue) as SetStateAction<T>);
        break;
      case "string":
        setValue(inputValue as SetStateAction<T>);
    }
  };
  return [value, onChange];
};

export default useInput;
