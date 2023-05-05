import React from "react";
import { DxcTag } from "@dxc-technology/halstack-react";
import DxcTagPropsType from "@dxc-technology/halstack-react/tag/types";

/**
 * @uxpindocurl https://developer.dxc.com/halstack/9/components/tag/
 */
export default function Tag(props: DxcTagPropsType) {
  return <DxcTag {...props} />;
}
