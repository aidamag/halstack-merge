import React from "react";
import { DxcPasswordInput } from "@dxc-technology/halstack-react";
import PasswordInputPropsType from "@dxc-technology/halstack-react/password-input/types";

/**
 * @uxpindocurl https://developer.dxc.com/halstack/9/components/accordion/
 */
export default function PasswordInput(props: PasswordInputPropsType) {
  return <DxcPasswordInput {...props} />;
}
