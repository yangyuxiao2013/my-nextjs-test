import React from "react";
import { storiesOf } from "@storybook/react";
import { text } from "./";
// ______________________________________________________
//
storiesOf("atoms/text", module)
  .add("default", () => <text />);
