import React from "react";

interface Props {
  icon: string;
  size?: number | string;
  invert?: boolean;
  inactive?: boolean;
  color?: string;
}

declare function MaterialIcon(props: Props): React.ReactNode;

export default MaterialIcon;
