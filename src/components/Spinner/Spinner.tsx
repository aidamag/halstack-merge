import React from "react";
import { DxcSpinner } from "@dxc-technology/halstack-react";
import SpinnerPropsType from "@dxc-technology/halstack-react/spinner/types";

/**
 * @uxpindocurl https://developer.dxc.com/halstack/9/components/accordion/
 */
export default function Spinner(props: SpinnerPropsType) {
  return (
    <div>
      <DxcSpinner {...props} />
    </div>
  );
}
