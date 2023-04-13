import React from "react";
import { jsNumberForAddress } from "react-jazzicon";
import Jazzicon from "react-jazzicon/dist/Jazzicon";
import { List, Divider } from "@mantine/core";
const Room_comment = ({ theroom_comment, comment_User }) => {
  return (
    <>
      <Divider my="xs" label="" labelPosition="center" />
      <List.Item
        icon={
          <Jazzicon diameter={36} seed={jsNumberForAddress(comment_User)} />
        }
      >
        {theroom_comment}
      </List.Item>
    </>
  );
};

export default Room_comment;
