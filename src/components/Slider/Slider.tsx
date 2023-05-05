import React from "react";
import { DxcSlider } from "@dxc-technology/halstack-react";
import SliderPropsType from "@dxc-technology/halstack-react/slider/types";

/**
 * @uxpindocurl https://developer.dxc.com/halstack/9/components/accordion/
 */
export default function Slider(props: SliderPropsType) {
  return <DxcSlider {...props} />;
}
