import React from "react";
import { DxcRadioGroup } from "@dxc-technology/halstack-react";
import RadioGroupPropsType from "@dxc-technology/halstack-react/radio-group/types";

/**
 * @uxpindocurl https://developer.dxc.com/halstack/9/components/accordion/
 */
export default function RadioGroup(props: RadioGroupPropsType) {
  return <DxcRadioGroup {...props} />;
}
