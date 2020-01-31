import React, { ChangeEvent, FC, useState } from 'react';
import { Input } from '@material-ui/core';

interface IProps {
  onChange: (s: string) => void;
  delay?: number;
}

/**
 * @description This input inplements a delay before emit the value typed by the user.
 * @param onChange the function that is going to be called after user stop typing and after the daley.
 * @param delay the delay applyed after the user stop typing.
 */
const CustomInput: FC<IProps> = ({ onChange, delay }) => {
  const [time, setTime] = useState(0);

  /**
   * @description implements the delay passad as props or the defualt that is 1s.
   * @param e React.ChangeEvent
   */
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { value } = e.currentTarget;

    if (time) clearTimeout(time);

    const timeout = window.setTimeout(
      () => {
        if (value.trim() !== '') onChange(value.trim());
      },
      delay ? delay : 1000
    );

    if (timeout) setTime(timeout);
  };
  return <Input onChange={handleChange} />;
};

export default CustomInput;
