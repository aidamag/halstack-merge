import React from "react";
import { DxcFileInput } from "@dxc-technology/halstack-react";
import FileInputPropsType from "@dxc-technology/halstack-react/file-input/types";

/**
 * @uxpindocurl https://developer.dxc.com/halstack/9/components/accordion/
 */
export default function FileInput(props: FileInputPropsType) {
  return <DxcFileInput {...props} />;
}
