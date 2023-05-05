import React from "react";
import { DxcProgressBar } from "@dxc-technology/halstack-react";

type ProgressBarPropsType = React.ComponentProps<typeof DxcProgressBar>;

/**
 * @uxpindocurl https://developer.dxc.com/halstack/9/components/accordion/
 */
export default function ProgressBar(props: ProgressBarPropsType) {
  return <DxcProgressBar {...props} />;
}
