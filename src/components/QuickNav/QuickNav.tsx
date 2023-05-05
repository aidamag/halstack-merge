import React from "react";
import { DxcQuickNav } from "@dxc-technology/halstack-react";
import QuickNavPropsType from "@dxc-technology/halstack-react/quick-nav/types";

/**
 * @uxpindocurl https://developer.dxc.com/halstack/9/components/accordion/
 */
export default function QuickNav(props: QuickNavPropsType) {
  return <DxcQuickNav {...props} />;
}
