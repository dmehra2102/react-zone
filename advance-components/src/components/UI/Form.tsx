import {
  ComponentPropsWithoutRef,
  FormEvent,
  forwardRef,
  useImperativeHandle,
  useRef,
} from "react";

export type FormHandler = {
  clear: () => void;
};

type FormProps = ComponentPropsWithoutRef<"form"> & {
  onSave: (value: unknown) => void;
};

const Form = forwardRef<FormHandler, FormProps>(
  ({ onSave, children, ...props }, ref) => {
    const formRef = useRef<HTMLFormElement>(null);

    const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
      event.preventDefault();

      const formData = new FormData(event.currentTarget);
      const data = Object.fromEntries(formData);

      onSave(data);
    };

    useImperativeHandle(ref, () => {
      return {
        clear() {
          formRef.current?.reset();
        },
      };
    });

    return (
      <form {...props} onSubmit={handleSubmit} ref={formRef}>
        {children}
      </form>
    );
  }
);

export default Form;
