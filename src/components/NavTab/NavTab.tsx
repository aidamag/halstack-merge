import { DxcNavTabs } from "@dxc-technology/halstack-react";
import {TabProps} from "@dxc-technology/halstack-react/nav-tabs/types";

/**
 * @uxpindocurl https://developer.dxc.com/halstack/9/components/nav-tabs/
 */

export default function NavTab(props: TabProps) {
  return (
      <DxcNavTabs.Tab {...props} />
  );
}

