import { FC } from "react";
import { View as RNView, ViewProps } from "react-native";

const View: FC<ViewProps> = ({ className, children, ...props }) => {
  return (
    <RNView className={className} {...props}>
      {children}
    </RNView>
  );
};

export { View };
