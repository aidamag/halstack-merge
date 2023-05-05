import React from "react";
import { DxcTextarea } from "@dxc-technology/halstack-react";
import TextareaPropsType from "@dxc-technology/halstack-react/textarea/types";

/**
 * @uxpindocurl https://developer.dxc.com/halstack/9/components/accordion/
 */
export default function Textarea(props: TextareaPropsType) {
  return <DxcTextarea {...props} />;
}
