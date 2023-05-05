import React from "react";
import { DxcTable } from "@dxc-technology/halstack-react";
import TablePropsType from "@dxc-technology/halstack-react/table/types";

/**
 * @uxpindocurl https://developer.dxc.com/halstack/9/components/accordion/
 */
export default function Table(props: TablePropsType) {
  return <DxcTable {...props} />;
}
