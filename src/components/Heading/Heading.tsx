import React from "react";
import PropTypes from "prop-types";
import { DxcHeading } from "@dxc-technology/halstack-react";
import HeadingPropsType from "@dxc-technology/halstack-react/heading/types";

/**
 * @uxpindocurl https://developer.dxc.com/halstack/9/components/Heading/
 */
export default function Heading(props: HeadingPropsType) {
  return <DxcHeading {...props} />;
}
