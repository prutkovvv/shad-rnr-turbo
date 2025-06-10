import { type ComponentProps, type FC } from "react";

const View: FC<ComponentProps<"div">> = ({
  className,
  children,
  ...props
}: React.ComponentProps<"div">) => {
  return (
    <div className={className} {...props}>
      {children}
    </div>
  );
};

export { View };
