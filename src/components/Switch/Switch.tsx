import React from "react";
import { DxcSwitch } from "@dxc-technology/halstack-react";
import SwitchPropsType from "@dxc-technology/halstack-react/switch/types";

/**
 * @uxpindocurl https://developer.dxc.com/halstack/9/components/accordion/
 */
export default function Switch(props: SwitchPropsType) {
  return <DxcSwitch {...props} />;
}
