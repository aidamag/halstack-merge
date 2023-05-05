import React from "react";
import { DxcDateInput } from "@dxc-technology/halstack-react";
import DateInputPropsType from "@dxc-technology/halstack-react/date-input/types";

/**
 * @uxpindocurl https://developer.dxc.com/halstack/9/components/accordion/
 */
export default function DateInput(props: DateInputPropsType) {
  return <DxcDateInput {...props} />;
}
