import React from "react";
import { DxcPaginator } from "@dxc-technology/halstack-react";
import PaginatorPropsType from "@dxc-technology/halstack-react/paginator/types";

/**
 * @uxpindocurl https://developer.dxc.com/halstack/9/components/accordion/
 */
export default function Paginator(props: PaginatorPropsType) {
  return <DxcPaginator {...props} />;
}
