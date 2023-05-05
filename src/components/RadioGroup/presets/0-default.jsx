import * as React from "react";
import RadioGroup from "../RadioGroup";
import Inset from "../../Inset/Inset";

const options = [
  { label: "Female", value: "female" },
  { label: "Male", value: "male" },
  { label: "Non-binary", value: "non-binary" },
  { label: "Other", value: "other" },
];

export default (
  <RadioGroup uxpId="accordion" label="Gender" options={options} />
);
