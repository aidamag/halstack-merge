import React from "react";
import { DxcNavTabs } from "@dxc-technology/halstack-react";

/**
 * @uxpindocurl https://developer.dxc.com/halstack/9/components/accordion/
 */
export default function NavTabs(props: NavTabsPropsTypes) {
  return <DxcNavTabs {...props} />;
}

type NavTabsPropsTypes = {
  /**
   * Whether the icon should appear above or to the left of the label.
   */
  iconPosition?: "top" | "left";
  /**
   * Value of the tabindex for each tab.
   */
  tabIndex?: number;
  /**
   * Content of the tabs nav.
   */
  children: React.ReactNode;
};
