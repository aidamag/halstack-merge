import * as React from "react";
import ToggleGroup from "../ToggleGroup";
import Inset from "../../Inset/Inset";

export default (
  <ToggleGroup
    uxpId="toggleGroup"
    label="Choose a social network"
    options={[
      {
        value: 1,
        label: "Facebook",
      },
      {
        value: 2,
        label: "Twitter",
      },
      {
        value: 3,
        label: "Linkedin",
      },
    ]}
    value={1}
  ></ToggleGroup>
);
