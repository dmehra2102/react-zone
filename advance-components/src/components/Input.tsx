import { type ComponentPropsWithoutRef } from "react";

type Props = {
  label: string;
  id: string;
} & ComponentPropsWithoutRef<"input">;

const Input = ({ id, label, ...props }: Props) => {
  return (
    <p>
      <label htmlFor={id}>{label}</label>
      <input id={id} {...props} />
    </p>
  );
};

export default Input;
