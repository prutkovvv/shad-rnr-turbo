import { type ComponentProps, type FC } from "react";

const Text: FC<ComponentProps<"p">> = ({ className, children, ...props }) => {
  return (
    <p className={className} {...props}>
      {children}
    </p>
  );
};

export { Text };
