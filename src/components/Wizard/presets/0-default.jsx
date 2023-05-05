import * as React from "react";
import Wizard from "../Wizard";

export default (
  <Wizard
    uxpId="wizard"
    currentStep={1}
    steps={[
      {
        label: "Personal info",
        valid: true,
      },
      {
        label: "Policy",
        valid: true,
      },
      {
        label: "Payment",
      },
      {
        label: "Confirm details",
      },
    ]}
  ></Wizard>
);
