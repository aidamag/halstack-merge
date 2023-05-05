import React from "react";
import { DxcToggleGroup } from "@dxc-technology/halstack-react";
import ToggleGroupPropsType from "@dxc-technology/halstack-react/toggle-group/types";

/**
 * @uxpindocurl https://developer.dxc.com/halstack/9/components/toggle-group/
 */
export default function ToggleGroup(props: ToggleGroupPropsType) {
  return <DxcToggleGroup {...props}></DxcToggleGroup>;
}
