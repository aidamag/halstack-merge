import React from "react";
import PropTypes from "prop-types";
import { DxcChip } from "@dxc-technology/halstack-react";
import ChipPropsType from "@dxc-technology/halstack-react/chip/types";
/**
 * @uxpindocurl https://developer.dxc.com/halstack/9/components/chip/
 */
export default function Chip(props: ChipPropsType) {
  return <DxcChip {...props} />;
}
