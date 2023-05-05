import React from "react";
import PropTypes from "prop-types";
import { DxcBleed } from "@dxc-technology/halstack-react";
import BleedPropsType from "@dxc-technology/halstack-react/bleed/types";
/**
 * @uxpindocurl https://developer.dxc.com/halstack/9/components/bleed/
 */
/**
 * @uxpinwrappers
 * SkipContainerWrapper, NonResizableWrapper
 */
export default function Bleed(props: BleedPropsType) {
  return <DxcBleed {...props} />;
}
