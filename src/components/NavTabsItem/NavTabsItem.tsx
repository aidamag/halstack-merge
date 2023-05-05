import { ReactNode, SVGProps } from "react";
import { DxcNavTabs } from "@dxc-technology/halstack-react";

/**
 * @uxpindocurl https://developer.dxc.com/halstack/9/components/accordion/
 */
export default function NavTabsItem(props: TabProps) {
  return <DxcNavTabs.Tab {...props}></DxcNavTabs.Tab>;
}

type SVG = ReactNode & SVGProps<SVGSVGElement>;
type TabProps = {
  /**
   * Whether the tab is active or not.
   */
  active?: boolean;
  /**
   * Whether the tab is disabled or not.
   */
  disabled?: boolean;
  /**
   * Page to be opened when the user clicks on the tab.
   */
  href?: string;
  /**
   * Element or path used as the icon that will be displayed in the tab.
   */
  icon?: string | SVG;
  /**
   * If the value is 'true', an empty badge will appear.
   * If it is 'false', no badge will appear.
   * If a number is put it will be shown as the label of the notification
   * in the tab, taking into account that if that number is greater than 99,
   * it will appear as '+99' in the badge.
   */
  notificationNumber?: boolean | number;
  /**
   * Content of the tab.
   */
  children: string;
};
