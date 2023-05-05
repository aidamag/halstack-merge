import Dialog from "../Dialog";
import Inset from "../../Inset/Inset";
import TextInput from "../../TextInput/TextInput";
import Flex from "../../Flex/Flex";
import Button from "../../Button/Button";

export default (
  <Dialog uxpId="dialog">
    <Inset top="1.5rem" bottom="1.5rem" uxpId="inset">
      <Flex gap="2rem" uxpId="flex">
        <TextInput label="Name" uxpId="text-input" />
        <TextInput label="Last name" uxpId="text-input" />
      </Flex>
    </Inset>
    <Inset bottom="4rem" uxpId="inset">
      <TextInput label="Address" size="fillParent" uxpId="text-input" />
    </Inset>
    <Flex justifyContent="center" uxpId="flex">
      <Button label="Add client" uxpId="button" />
      <Button label="Cancel" mode="text" uxpId="button" />
    </Flex>
  </Dialog>
);
