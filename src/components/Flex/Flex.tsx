import React from "react";
import { DxcFlex } from "@dxc-technology/halstack-react/";
import FlexPropsType from "@dxc-technology/halstack-react/flex/types";

export default function Flex(props: FlexPropsType) {
  return <DxcFlex {...props}>{props.children}</DxcFlex>;
}
