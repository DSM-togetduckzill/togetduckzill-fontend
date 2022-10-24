import React, { ChangeEvent, forwardRef, HTMLInputTypeAttribute } from "react";
import styled from "@emotion/styled";
interface InputProps {
  value: string;
  name?: string;
  placeholder?: string;
  limit?: number;
  label?: string;
  type?: HTMLInputTypeAttribute;
  errorMessage?: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
}

const InputBase = (
  {
    name,
    type,
    value,
    errorMessage,
    placeholder,
    label,
    limit,
    onChange,
  }: InputProps,
  forwardedRef?: React.ForwardedRef<HTMLInputElement>
) => {
  return (
    <LabelContainer>
      {label}
      <CustomInput
        name={name}
        type={type}
        maxLength={limit}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        ref={forwardedRef}
      />
      <InputBottomStatueBar>
        <div className="error">{errorMessage}</div>
        {limit && (
          <div className="limit">
            {value.length}/{limit}
          </div>
        )}
      </InputBottomStatueBar>
    </LabelContainer>
  );
};

const LabelContainer = styled.div`
  width: 100%;
  font-size: 16px;
  font-weight: 500;
  display: flex;
  flex-direction: column;
  gap: 4px;
`;

const CustomInput = styled.input`
  height: 40px;
  border: none;
  outline: none;
  width: 100%;
  border-radius: 8px;
  padding: 0 16px;
  font-size: 12px;
`;

const InputBottomStatueBar = styled.div`
  font-size: 12px;
  font-weight: 500;
  display: flex;
  padding: 0 8px;
  height: 14px;
  justify-content: space-between;
  > .error {
    color: #ff4c41;
  }
  > .limit {
    color: #a0a0a0;
  }
`;

const Input = forwardRef(InputBase);

export default Input;
