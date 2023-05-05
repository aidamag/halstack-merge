import React from "react";
import PropTypes from "prop-types";
import { DxcBox } from "@dxc-technology/halstack-react";
import BoxPropsType from "@dxc-technology/halstack-react/box/types";
/**
 * @uxpindocurl https://developer.dxc.com/halstack/9/components/box/
 */
/**
 * @uxpinwrappers
 * SkipContainerWrapper, NonResizableWrapper
 */
export default function Box(props: BoxPropsType) {
  return <DxcBox {...props} />;
}
