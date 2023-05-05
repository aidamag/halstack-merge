import React from "react";
import { DxcNumberInput } from "@dxc-technology/halstack-react";
import NumberInputPropsType from "@dxc-technology/halstack-react/number-input/types";

/**
 * @uxpindocurl https://developer.dxc.com/halstack/9/components/accordion/
 */
export default function NumberInput(props: NumberInputPropsType) {
  return <DxcNumberInput {...props} />;
}
