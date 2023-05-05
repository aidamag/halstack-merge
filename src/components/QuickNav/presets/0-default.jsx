import * as React from "react";
import QuickNav from "../QuickNav";

const links = [
  {
    label: "Overview",
  },
  {
    label: "Principles",
    links: [
      { label: "Color" },
      { label: "Spacing" },
      { label: "Typography" },
      { label: "Layout" },
      {
        label: "Themes",
        links: [{ label: "Light" }, { label: "Dark" }],
      },
    ],
  },
];

export default <QuickNav links={links} uxpId="quicknav"></QuickNav>;
