import React from "react";
import PropTypes from "prop-types";
import { DxcTextInput } from "@dxc-technology/halstack-react";
import TextInputPropsType from "@dxc-technology/halstack-react/text-input/types";

/**
 * @uxpindocurl https://developer.dxc.com/halstack/9/components/text-input/
 */
/**
 * @uxpinwrappers
 * SkipContainerWrapper, NonResizableWrapper
 */
export default function TextInput(props: TextInputPropsType) {
  return <DxcTextInput {...props} />;
}
