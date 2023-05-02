import { DxcInset } from "@dxc-technology/halstack-react";
import Props from "@dxc-technology/halstack-react/inset/types";

/**
 * @uxpindocurl https://developer.dxc.com/halstack/9/components/inset/
 */
/**
 * @uxpinwrappers
 * SkipContainerWrapper, NonResizableWrapper
 */
const Inset = (props: Props) => {
  return (
    <DxcInset {...props} />
  );
}
export default Inset;
