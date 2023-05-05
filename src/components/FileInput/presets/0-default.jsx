import * as React from "react";
import FileInput from "../FileInput";
import Inset from "../../Inset/Inset";
import Flex from "../../Flex/Flex";
import Button from "../../Button/Button";

export default (
  <Inset space="2rem" uxpId="accordion">
    <Flex direction="column" gap="2rem" uxpId="accordion">
      <FileInput uxpId="accordion" label="Select your files" />
      <Button label="Submit" type="submit" />
    </Flex>
  </Inset>
);
