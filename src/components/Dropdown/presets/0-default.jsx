import * as React from "react";
import Dropdown from "../Dropdown";
import Inset from "../../Inset/Inset";

const options = [
  {
    value: 1,
    label: "Android",
  },
  {
    value: 2,
    label: "Windows",
  },
  {
    value: 3,
    label: "IOS",
  },
];

export default (
  <Dropdown
    uxpId="dropdown"
    label="Select platform"
    options={options}
  ></Dropdown>
);
