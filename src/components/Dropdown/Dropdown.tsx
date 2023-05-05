import React from "react";
import { DxcDropdown } from "@dxc-technology/halstack-react";
import DropdownPropsType from "@dxc-technology/halstack-react/dropdown/types";

/**
 * @uxpindocurl https://developer.dxc.com/halstack/9/components/accordion/
 */
export default function Dropdown(props: DropdownPropsType) {
  return <DxcDropdown {...props} />;
}
