import { DxcPaginator } from "@dxc-technology/halstack-react";
import Props from "@dxc-technology/halstack-react/paginator/types";

/**
 * @uxpindocurl https://developer.dxc.com/halstack/9/components/paginator/
 */
export interface MergeProps extends Props {
  /**
   * Number of the current selected page.
   * @uxpinbind onPageChange 0
   */
  currentPage?: number;
}

export default function Paginator(props: MergeProps) {
  return <DxcPaginator {...props} />;
}
