import React from "react";
import { DxcWizard } from "@dxc-technology/halstack-react";
import WizardPropsType from "@dxc-technology/halstack-react/wizard/types";

/**
 * @uxpindocurl https://developer.dxc.com/halstack/9/components/accordion/
 */
export default function Wizard(props: WizardPropsType) {
  return (
    <div>
      <DxcWizard {...props} />
    </div>
  );
}
